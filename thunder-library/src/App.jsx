import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//import app components
import Navbar from "./components/Navbar";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";
import SolicitudPrestamo from "./components/NuevoPrestamo/SolicitudPrestamo";
import BookSearch from "./components/Books/BookSearch";
import WaitUser from "./components/WaitUser";

//import ContextProvider
import ContextProvider from "./context/Context";

import { supabase } from "../backend/client";

import "./App.css";

const App = () => {
  const navigate = useNavigate();
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setSession(session);
      if (!session) {
        navigate("/login");
      }
    });
  }, []);

  return (
    <ContextProvider>
      <Navbar session={session} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevoPrestamo" element={<SolicitudPrestamo />} />
        <Route path="/bookSearch" element={<BookSearch />} />
        <Route path="/waiting" element={<WaitUser />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
