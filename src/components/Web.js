import React from "react";
import { Routes, Route } from "react-router-dom";
import CashRegister from "./CashRegister";
import Dashboard from "./Dashboard";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
const Web = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Xd />} /> */}
        <Route path="/CashRegister" element={<CashRegister />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Add-product" element={<ProductAdd />} />
        <Route path="/List-product" element={<ProductList />} />
        {/* <Route path="*">
          404
        </Route> */}
      </Routes>
    </div>
  );
};

export default Web;
