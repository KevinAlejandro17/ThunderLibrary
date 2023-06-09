import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import BookCard from "./BookCard";
import bg from "../../assets/images/background.png";
import { useAuth } from "../../context/Context";

const SearchResults = ({ isQuery, setIsQuery }) => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("");

  const { query } = useAuth();

  const handleSearch = () => {
    setLoading(true);
    try {
      if (query !== "") {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
          .then((response) => response.json())
          .then((data) => {
            const items = data.items.filter(
              (item) => item.volumeInfo?.imageLinks !== undefined
            );
            setBooks(items);
            console.log(data.items);
          });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsQuery(false);
      setTimeout(() => {
        setLoading(false);
      }, 800);
    }
  };

  const [rental, setRental] = useState({});
  const [showRental, setShowRental] = useState(false);

  useEffect(() => {
    isQuery && handleSearch();
  }, [query, isQuery]);

  return (
    <>
      <Container sx={styles.container}>
        <Typography variant="h2">Books</Typography>

        {loading ? (
          <Box
            sx={{
              height: "80vh",
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <CircularProgress sx={{ color: "lightskyblue" }} />
          </Box>
        ) : (
          <>
            <Grid sx={styles.results}>
              {books &&
                books.map(({ volumeInfo, id }) => (
                  <Grid item sx={styles.result} key={id}>
                    <BookCard
                      title={volumeInfo.title}
                      author={volumeInfo.authors}
                      imgURL={
                        volumeInfo.imageLinks
                          ? volumeInfo.imageLinks.thumbnail
                          : bg
                      }
                      setRental={setRental}
                      setShowRental={setShowRental}
                      showRental={showRental}
                    />
                  </Grid>
                ))}
            </Grid>
          </>
        )}
      
      </Container>
    </>
  );
};

export default SearchResults;

const styles = {
  container: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    width: "900px",
  },
  results: {
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // ajustar a tu preferencia
    width: "100%",
    pb: 5,
  },
  result: {
    mt: 4,
  },
};
