import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

//import app components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookSearch from "./pages/BookSearch";
import WaitUser from "./components/WaitUser";
import Auth from "./pages/Auth";
import PageNotFound from "./pages/PageNotFound";

//import ContextProvider
import ContextProvider from "./context/Context";

import { supabase } from "../backend/client";

import "./App.css";
import { useAuth } from "./context/Context";
import Signup from "./pages/Signup";
import Sidebar from "./components/Sidebar";
import SolicitudPrestamo from "./components/NuevoPrestamo/SolicitudPrestamo";

const App = () => {
  const location = useLocation();
  const { setSession } = useAuth();

  const { notFound } = useAuth();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      //console.log(event, session);
      setSession(session);
    });
  }, []);

  const ProtectedRoute = ({ children }) => {
    if (location.pathname === "/auth" || notFound) {
      return null;
    } else {
      {
        return <>{children}</>;
      }
    }
  };

  return (
    <>
      <ProtectedRoute>
        <Navbar />;
      </ProtectedRoute>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<BookSearch />} />
        <Route path="/waiting" element={<WaitUser />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/rental" element={<SolicitudPrestamo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
