import React, { useState } from "react";
import Login from "./pages/login";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Classrooms from "./pages/Classrooms";
import Teachers from "./pages/Teachers";
import Scheduling from "./pages/Scheduling";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          {/* Login Route */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Dashboard Route */}
          <Route
            path="/"
            element={<Dashboard />}
          />

          {/* Classrooms Route */}
          <Route
            path="/classrooms"
            element={<Classrooms />}
          />

          {/* Teachers Route */}
          <Route
            path="/teachers"
            element={<Teachers />}
          />

          {/* Scheduling Route */}
          <Route
            path="/scheduling"
            element={<Scheduling />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
