import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  styled,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchResults from "../components/Books/SearchResults";
import { useAuth } from "../context/Context";
import { supabase } from "../../backend/client";

import Sidebar from "../components/Sidebar";

function BookSearch({ onSearch }) {
  const navigate = useNavigate();

  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");

  const [isQuery, setIsQuery] = useState(false);

  const { setSession, query, setQuery, drawerOpen } = useAuth();

  useEffect(() => {
    if (query === "") {
      setSearch(false);
    }
  }, [query]);

  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [search, setSearch] = useState(false);
  const [showBooks, setShowBooks] = useState(false);

  const handleSearch = () => {
    if (query) {
      setSearch(true);
      setShowBooks(true);
    } else {
      toast("Ingresa un término de búsqueda");
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/");
        setSession(false);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsQuery(true);
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const getUser = async () => {
    const user = await supabase.auth.getUser();
    //console.log(user);
  };

  getUser();

  return (
    <Box
      id="search"
      sx={{
        pt: 15,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#202020",
        color: "white",
      }}
    >
      <Sidebar />

      <Grid container position="relative">
        <Grid
          item
          md={4}
          sx={!search ? styles.searchFormFixed : styles.searchForm}
        >
          <Typography variant="h4">Buscar</Typography>
          <h3>Ingresa los datos del libro que deseas.</h3>
          <form onSubmit={handleSubmit}>
            <TextField
              id="book-search"
              label="Título"
              value={query}
              onChange={handleQueryChange}
              fullWidth
              sx={styles.input}
              size="small"
            />
            {advancedSearch ? (
              <Stack sx={{ width: "25vw", mb: 2 }}>
                <TextField
                  id="book-genre"
                  label="Género"
                  value={genre}
                  onChange={handleGenreChange}
                  fullWidth
                  sx={styles.input}
                  size="small"
                />
                <TextField
                  id="book-year"
                  label="Año de Publicación"
                  type="number"
                  value={year}
                  onChange={handleYearChange}
                  fullWidth
                  sx={styles.input}
                  size="small"
                />
                <TextField
                  id="book-author"
                  label="Autor"
                  value={author}
                  onChange={handleAuthorChange}
                  fullWidth
                  sx={styles.input}
                  size="small"
                />
              </Stack>
            ) : null}
            <Stack direction="row" spacing={2}>
              <Button variant="contained" type="submit" onClick={handleSearch}>
                Buscar
              </Button>
              <Button
                variant="outlined"
                disabled={query === ""}
                onClick={() => setAdvancedSearch(!advancedSearch)}
              >
                {!advancedSearch ? "Búsqueda avanzada" : "Búsqueda simple"}
              </Button>
            </Stack>
          </form>
        </Grid>
        <Grid item md={8} sx={{ height: "100vh", opacity: showBooks ? 1 : 0 }}>
          <SearchResults isQuery={isQuery} setIsQuery={setIsQuery} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default BookSearch;

const styles = {
  input: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    mb: 2,
  },
  searchForm: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    mt: 5,
    px: 2,
    position: "relative",
    transition: "all 0.5s ease-out",
  },
  searchFormFixed: {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    top: "30%",
    bottom: "30%",
    left: "30%",
    right: "30%",
    zIndex: 1000,
  },
};
