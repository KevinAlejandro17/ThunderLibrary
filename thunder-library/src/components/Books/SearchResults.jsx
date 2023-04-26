import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";

import BookCard from "./BookCard";

const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("el principito");
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    if (search !== "") {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.items);
          console.log(data.items);
        });
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box sx={styles.container}>
      <h1>Books</h1>
      <Grid item sx={styles.results}>
        {books &&
          books.map(({ volumeInfo, id }) => (
            <Grid item sx={styles.result} key={id} md={2}>
              <BookCard
                title={volumeInfo.title}
                author={volumeInfo.authors}
                imgURL={
                  volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : null
                }
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default SearchResults;

const styles = {
  container: {
    textAlign: "center",
    marginY: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: "100%",
  },
  results: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", // ajustar a tu preferencia

    width: "80%",
    pt: 3,
    pb: 5,
  },
  result: {
    mt: 4,
  },
};
