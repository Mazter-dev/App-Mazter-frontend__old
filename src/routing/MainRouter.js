import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../components/inventory/Dashboard";
import NotFoundComponent from "../components/NotFoundComponent";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <NotFoundComponent>
                <Route path="/" element={<Dashboard />} />
                <Route
                    path="/auth/*"
                    element={
                        <PublicRoutes>
                            <AuthRoutes />
                        </PublicRoutes>
                    }
                />
                <Route
                    path="/app/*"
                    element={
                        <PrivateRoutes>
                            <AppRoutes />
                        </PrivateRoutes>
                    }
                />
            </NotFoundComponent>
        </BrowserRouter>
    );
};

export default MainRouter;
