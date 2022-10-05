// rafce
import axios from "axios";
import React, { useEffect } from "react";

// Create variable from local storage
const textForStorage = "SIUUUUUUUUUUUUUUUU.";
// setter
localStorage.setItem("my-key", textForStorage);
// getter
const textFromStorage = localStorage.getItem("my-key");
console.log(textFromStorage);

const Login = () => {
    useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: "React Hooks POST Request Example" };
        axios
            .post("https://reqres.in/api/articles", article)
            .then(function (response) {
                console.log(response);
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            <h1>Login</h1>
        </div>
    );
};

export default Login;
