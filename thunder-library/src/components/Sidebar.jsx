import React, { useState, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { Avatar, Card, Drawer as MuiDrawer, Paper } from "@mui/material/";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useAuth } from "../context/Context";

const drawWidth = 240;

const openedMixin = (theme) => ({
  backgroundColor: "#202020",
  color: "white",
  width: drawWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  color: "white",
  backgroundColor: "#202020",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function Sidebar() {
  const [open, setOpen] = useState(true);

  const { drawerOpen, setDrawerOpen, session } = useAuth();

  var userName;
  var email;

  if (session) {
    userName = session.user.user_metadata.full_name;
    email = session.user.email;
  }

  const handleDrawerToggle = () => {
    setOpen(!open);
    setDrawerOpen(!open);
  };

  const path = window.location.pathname;

  const drawer = (
    <div>
      <Box
        sx={{
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#242424",
        }}
      >
        <IconButton
          disableRipple
          sx={{ color: "white", fontSize: "large", border: "none" }}
          onClick={handleDrawerToggle}
        >
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>

      <Divider />
      <List>
        {["Buscar Libros", "Ver libros alquilados"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider color="lightslategray" />
      <List sx={{ height: "100%" }}>
        {["Historial"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider color="lightslategray" />
        <ListItem
          disablePadding
          sx={{ position: "absolute", bottom: -500, pl: open ? 2 : 1 }}
        >
          <ListItemIcon>
            <Avatar sx={{ background: "#333" }} />
          </ListItemIcon>
          <ListItemText>
            {userName} <br />
            {email}
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer variant="permanent" open={open}>
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Sidebar;
