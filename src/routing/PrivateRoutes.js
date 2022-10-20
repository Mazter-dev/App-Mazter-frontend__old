import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { publicRoutes } from "../helpers/routes";

const PrivateRoutes = ({ children }) => {
    var dataSesion = localStorage.getItem("bearer");
    
    const [stateUser] = useState({
        session: dataSesion,
    });
    const { session } = stateUser;

    return session ? (
        children
    ) : (
        <Navigate replace to={`/auth/${publicRoutes.LOGIN}`} />
    );
};

export default PrivateRoutes;
