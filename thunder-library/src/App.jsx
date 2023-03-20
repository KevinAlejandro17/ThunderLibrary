import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
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
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
};
export default App;