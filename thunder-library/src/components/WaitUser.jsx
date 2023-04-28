import React, { useEffect } from "react";
import { toast, ToastContainer, cssTransition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roll = cssTransition({
  enter: "flip-in-ver-left",
  exit: "flip-out-ver-right",
});
import "../App.css";

import { Box } from "@mui/material";

const WaitUser = () => {
  useEffect(() => {
    toast.success("Revisa tu correo electrónico", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }, []);

  return (
    <Box>
      <ToastContainer transition={roll} limit={1} />
    </Box>
  );
};

export default WaitUser;
