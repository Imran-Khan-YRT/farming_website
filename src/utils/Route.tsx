// Route.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import your components here (e.g., Home, About, Contact, etc.)
import Home from "../components/Home/Home";
import AppFeatures from "../components/AppFeatures/AppFeatures";
import ContactUs from "../components/ContactUs/ContactUs";
import Microfinance from "../components/Microfinace/Microfinance";

const GetRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Define your routes here */}
      <Route path="/" element={<Home />} />
      <Route path="/appFeatures" element={<AppFeatures />} />
      <Route path="/contactUS" element={<ContactUs />} />
      <Route path="/microFinance" element={<Microfinance />} />
      {/* Improvement - check out any unknown path */}
    </Routes>
  );
};

export default GetRoutes;
