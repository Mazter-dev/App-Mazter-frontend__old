import React from "react";
import { Routes, Route } from "react-router-dom";
import Xd from "./Xd";
import Gallery from "./Gallery";
const Web = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Xd />} />
        <Route path="/xd" element={<Xd />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default Web;
