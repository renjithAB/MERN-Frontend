import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";

function Routers() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default Routers;
