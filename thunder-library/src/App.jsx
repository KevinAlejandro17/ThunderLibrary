import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import app components
import Navbar from "./components/Navbar";
import Home from "./components/LandingPage/Home";
import Login from "./components/Login/Login";
import SolicitudPrestamo from "./components/NuevoPrestamo/SolicitudPrestamo";

//import ContextProvider
import ContextProvider from "./context/Context";

import "./App.css";


const App = () => {
  return (
    <>
      <ContextProvider>
        <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/nuevoPrestamo" element={<SolicitudPrestamo/>}> </Route>
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
};
export default App;