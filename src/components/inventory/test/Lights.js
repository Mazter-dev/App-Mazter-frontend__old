import React from "react";

const Lights = () => {
    
    const ewelink = require("ewelink-api");

    const connection = new ewelink({
        email: "",
        password: "",
        region: "us",
    });

    connection.toggleDevice("100123668e");
    return <div>Lights</div>;
};

export default Lights;
