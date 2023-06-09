import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Link as MuiLink,
} from "@mui/material";

//hooks
import { useState } from "react";
import { useAuth } from "../context/Context";
import { useNavigate } from "react-router-dom";

/*================================= REGISTER =================================*/
function StyledInput(props) {
  return <TextField size="small" {...props} />;
}

import { supabase } from "../../backend/client";

import background from "../assets/images/background.png";
import { toast } from "react-hot-toast";

StyledInput.muiName = "TextField";

const Signup = ({}) => {
  const initialState = {
    email: "",
    password: "",
    fname: "",
    lname: "",
    phone: "",
    address: "",
  };
  const [newUser, setNewUser] = useState(initialState);

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { email, password, fname, lname, phone, address } = newUser;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fname + " " + lname,
          phone: phone,
          address: address,
          role: "Customer",
        },
      },
    });

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      //setNewUser(initialState);
      navigate("/dashboard");
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item sm={4} md={7} sx={styles.banner} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        sx={styles.formContainer}
      >
        <Box sx={styles.loginForm}>
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Registrar usuario
          </Typography>
          <Stack
            spacing={2}
            sx={{
              mt: 1,
              width: "30vw",
              "& .MuiTextField-root": { size: "small" },
            }}
          >
            <StyledInput
              required
              fullWidth
              name="fname"
              value={newUser.fname}
              autoFocus
              label="Nombres"
              onChange={handleChange}
            />

            <StyledInput
              required
              fullWidth
              name="lname"
              value={newUser.lname}
              autoFocus
              label="Apellidos"
              onChange={handleChange}
            />

            <StyledInput
              required
              fullWidth
              name="phone"
              value={newUser.phone}
              autoFocus
              label="Teléfono"
              onChange={handleChange}
            />

            <StyledInput
              required
              fullWidth
              name="address"
              value={newUser.address}
              autoFocus
              label="Dirección"
              onChange={handleChange}
            />

            <StyledInput
              required
              fullWidth
              name="email"
              value={newUser.email}
              id="email"
              label="Email"
              autoFocus
              onChange={handleChange}
            />
            <StyledInput
              required
              fullWidth
              name="password"
              value={newUser.password}
              label="Contraseña"
              type="password"
              id="password"
              onChange={handleChange}
            />

            <Button
              onClick={handleRegister}
              fullWidth
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #000006 10%, #26428b)",
              }}
            >
              Registrar
            </Button>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/login")}
            >
              Ya tienes una cuenta?
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <MuiLink color="inherit" href="/">
        Thunder Library
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = {
  banner: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formContainer: {
    background: "hsl(200, 40%, 80%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: 4,
  },
  loginForm: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};
