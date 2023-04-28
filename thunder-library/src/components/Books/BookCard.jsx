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

import "./Books.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "Roboto"].join(","),
  },
});

const BookCard = ({ title, author, imgURL }) => {
  const [info, setInfo] = useState(false);

  return (
    <ThemeProvider>
      <Card
        className="card"
        sx={{
          backgroundColor: "#36454F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
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
    },
    "& .MuiTypography-h6": { fontSize: 14 },
  },
  bookImg: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
