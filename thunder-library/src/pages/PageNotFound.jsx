import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  const { setNotFound } = useAuth();

  useEffect(() => {
    setNotFound(true);
  }, []);

  const handleReturnHome = () => {
    navigate("/");
    setNotFound(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        color: "white",
        display: "grid",
        placeContent: "center",
        textAlign: "center",
      }}
    >
      <h2>Page not Found</h2>
      <Button color="secondary" variant="outlined" onClick={handleReturnHome}>
        Volver al inicio
      </Button>
    </Box>
  );
};

export default PageNotFound;
