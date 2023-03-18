import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import "../App.css";

const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: 'Montserrat Alternates, sans-serif',
  },
  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  option: {
    margin: "0 10px",
    variant: "body",
    fontFamily: 'Montserrat Alternates, sans-serif',    
  },
  navbar: {
    height: "80px",
    justifyContent: "center",
    background: 'linear-gradient(290deg, #000006 80%, #26428B)'
  },
};

const Navbar = () => {
  return (
    <Box sx={styles.root}>
      <AppBar position="static" sx={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" sx={styles.title}>
            Thunder Library
          </Typography>
          <Box sx={styles.options}>
            <Typography sx={styles.option}>Home</Typography>
            <Typography sx={styles.option}>About</Typography>
            <Typography sx={styles.option}>Contact</Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
