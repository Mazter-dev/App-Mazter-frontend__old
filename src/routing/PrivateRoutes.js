import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { publicRoutes } from "../helpers/routes";

const PrivateRoutes = ({ children }) => {

    const userData = useContext(UserContext);


    return userData?.response.auth ? (
        children
    ) : (
        <Navigate replace to={`/auth/${publicRoutes.LOGIN}`} />
    );
};

export default PrivateRoutes;
