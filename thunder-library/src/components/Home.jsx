import React from "react";

import { Box, Typography, Grid, Button } from "@mui/material";
import "../App.css";

import background from "../assets/images/background.png";

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    textAlign: "left",
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
      fontFamily: "Montserrat Alternates, sans-serif",
      fontWeight: "bold",
      color: "white",
    },
  },

  banner: {
    display: "flex",
    mt: "15vh",
    width: "100vw",
    height: "100%",
    flexDirection: "row",
  },

  home: {
    "& .MuiTypography-root": {
      fontFamily: "Montserrat Alternates, sans-serif",
      fontWeight: "bold",
      color: "white",
    },
  },
};

const Home = () => {
  return (
    <Box sx={styles.home}>
      <Box sx={styles.container}>
        <Grid sx={styles.banner}>
          <Grid sx={styles.about}>
            <Typography>
              Thunder library es una herramienta que permite gestionar los
              préstamos de una librería y que los clientes puedan consultar los
              mismos.
            </Typography>

            <a
              onClick={(e) => {
                let about = document.getElementById("about");
                e.preventDefault();
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <button>Ver más</button>
            </a>
          </Grid>
        </Grid>
      </Box>

      <Box
        id="about"
        sx={{ height: "80vh", display: "flex", justifyContent: "center", my: 5}}
      >
        <Typography variant="h3">About</Typography>
      </Box>

      <Box
        id="contact"
        sx={{ height: "80vh", display: "flex", justifyContent: "center", my: 5}}
      >
        <Typography variant="h3">Contact</Typography>
      </Box>
    </Box>
  );
};

export default Home;