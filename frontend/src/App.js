import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import HeatmapPage from "./pages/heatmap/heatmapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/logs" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;