import React from "react";
import { AppBar, Toolbar, Typography, Box, Tabs, Tab } from "@mui/material";
import "../App.css";


const styles = {
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: "Montserrat Alternates, sans-serif",
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
    fontFamily: "Montserrat Alternates, sans-serif",
  },
  navbar: {
    height: "80px",
    justifyContent: "center",
    background: "linear-gradient(290deg, #000006 80%, #26428B)",
  },
  tabs: {
    "& button": {
      outline: "none",
    },
    height: "80px",
  },
  tab: {
    height: "80px",
  },
};

const Navbar = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e, sectionID) => {
    let about = document.getElementById(`${sectionID}`);
    e.preventDefault();
    about && about.scrollIntoView({ behavior: "smooth", block: "center"});
  };

  return (
    <Box sx={styles.root}>
      <AppBar position="static" sx={styles.navbar}>
        <Toolbar>
          <Typography variant="h6" sx={styles.title}>
            Thunder Library
          </Typography>
          <Box sx={styles.options}>
            <Box sx={{ width: "100%" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="white"
                indicatorColor="secondary"
                sx={styles.tabs}
              >
                <Tab
                  value="home"
                  label="Inicio"
                  disableRipple
                  sx={styles.tab}
                  onClick={(e) => {
                    handleClick(e, "home")
                  }}
                />
                <Tab
                  value="about"
                  label="Acerca de"
                  disableRipple
                  onClick={(e) => {
                    handleClick(e, "about")
                  }}
                />
                <Tab
                  value="contact"
                  label="Contáctanos"
                  disableRipple
                  onClick={(e) => {
                    handleClick(e, "contact")
                  }}
                />
              </Tabs>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;