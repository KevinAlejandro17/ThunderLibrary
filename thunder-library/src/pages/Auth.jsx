import { Box } from "@mui/material";
import React from "react";

const Auth = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <h2 style={{ width: "35%" }}>
        Tu sesión se encuentra activa, puedes cerrar esta pestaña
      </h2>
    </Box>
  );
};

export default Auth;
