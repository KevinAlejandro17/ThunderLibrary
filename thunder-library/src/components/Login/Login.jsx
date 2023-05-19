import React, { useState, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import "../../App.css";

import background from "../../assets/images/background.png";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { supabase } from "./../../../backend/client";
import { useAuth } from "../../context/Context";

import { toast } from "react-toastify";

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
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSession } = useAuth();

  /*   useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate("/bookSearch");
        setSession(true);
      }
    });
  }, []);
 */
  return (
    <>
      {login ? (
        <LoginUser
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      ) : (
        <RegisterUser
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          navigate={navigate}
          setLogin={setLogin}
        />
      )}
    </>
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
    mt: 4,
    px: 2,
  },
  loginForm: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const RegisterUser = ({
  email,
  setEmail,
  password,
  setPassword,
  navigate,
  setLogin,
}) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fname + " " + lname,
          phone: phoneNumber,
          address:"Carrera 1",
          role: "Customer",
        },
        emailRedirectTo: "localhost:5173/users",
      },
    });

    toast.success(`Verifica tu email ${email}`);

    setEmail("");
    setPassword("");
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
            Registrar usuario
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={fname}
              autoFocus
              label="Nombres"
              onChange={({ target }) => setFname(target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={lname}
              autoFocus
              label="Apellidos"
              onChange={({ target }) => setLname(target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={phoneNumber}
              autoFocus
              label="Teléfono"
              onChange={({ target }) => setPhoneNumber(target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              id="email"
              label="Email"
              autoFocus
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              label="Contraseña"
              type="password"
              id="password"
              onChange={({ target }) => setPassword(target.value)}
            />

            <Button
              onClick={handleRegister}
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                background: "linear-gradient(90deg, #000006 10%, #26428b)",
              }}
            >
              Registrar
            </Button>
            <Button
              onClick={() => setLogin(true)}
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
              }}
            >
              Ya tienes una cuenta?
            </Button>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const LoginUser = ({ email, setEmail, password, setPassword }) => {
  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
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
            <TextField
              margin="normal"
              required
              fullWidth
              value={email}
              id="email"
              label="Email"
              autoFocus
              onChange={({ target }) => setEmail(target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={password}
              label="Contraseña"
              id="password"
              onChange={({ target }) => setPassword(target.value)}
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
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
