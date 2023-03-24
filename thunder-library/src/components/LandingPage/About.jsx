import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      id="about"
      sx={{ height: "80vh", display: "grid", placeItems: "center", py: 10 }}
    >
      <Typography variant="h3">Acerca de</Typography>
    </Box>
  );
};

export default About;