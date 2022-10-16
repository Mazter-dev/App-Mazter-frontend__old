import React from "react";
import { Navigate } from "react-router-dom";
import { publicRoutes } from "../helpers/routes";

const PrivateRoutes = ({ children, session }) => {
    return session ? (
        children
    ) : (
        <Navigate replace to={`/auth/${publicRoutes.LOGIN}`} />
    );
};

export default PrivateRoutes;
