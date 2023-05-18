import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

//import app components
import Navbar from "./components/Navbar";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";
import BookSearch from "./components/Books/BookSearch";
import WaitUser from "./components/WaitUser";

//import ContextProvider
import ContextProvider from "./context/Context";

import { supabase } from "../backend/client";

import "./App.css";
import { useAuth } from "./context/Context";

const App = () => {
  const [session, setSession] = useState();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <ContextProvider>
      <Navbar session={session} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bookSearch" element={<BookSearch />} />
        <Route path="/waiting" element={<WaitUser />} />
      </Routes>
    </ContextProvider>
  );
};

export default App;
