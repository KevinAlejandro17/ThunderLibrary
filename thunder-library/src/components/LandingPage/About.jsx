import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{ height: "80vh", display: "grid", placeItems: "center", py: 10 }}
    >
      <Typography variant="h3">Quiénes Somos</Typography>
      <Box
      sx={{display: 'flex', alignItems: 'center', height: '100vh', mx: 15}} 
      >
      <Typography sx={{textAlign: 'center'}} variant="h6">
      Thunder library es una solución tecnológica que ayuda a las librerías a optimizar su gestión de préstamos y controlar su inventario de libros de manera más eficiente. Nuestros clientes pueden disfrutar de la comodidad de consultar en línea la disponibilidad de los libros y hacer reservas en cualquier momento y desde cualquier lugar. En Thunder library, estamos comprometidos en proporcionar una solución tecnológica que ayude a las librerías a mejorar su servicio y ofrecer una experiencia más satisfactoria a sus usuarios.
      </Typography>
</Box>
    </Box>
  );
};

export default About;