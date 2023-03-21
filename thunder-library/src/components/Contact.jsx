import React from "react";
import { Box, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{ height: "80vh", display: "grid", placeItems: "center", py: 10 }}
    >
      <Typography variant="h3">Contact</Typography>
    </Box>
  );
};

export default Contact;