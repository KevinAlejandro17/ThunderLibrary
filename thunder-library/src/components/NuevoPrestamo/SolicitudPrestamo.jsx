import * as React from "react";
import { useState, useRef } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Container,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  styled,
  Stack,
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

import { useNavigate } from "react-router-dom";

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

import { useAuth } from "../../context/Context";
import { toast } from "react-hot-toast";
import { supabase } from "../../../backend/client";

const theme = createTheme({
  palette: {
    text: {
      disabled: "#eee",
    },
  },
});

const SolicitudPrestamo = ({ titulo, autor }) => {
  const { selectedBook, currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log(selectedBook);
    console.log(currentUser);
  }, []);

  const [bookTitle, setBtitle] = useState(selectedBook.title);
  const [author, setAuthor] = useState(selectedBook.oneAuthor);
  const [category, setCategory] = useState(selectedBook.category);
  const [mensaje, setMensaje] = useState("");

  const createBook = async () => {
    // Create book info
    const { error } = await supabase.from("book").insert({
      isbn: selectedBook.bookID,
      title: selectedBook.title,
      category: selectedBook.category,
      author: selectedBook.oneAuthor,
    });

    if (error) {
      toast.error(error.message);
    }
  };

  const registerRental = async () => {
    let fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 30);
    let ret_date = fechaActual.toISOString();

    const { error } = await supabase.from("rental").insert({
      return_date: ret_date,
      id_user: currentUser.id,
      isbn: selectedBook.bookID,
    });

    if (error) {
      toast.error(error.message);
    } 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Create book info
      createBook();

      //Create Rental info
      registerRental();
    } catch (error) {
      toast.error(error.message);
    }

    toast.success("Alquiler registrado correctamente").then(
      setTimeout(() => {
        navigate("/dashboard#viewRentals");
      }, 2000)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100vh", background: "#202020" }}>
        <Container maxWidth="sm" sx={{ pt: "10vh", mt: "1rem" }}>
          <Typography variant="h4" sx={{ color: "whitesmoke", mb: 6, mt: 2 }}>
            Nuevo préstamo
          </Typography>
          <form onSubmit={handleSubmit}>
            <StyledTextField
              disabled
              type="text"
              variant="outlined"
              label="Título"
              value={bookTitle}
              fullWidth
              sx={{ mb: 4 }}
            />
            <StyledTextField
              disabled
              type="text"
              variant="outlined"
              label="Autor"
              value={author}
              fullWidth
              sx={{ mb: 4 }}
            />

            <StyledTextField
              disabled
              type="text"
              variant="outlined"
              label="Categoría"
              value={category}
              fullWidth
              sx={{ mb: 4 }}
            />

            <StyledTextField
              multiline
              rows={4}
              type="text"
              variant="outlined"
              name="message"
              label="Observaciones (opcional)"
              onChange={(e) => setMensaje(e.target.value)}
              value={mensaje}
              fullWidth
              sx={{ mb: 4 }}
            />

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
