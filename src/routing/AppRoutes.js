import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import NotFoundComponent from "../components/NotFoundComponent";
import Sesion from "../components/Sesion";
import { privateRoutes } from "../helpers/routes";
import Dasboard from '../components/inventory/Dashboard'
import CashRegister from '../components/inventory/CashRegister'
import ProductAdd from '../components/inventory/ProductAdd'
import ProductList from '../components/inventory/ProductList'

const AppRoutes = () => {
    return (
        <NotFoundComponent>
            <Route path={privateRoutes.APP_HOME} element={<Home />} />
            <Route path={privateRoutes.SESION} element={<Sesion />} />
            <Route path={privateRoutes.DASHBOARD} element={<Dasboard />} />
            <Route path={privateRoutes.CASHREGISTER} element={<CashRegister />} />
            <Route path={privateRoutes.PRODUCT_ADD} element={<ProductAdd />} />
            <Route path={privateRoutes.PRODUCT_LIST} element={<ProductList />} />
        </NotFoundComponent>
    );
};

export default AppRoutes;
