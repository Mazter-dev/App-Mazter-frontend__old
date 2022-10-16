import React from "react";
import { Link, useNavigate } from "react-router-dom";

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
            <Link to="/app/sesion">Ya estoy login</Link>
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
