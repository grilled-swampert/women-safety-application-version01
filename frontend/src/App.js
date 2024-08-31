import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/loginPage";
import HeatmapPage from "./pages/heatmap/heatmapPage";
import HomePage from "./components/home/homePage/homePage";
import LogPage from "./pages/logPage/logPage";
import MapPage from "./pages/mapPage/mapPage";
import ResourcesPage from "./components/resources/resourcesMain/resourcesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/heatmap" element={<HeatmapPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/logs" element={<LogPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
