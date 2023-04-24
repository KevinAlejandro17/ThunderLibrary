import React, { useState }  from "react";
import { Box, Typography, TextField, Button, Stack, styled } from '@mui/material';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
});

const Contact = () => {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [mensaje, setMensaje] = useState('')
 
  function handleSubmit(event) {
    event.preventDefault();
    console.log(nombre, apellido, email, telefono, mensaje) 
  }
 
  return (
    <Box
      id="contact"
      sx={{ height: "80vh", display: "grid", placeItems: "center", py: 10 }}
    >
    <Typography variant="h3">Contáctanos</Typography>
    <React.Fragment>
      <h3>Ingresa tus datos en el formulario y muy pronto te contactaremos</h3>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
          <StyledTextField
            type="text"
            variant='outlined'
            label="Nombre"
            onChange={e => setNombre(e.target.value)}
            value={nombre}
            fullWidth
            required
          />
          <StyledTextField
            type="text"
            variant='outlined'
            label="Apellido"
            onChange={e => setApellido(e.target.value)}
            value={apellido}
            fullWidth
            required
          />
        </Stack>
        <StyledTextField
          type="email"
          variant='outlined'
          label="Email"
          onChange={e => setEmail(e.target.value)}
          value={email}
          fullWidth
          required
          sx={{mb: 4}}
        />
        <StyledTextField
          type="number"
          variant='outlined'
          label="Teléfono"
          onChange={e => setTelefono(e.target.value)}
          value={telefono}
          required
          fullWidth
          sx={{mb: 4}}
        />
        <StyledTextField
          type="text"
          variant='outlined'
          label="Mensaje"
          onChange={e => setMensaje(e.target.value)}
          value={mensaje}
          fullWidth
          sx={{mb: 4}}
        />
        <h4>Los campos marcados con * son necesarios</h4>
        <Button variant="contained" color="primary" type="submit">Enviar</Button>
      </form>     
    </React.Fragment>
    </Box>
  );
};

export default Contact;