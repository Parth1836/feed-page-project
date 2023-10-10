import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Dashboard from "./pages/Dashboard";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />{" "}
        <Route exact path="/dashboard" element={<Dashboard />} />{" "}
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default MainRoutes;
