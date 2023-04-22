import React, { useState }  from "react";
import { Box, Typography, TextField, Button, Container, Stack } from '@mui/material';


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
          <p>Ingresa tus datos en el formulario y muy pronto te contactaremos</p>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Nombre"
                        onChange={e => setNombre(e.target.value)}
                        value={nombre}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Apellido"
                        onChange={e => setApellido(e.target.value)}
                        value={apellido}
                        fullWidth
                        required
                    />
                </Stack>
                <TextField
                    type="email"
                    variant='outlined'
                    color='secondary'
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Teléfono"
                    onChange={e => setTelefono(e.target.value)}
                    value={telefono}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="text"
                    variant='outlined'
                    color='secondary'
                    label="Mensaje"
                    onChange={e => setMensaje(e.target.value)}
                    value={mensaje}
                    fullWidth
                    sx={{mb: 4}}
                />
                <Button variant="contained" color="primary" type="submit">Enviar</Button>
            </form>
     
        </React.Fragment>
    </Box>
  );
};

export default Contact;