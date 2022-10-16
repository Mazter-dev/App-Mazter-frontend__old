import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <br/>
            <Link to="/auth/login">Ir a Login</Link>
            <br/>
            <Link to="/app/sesion">Ya estoy login</Link>
        </div>
    );
};

export default Home;
