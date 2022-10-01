import React from "react";
import { Routes, Route } from "react-router-dom";
import Api from "./Api";
import CashRegister from "./CashRegister";
import Dashboard from "./Dashboard";
import MyData from "./MyData";
import MySuscription from "./MySuscription";
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
        <Route path="/My-data" element={<MyData />} />
        <Route path="/My-suscription" element={<MySuscription />} />
        <Route path="/api" element={<Api />} />
        {/* <Route path="*">
          404
        </Route> */}
      </Routes>
    </div>
  );
};

export default Web;
