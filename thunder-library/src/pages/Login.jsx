import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  Stack,
} from "@mui/material";

import { toast } from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";

import "../App.css";

import background from "../assets/images/background.png";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { supabase } from "../../backend/client";
import { useAuth } from "../context/Context";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Thunder Library
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login() {
  const navigate = useNavigate();


  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/bookSearch");
      }
    });
  }, []);

  const initialState = { email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
    //console.log(name, ": ", value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      toast.error(error.message);
    } else {
      console.log(data);
      setUser(initialState);
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
          <Avatar
            sx={{
              m: 1,
              background: "linear-gradient(90deg, #000006 10%, #26428b)",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Iniciar sesión
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Stack
              spacing={2}
              sx={{
                my: 2,
                width: "30vw",
                "& .MuiTextField-root": { size: "small" },
              }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                value={user.email}
                id="email"
                label="Email"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                name="password"
                fullWidth
                value={user.password}
                label="Contraseña"
                id="password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Mantener sesión iniciada"
              />
              <Button
                onClick={handleLogin}
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  background: "linear-gradient(90deg, #000006 10%, #26428b)",
                }}
              >
                Ingresar
              </Button>
            </Stack>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">{"¿No tienes una cuenta? Registrate"}</Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Login;

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
