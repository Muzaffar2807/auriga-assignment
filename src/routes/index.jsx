import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import AppLayout from '../components/Layouts/AppLayout';

const CustomRoutes = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </AppLayout>
  );
}

export default CustomRoutes