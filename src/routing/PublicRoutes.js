import React from "react";
import { Navigate } from "react-router-dom";
import { privateRoutes } from "../helpers/routes";

const PublicRoutes = ({ children }) => {
    return sessionStorage.getItem("bearer") ? (
        <Navigate replace to={`/app/${privateRoutes.DASHBOARD}`} />
    ) : (
        children
    );
};

export default PublicRoutes;
