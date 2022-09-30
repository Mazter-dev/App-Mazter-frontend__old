import React from "react";
import { Routes, Route } from "react-router-dom";
import Xd from "./Xd";
import CashRegister from "./CashRegister";
const Web = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Xd />} />
        <Route path="/CashRegister" element={<CashRegister />} />
        <Route path="/Dashboard" element={<CashRegister />} />
        <Route path="*">
          404
        </Route>
      </Routes>
    </div>
  );
};

export default Web;
