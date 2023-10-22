import React from "react";
import { Route, Routes } from "react-router-dom";
import Encrypt from "./DES/Encrypt";
import Home from "./DES/Home";
import "./index.css";
import Decrypt from "./DES/Decrypt";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
        {/* Same as */}
      <ToastContainer />
      <Routes>
        <Route path="/encrypt" element={<Encrypt />} />
        <Route path="/decrypt" element={<Decrypt />} />
        <Route path="" element={<Home />} />
      </Routes>
    
    </>
  )
}

export default App