import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const LocalStorage = () => {

    // Create variable from local storage
    const textForStorage = "LocalStorage";
    // setter
    localStorage.setItem("myKey", textForStorage);
    // getter
    const textFromStorage = localStorage.getItem("myKey");
    //delete
    localStorage.removeItem("myKey");
    // remove all
    localStorage.clear();
    
    
    // Session Storage
    sessionStorage.setItem('myKey', textForStorage)
    sessionStorage.getItem('myKey')
    sessionStorage.removeItem('myKey')
    sessionStorage.clear();


    const user_id = sessionStorage.getItem("user_id");
    const navigate = useNavigate();
    const bearer = sessionStorage.getItem("bearer");
    const config = {
        headers: { Authorization: `Bearer ${bearer}` },
    };
    const url = process.env.REACT_APP_URL_API + "products/get";
    const data = {
        user_id: user_id,
    };
    axios
        .get(url, data,config)
        .then(function (r) {
        })
        .catch(function (r) {
            if (r.response.data.message === "Unauthenticated.") {
                sessionStorage.clear();
                navigate("/auth/login");
            }
        });







    return (
        <div>
            LocalStorage
            <h3>{textFromStorage}</h3>
        </div>
    );
};

export default LocalStorage;
