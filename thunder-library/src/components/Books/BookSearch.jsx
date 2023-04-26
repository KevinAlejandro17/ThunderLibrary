import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  styled,
} from "@mui/material";

import SearchResults from "./SearchResults";

function BookSearch({ onSearch }) {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");

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

  return (
    <Box
      id="search"
      sx={{
        py: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3">Buscar</Typography>
      <React.Fragment>
        <h3>Ingresa los datos del libro que deseas.</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            id="book-search"
            label="Título"
            value={query}
            onChange={handleQueryChange}
            fullWidth
            sx={styles.input}
          />
          <TextField
            id="book-genre"
            label="Género"
            value={genre}
            onChange={handleGenreChange}
            fullWidth
            sx={styles.input}
          />
          <TextField
            id="book-year"
            label="Año de publicación"
            type="number"
            value={year}
            onChange={handleYearChange}
            fullWidth
            sx={styles.input}
          />
          <TextField
            id="book-author"
            label="Autor"
            value={author}
            onChange={handleAuthorChange}
            fullWidth
            sx={styles.input}
          />
          <Button variant="contained" type="submit">
            Search
          </Button>
        </form>
        <SearchResults />
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
    mb: 4, // add margin top
  },
};
