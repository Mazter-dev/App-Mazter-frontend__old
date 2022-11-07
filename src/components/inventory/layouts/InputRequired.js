import React, { useEffect, useState } from "react";

export const InputRequired = (props) => {
    var lang = [
        { name: "name", traduction: "nombre" },
        { name: "price", traduction: "precio" },
        { name: "stock", traduction: "stock" },
    ];
    var json = props.error;
    const [msg, setMsg] = useState();
    var nameInput = lang.filter((obj) => obj.name === props.name);
    nameInput = nameInput[0].traduction;
    
    useEffect(() => {
        if (props.error) {
            if (json.hasOwnProperty(props.name)) {
                // var name = 'amount'
                // var json = props.error + `.${name}`
                // console.log(json);
                setMsg(`El ${nameInput} es requerido`);
            }
        }
    }, [props.error, json, props.name, nameInput]);
    return (
        <div>
            {props.error ? <i className="text-primary">{msg}</i> : "false"}
        </div>
    );
};
