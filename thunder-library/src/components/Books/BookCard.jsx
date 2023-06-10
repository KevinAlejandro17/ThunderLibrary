import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import "./Books.css";

import { useAuth } from "../../context/Context";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Roboto"].join(","),
    color: "white",
  },
});

const BookCard = ({ title, author, imgURL, category, bookID }) => {
  const [info, setInfo] = useState(false);

  const navigate = useNavigate();
  const { currentUser, setSelectedBook } = useAuth();

  const oneAuthor = author[0];
  const selectedBook = { title, oneAuthor, category, bookID };

  const handleRental = () => {
    setSelectedBook(selectedBook);
    navigate("/rental");
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        className="card"
        sx={{
          backgroundColor: "#36454F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleRental}
        onMouseEnter={() => setInfo(true)}
        onMouseLeave={() => setInfo(false)}
      >
        <ReactCardFlip
          isFlipped={!info}
          flipDirection="horizontal"
          flipSpeedFrontToBack={1}
        >
          <CardContent>
            <Box sx={styles.bookInfo}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="h6">Autor: {author}</Typography>
            </Box>
          </CardContent>
          <CardMedia>
            <Box sx={styles.bookImg}>
              <img src={imgURL} alt="img" />
            </Box>
          </CardMedia>
        </ReactCardFlip>
      </Card>
    </ThemeProvider>
  );
};

export default BookCard;

const styles = {
  bookInfo: {
    display: "flex",
    flexDirection: "column",
    px: 0.5,
    "& .MuiTypography-root": {
      fontFamily: "Open Sans, sans-serif",
      color: "white",
    },
    "& .MuiTypography-h6": { fontSize: 14 },
  },
  bookImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
