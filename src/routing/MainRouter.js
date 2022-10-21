import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import NotFoundComponent from "../components/NotFoundComponent";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Lights from "../components/inventory/test/Lights";

const MainRouter = () => {
    

    return (
        <BrowserRouter>
            <NotFoundComponent>
                <Route path="/" element={<Home />} />
                <Route path="/sw" element={<Lights />} />
                <Route path="/auth/*" element={ <PublicRoutes> <AuthRoutes /> </PublicRoutes>} />
                <Route path="/app/*" element={ <PrivateRoutes> <AppRoutes /> </PrivateRoutes>} />
            </NotFoundComponent>
        </BrowserRouter>
    );
};

export default MainRouter;
