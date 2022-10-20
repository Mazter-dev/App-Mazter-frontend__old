import React from "react";
import { Route } from "react-router-dom";
import NotFoundComponent from "../components/NotFoundComponent";
import { privateRoutes } from "../helpers/routes";
import Dasboard from '../components/inventory/Dashboard'

const AppRoutes = () => {
    return (
        <NotFoundComponent>
            <Route path={privateRoutes.DASHBOARD} element={<Dasboard />} />
        </NotFoundComponent>
    );
};

export default AppRoutes;
