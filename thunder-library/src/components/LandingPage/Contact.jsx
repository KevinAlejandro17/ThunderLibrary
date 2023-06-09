import React, { useState, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  styled,
} from "@mui/material";

import { emailjsConfig } from "../../../config";
import emailjs from "@emailjs/browser";

import "../../App.css";

import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const { serviceID, templateID, publicKey } = emailjsConfig;

    if (nombre && apellido && email && telefono && mensaje) {
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
    } else {
      toast.error("Debes llenar todos los campos", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

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
          <Stack
            spacing={3}
            direction="row"
            sx={{ marginBottom: 2, width: "40vw" }}
          >
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
          <Stack spacing={3}>
            <StyledTextField
              type="email"
              name="from_email"
              variant="outlined"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
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
            />
            <StyledTextField
              type="text"
              variant="outlined"
              name="message"
              label="Mensaje"
              onChange={(e) => setMensaje(e.target.value)}
              value={mensaje}
              fullWidth
              multiline
              rows={4}
            />
          </Stack>
          <Box sx={{ mb: 3 }}>
            <h4>Los campos marcados con * son necesarios</h4>
          </Box>
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
