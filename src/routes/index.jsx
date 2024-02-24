import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default CustomRoutes