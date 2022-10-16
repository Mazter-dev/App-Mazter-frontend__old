import React from "react";

const LocalStorage = () => {

    // Create variable from local storage
    const textForStorage = "LocalStorage";
    // setter
    localStorage.setItem("my-key", textForStorage);
    // getter
    const textFromStorage = localStorage.getItem("my-key");
    console.log();
    //delete
    // localStorage.removeItem("my-key");
    // remove all
    // localStorage.clear();

    return (
        <div>
            LocalStorage
            <h3>{textFromStorage}</h3>
        </div>
    );
};

export default LocalStorage;
