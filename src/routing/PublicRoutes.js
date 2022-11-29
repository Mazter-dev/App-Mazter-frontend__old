import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { privateRoutes } from "../helpers/routes";

const PublicRoutes = ({ children }) => {

    const userData = useContext(UserContext);

    return userData?.response.auth ? (
        <Navigate replace to={`/app/${privateRoutes.DASHBOARD}`} />
    ) : (
        children
    );
};

export default PublicRoutes;
