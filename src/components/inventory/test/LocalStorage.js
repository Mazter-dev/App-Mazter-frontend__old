import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { configApi, urlApi } from "../../../helpers/helper";

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
    sessionStorage.setItem("myKey", textForStorage);
    sessionStorage.getItem("myKey");
    sessionStorage.removeItem("myKey");
    sessionStorage.clear();
    const navigate = useNavigate();
    axios
        .get(urlApi('products/get'), configApi())
        .then(function (r) {})
        .catch(function () {
            sessionStorage.clear();
            navigate("/auth/login");
        });

    useEffect(() => {}, []);

    function changeAmount() {}

    return (
        <div>
            LocalStorage
            <h3>{textFromStorage}</h3>
            <button onClick={() => changeAmount("data")}></button>
        </div>
    );
};

export default LocalStorage;
