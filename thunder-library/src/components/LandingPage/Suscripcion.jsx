import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import Box from "@mui/material/Box";

const Suscripcion = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Formulario de suscripción enviado para: ${email}`);
    // Aquí puedes agregar la lógica para enviar el formulario a tu servidor o proveedor de correo electrónico.
  };

  return (
    <Box
      id="Suscription"
      sx={{
        height: "30vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        rowGap: 3
      }}
    >
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Suscríbete a las noticias
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Grid container gap={2}>
            <TextField
              type="email"
              label="Ingresa tu correo electrónico"
              variant="outlined"
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={styles.input}
            />
            <Button type="submit" variant="contained" color="primary">
              Suscribirse
            </Button>
          </Grid>
        </form>
    </Box>
  );
};

export default Suscripcion;

const styles = {
  input: {
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
  },
};
