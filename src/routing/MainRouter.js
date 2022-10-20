import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../components/Home";
import NotFoundComponent from "../components/NotFoundComponent";
import AppRoutes from "./AppRoutes";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const MainRouter = (dataSesion) => {
    
    const [stateUser] = useState({
        session: dataSesion.dataSesion,
    });
    const {session} = stateUser;

    return (
        <BrowserRouter>
            <NotFoundComponent>
                <Route path="/" element={<Home />} />
                <Route path="/auth/*" element={ <PublicRoutes session={session}  > <AuthRoutes /> </PublicRoutes>} />
                <Route path="/app/*" element={ <PrivateRoutes session={session}  > <AppRoutes /> </PrivateRoutes>} />
            </NotFoundComponent>
        </BrowserRouter>
    );
};

export default MainRouter;
