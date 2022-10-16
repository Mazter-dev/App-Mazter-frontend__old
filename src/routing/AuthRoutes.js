import React from "react";
import { Route } from "react-router-dom";
import Login from "../components/inventory/Login";
import NotFoundComponent from "../components/NotFoundComponent";
import { publicRoutes } from "../helpers/routes";

const AuthRoutes = () => {
    return (
        <NotFoundComponent>
            <Route path={publicRoutes.LOGIN} element={<Login />} />
        </NotFoundComponent>
    );
};

export default AuthRoutes;
