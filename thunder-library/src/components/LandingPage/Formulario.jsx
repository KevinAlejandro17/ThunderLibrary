import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Formulario = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Formulario de suscripción enviado para: ${email}`);
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o proveedor de correo electrónico.
  };

  return (
    <Box  id="about"
    sx={{ height: "30vh", display: "grid", placeItems: "center", py: 10 }}>
        <Typography variant="h3">Suscripción</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
      Si deseas recibir las últimas noticias sobre Thunder library, puedes agregar tu correo electrónico para obtenerlas.
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <TextField
  type="email"
  label="Ingresa tu correo electrónico"
  variant="outlined"
  size="small"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  sx={{
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
  }}
/>
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Suscribirse
        </Button>
      </form>
    </Box>
  );
};

export default Formulario;