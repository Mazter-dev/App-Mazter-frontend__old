import React from "react";
import { Navigate } from "react-router-dom";
import { privateRoutes } from "../helpers/routes";

const PublicRoutes = ({ children, session }) => {
    return session ? (
        <Navigate replace to={`/app/${privateRoutes.APP_HOME}`} />
    ) : (
        children
    );
};

export default PublicRoutes;
