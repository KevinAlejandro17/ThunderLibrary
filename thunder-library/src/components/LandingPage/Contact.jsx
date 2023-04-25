import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  styled,
} from "@mui/material";

import { emailjsConfig } from "../../../config";
import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, publicKey } = emailjsConfig;
    setNombre("");
    setApellido("");
    setEmail("");
    setTelefono("");
    setMensaje("");

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(nombre, apellido, email, telefono, mensaje);
  }

  return (
    <Box
      id="contact"
      sx={{ height: "80vh", display: "grid", placeItems: "center", py: 10 }}
    >
      <Typography variant="h3">Contáctanos</Typography>
      <React.Fragment>
        <h3>
          Ingresa tus datos en el formulario y muy pronto te contactaremos
        </h3>
        <form onSubmit={handleSubmit} ref={form}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 2 }}>
            <StyledTextField
              type="text"
              variant="outlined"
              label="Nombre"
              name="from_name"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              fullWidth
              required
            />
            <StyledTextField
              type="text"
              variant="outlined"
              label="Apellido"
              name="from_lname"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              fullWidth
              required
            />
          </Stack>
          <StyledTextField
            type="email"
            name="from_email"
            variant="outlined"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <StyledTextField
            type="number"
            variant="outlined"
            label="Teléfono"
            name="phone_number"
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
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
          <h4>Los campos marcados con * son necesarios</h4>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              sendEmail(e);
            }}
          >
            Enviar
          </Button>
        </form>
      </React.Fragment>
    </Box>
  );
};

export default Contact;
