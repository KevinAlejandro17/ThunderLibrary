import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./Books.css";

const BookCard = ({ title, author, imgURL }) => {
  const [info, setInfo] = useState(false);

  return (
    <Card
      className="card"
      sx={{
        backgroundColor: "#36454F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ReactCardFlip
        isFlipped={!info}
        flipDirection="horizontal"
        flipSpeedFrontToBack={1}
      >
        <CardContent>
          <Box sx={styles.bookInfo}>
            <Typography variant="h6">{title}</Typography>
            <Typography variant="body">Autor: {author}</Typography>
          </Box>
        </CardContent>

        <CardMedia>
          <img src={imgURL} alt="img" />
        </CardMedia>
      </ReactCardFlip>
    </Card>
  );
};

export default BookCard;

const styles = {
  bookInfo: {
    display: "flex",
    flexDirection: "column",
    px: 3,
  },
};
