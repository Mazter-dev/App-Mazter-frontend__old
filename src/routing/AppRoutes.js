import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import NotFoundComponent from "../components/NotFoundComponent";
import Sesion from "../components/Sesion";
import { privateRoutes } from "../helpers/routes";

const AppRoutes = () => {
    return (
        <NotFoundComponent>
            <Route path={privateRoutes.APP_HOME} element={<Home />} />
            <Route path={privateRoutes.SESION} element={<Sesion />} />
        </NotFoundComponent>
    );
};

export default AppRoutes;
