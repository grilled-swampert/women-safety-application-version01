import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import HeatmapPage from "./pages/heatmap/heatmapPage";
import HomePage from "./components/home/homePage/homePage";
import LogPage from "./components/logs/logPage/logPage";
import MapPage from "./components/map/mapPage/mapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/logs" element={<LogPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;