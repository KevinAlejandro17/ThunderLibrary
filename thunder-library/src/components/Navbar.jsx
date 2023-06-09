import React from "react";
import { useNavigate } from "react-router-dom";

//material ui components
//documentation: https://mui.com/material-ui/getting-started/overview/
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
  IconButton,
} from "@mui/material";

//material ui icons
//documentation: https://mui.com/material-ui/material-icons/
import HomeRounded from "@mui/icons-material/HomeRounded";

import "../App.css";
import { supabase } from "./../../backend/client";

import { useAuth } from "../context/Context";

const Navbar = ({ style }) => {
  const [value, setValue] = React.useState("home");
  const navigate = useNavigate();

  const { session, drawerOpen } = useAuth();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (e, sectionID) => {
    let about = document.getElementById(`${sectionID}`);
    e.preventDefault();
    about && about.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const path = window.location.pathname;

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <Box flexGrow={1}>
      <AppBar
        position="fixed"
        {...style}
        className={path === "/login" ? "Navbar-login" : "Navbar"}
      >
        <Toolbar>
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "left",
              fontFamily: "Open Sans, sans-serif",
              transition: "margin 2s ease-in",
              ml: drawerOpen ? "240px" : "80px",
            }}
          >
            <Typography variant="h6">Thunder Library</Typography>
          </Box>
          <Box sx={styles.options}>
            {path === "/login" ? (
              <Box sx={{ display: "flex", columnGap: 5 }}>
                <IconButton
                  disableRipple
                  sx={{ color: "white" }}
                  onClick={() => navigate("/")}
                >
                  <HomeRounded />
                </IconButton>
              </Box>
            ) : (
              <Box sx={styles.options}>
                {session ? (
                  <Button
                    variant="contained"
                    onClick={handleLogout}
                    className="RegisterBtn"
                  >
                    Logout
                  </Button>
                ) : (
                  <Box sx={{ width: "100%" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      textColor="inherit"
                      indicatorColor="secondary"
                      sx={styles.tabs}
                    >
                      <Tab
                        className="NavOption"
                        value="home"
                        label="Inicio"
                        disableRipple
                        onClick={scrolltoTop}
                      />
                      <Tab
                        className="NavOption"
                        value="about"
                        label="Acerca de"
                        disableRipple
                        onClick={(e) => {
                          handleClick(e, "about");
                        }}
                      />
                      <Tab
                        className="NavOption"
                        value="contact"
                        label="Contáctanos"
                        disableRipple
                        onClick={(e) => {
                          handleClick(e, "contact");
                        }}
                      />
                    </Tabs>
                  </Box>
                )}
              </Box>
            )}
            {session || path === "/login" ? null : (
              <Button
                variant="contained"
                disableRipple
                onClick={() => navigate("/login")}
                className={path === "/nuevoPrestamo" ? "LogoutBtn" : "LoginBtn"}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

const styles = {
  options: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: 4,
  },
  tabs: {
    "& button": {
      outline: "none",
    },
    height: "60px",
    "& .MuiTab-root": {
      fontFamily: "Open Sans, sans-serif",
      height: "60px",
    },
  },
};
