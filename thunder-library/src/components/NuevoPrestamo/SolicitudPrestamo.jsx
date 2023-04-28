import * as React from "react";
import { useState, useRef } from "react";
import { Avatar,Button, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Paper, Container, Grid, Typography, createTheme, ThemeProvider, styled, Stack
} from "@mui/material";

import background from "../../assets/images/background.png";

const StyledTextField = styled(TextField)({
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
});

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Thunder Library
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const estilofondo = {
  paperContainer: {
    height: "100vh",
    backgroundSize: "cover",
    backgroundImage: `url(${background})`
  }
};

const SolicitudPrestamo = () => {

  const form = useRef();

  const [bookTitle, setBtitle] = useState("");
  const [bookReference, setBref] = useState("");
  const [mensaje, setMensaje] = useState("");
 
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      };

  return (
    <ThemeProvider theme={theme}>
      <Paper style={estilofondo.paperContainer}>
        <Container maxWidth="sm"
          sx={{pt:"10vh"}}
        >
        <Typography variant="h4" sx={{color:"whitesmoke", mb:2, mt:2}}>Nuevo préstamo</Typography>
        <form onSubmit={handleSubmit} ref={form} >
          <StyledTextField
            type="text"
            name="book_title"
            variant="outlined"
            label="Título"
            onChange={(e) => setBtitle(e.target.value)}
            value={bookTitle}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <StyledTextField
            type="text"
            variant="outlined"
            label="Referencia"
            name="book_ref"
            onChange={(e) => setBref(e.target.value)}
            value={bookReference}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <StyledTextField
            type="text"
            variant="outlined"
            name="message"
            label="Mensaje"
            onChange={(e) => setMensaje(e.target.value)}
            value={mensaje}
            fullWidth
            sx={{ mb: 4 }}
          />
          <Typography variant="body2" sx={{color:"whitesmoke", mb:2, mt:2}}>
            Los campos marcados con * son necesarios 
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Enviar
          </Button>
        </form>
        </Container>
      </Paper>
    </ThemeProvider>
  );
};

export default SolicitudPrestamo;