import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { privateRoutes } from "../helpers/routes";

const Home = () => {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("bearer");
        navigate("/");
    }
    return (
        <div>
            <h1>Home</h1>
            <br />
            <Link to="/auth/login">Ir a Login</Link>
            <br />
            <Link to="/app/Dashboard">Ya estoy login</Link>
            <br />
            <Link to={privateRoutes.DASHBOARD}>Dashboard</Link>
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
