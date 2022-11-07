import React, { useEffect, useState } from "react";
import $ from 'jquery'
export const InputRequired = (props) => {
    var lang = [
        { name: "name", traduction: "nombre" },
        { name: "price", traduction: "precio" },
        { name: "stock", traduction: "stock" },
    ];
    const [json, setJson] = useState();
    
    const [msg, setMsg] = useState();
    const [showAlert, setShowAlert] = useState(true);
    var nameInput = lang.filter((obj) => obj.name === props.name);
    nameInput = nameInput[0].traduction;

    useEffect(() => {
        setJson(props.error)
        // console.log(props.name);
        if (json) {
            if (json.hasOwnProperty(props.name)) {
                setShowAlert(true)
                // var name = 'amount'
                // var json = props.error + `.${name}`
                // console.log(json);
                setMsg(`El ${nameInput} es requerido`);
            }
        }

        $(`input[name='${props.name}']`).keyup(function() {
            setShowAlert(false)
        });

    }, [props.error, json, props.name, nameInput]);
    return (
        <div>
            {showAlert ? <i className="text-primary">{msg}</i> : false}
        </div>
    );
};
