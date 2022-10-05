import React from "react";
import { Routes, Route } from "react-router-dom";
import Api from "./test/Api";
import CashRegister from "./CashRegister";
import Dashboard from "./Dashboard";
import MyData from "./MyData";
import MySuscription from "./MySuscription";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
import Error404 from "./errors/Error404";
import Login from "./test/Login";
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
        <Route path="/test-api" element={<Api />} />
        <Route path="/test-login" element={<Login />} />



        <Route path="*" element={<Error404 />} />
        {/* <Route path="*">
          404
        </Route> */}
      </Routes>
    </div>
  );
};

export default Web;
