import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    function logout() {
        localStorage.removeItem("bearer");
        navigate("/");
    }
    const data = localStorage.getItem("bearer");
    return (
        <div>
            <h1>Home</h1>
            <br />
            <p>{data ? "Login activado " : "No se ha iniciado sesión"}</p>
            <br />
            <Link to="/auth/login">Ir a Login</Link>
            <br />
            <Link to={"/app/dashboard"}>Dashboard</Link>
            <br />
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Home;
