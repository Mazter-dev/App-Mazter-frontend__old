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
import Login from "./Login";
import Test from "./test/Test";
const Web = () => {
    // Valide login

    return (
        // <switch>
        //     <Route path="/" render={()=>{

        //         <Login />
        //     }} >
        //     </Route>
        // </switch>

        <Routes>
            {/* <Route path="/" element={<Xd />} /> */}
            <Route path="/Dashboard" element={<Dashboard />} />

            <Route path="/CashRegister" element={<CashRegister />} />
            <Route path="/Add-product" element={<ProductAdd />} />
            <Route path="/List-product" element={<ProductList />} />
            <Route path="/My-data" element={<MyData />} />
            <Route path="/My-suscription" element={<MySuscription />} />
            <Route path="/test-api" element={<Api />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test-login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
            {/* <Route path="*">
              404
            </Route> */}
        </Routes>
    );
};

export default Web;
