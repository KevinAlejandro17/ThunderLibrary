import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { useAuth } from "../../context/Context";
import { supabase } from "./../../../backend/client";

function BookSearch({ onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (query === "") {
      setSearch(false);
    }
  }, [query]);

  const { setSession } = useAuth();

  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [search, setSearch] = useState(false);

 /*  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
        setSession(false);
      }
    });
  }, []); */

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch({ query, genre, year, author });
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
    console.log(user);
  };

  getUser();

  return (
    <Box
      id="search"
      sx={{
        pt: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Buscar</Typography>
      <React.Fragment>
        <h3>Ingresa los datos del libro que deseas.</h3>
        <form onSubmit={handleSubmit} style={{ marginBottom: "100px" }}>
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
            <Stack spacing={0} sx={{ width: "25vw", mb: 2 }}>
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
            <Button
              variant="contained"
              type="submit"
              onClick={() => setSearch(true)}
            >
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
        {search ? <SearchResults query={query} /> : null}
      </React.Fragment>
    </Box>
  );
}

export default BookSearch;
const styles = {
  input: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
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
};
