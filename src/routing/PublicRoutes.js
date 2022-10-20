import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {  privateRoutes } from "../helpers/routes";

const PublicRoutes = ({ children }) => {
    
    var dataSesion = localStorage.getItem("bearer");

    const [stateUser] = useState({
        session: dataSesion,
    });

    const { session } = stateUser;

    return session ? (
        <Navigate replace to={`/app/${privateRoutes.DASHBOARD}`} />
    ) : (
        children
    );
};

export default PublicRoutes;
