import React from "react";
import Navbar from "./components/Navbar";
import { Box, Typography, Grid, Button } from "@mui/material";

import "./App.css";

import background from "./assets/images/background.png";

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: "100vh",
    color: "black",
    display: "flex",
    justifyContent: "left",
    paddingTop: "80px",
    padding: "0 2rem",
    overflow: "hidden",
  },

  about: {
    width: "25%",
    textAlign: 'left',
    '& .MuiTypography-root': {
      fontSize: '1.4rem',
      fontFamily: 'Montserrat Alternates, sans-serif',    
      fontWeight: 'bold',
      color: 'white',
    },
  },

  banner: {
    display: 'flex',
    mt: '15vh',
    width: '100vw',
    height: '100%',
    flexDirection: 'row'
  },
  
};

const App = () => {
  return (
    <>
      <Navbar />
      <Box sx={styles.container}>
        <Grid sx={styles.banner}>
          <Grid sx={styles.about}>
            <Typography>
              Thunder library es una herramienta que permite gestionar los préstamos de una librería
              y que los clientes puedan consultar los mismos.
            </Typography>

            <button>Ver más</button>
          </Grid>
        </Grid>
      </Box> 
    </>
  );
};
export default App;