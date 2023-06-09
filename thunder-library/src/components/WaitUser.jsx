import React, { useEffect } from "react";


import "../App.css";

import { Box } from "@mui/material";

import { toast } from "react-hot-toast";

const WaitUser = () => {
  useEffect(() => {
    toast.success("Revisa tu correo electrónico")
  }, []);

  return (
    <Box>
      xd
    </Box>
  );
};

export default WaitUser;
