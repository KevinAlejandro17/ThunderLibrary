import React, { useEffect } from "react";

import { Box, Typography, Grid, Button } from "@mui/material";
import "../App.css";

import background from "../assets/images/background.png";

import About from "../components/LandingPage/About";
import Contact from "../components/LandingPage/Contact";
import Footer from "../components/LandingPage/Footer";
import BookSearch from "./BookSearch";

import { supabase } from "../../backend/client";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Context";

const Home = () => {

  const { setSession } = useAuth();

  const getUser = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user.id);
  };

  const navigate = useNavigate();


  return (
    <Box sx={styles.home}>
      <Box sx={styles.container} id="home">
        <Grid sx={styles.banner}>
          <Grid sx={styles.about}>
            <Typography>
              Thunder library es una herramienta que permite gestionar los
              préstamos de una librería y que los clientes puedan consultar los
              mismos.
            </Typography>

            <a
              onClick={() => getUser()}
              /* onClick={(e) => {
                let about = document.getElementById("about");
                e.preventDefault();
                about &&
                  about.scrollIntoView({ behavior: "smooth", block: "start" });
              }} */
            >
              <button>Ver más</button>
            </a>
          </Grid>
        </Grid>
      </Box>

      <About />
      <Contact />

      <Footer />
    </Box>
  );
};

export default Home;

const styles = {
  container: {
    backgroundImage: `url(${background})`,
    maskImage: "linear-gradient(black 90%, transparent)",
    clipPath: "ellipse(99% 76% at 50% 22%)",
    marginTop: "30px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "105vh",
    color: "black",
    display: "flex",
    justifyContent: "left",
    padding: "0 2rem",
    overflow: "hidden",
  },

  about: {
    width: "25%",
    textAlign: "left",
    "& .MuiTypography-root": {
      fontSize: "1.4rem",
      fontFamily: "Open Sans, sans-serif",
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
