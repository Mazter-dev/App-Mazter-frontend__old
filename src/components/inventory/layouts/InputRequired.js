import React, { useEffect, useState } from "react";
import $ from 'jquery'
export const InputRequired = (props) => {
    var lang = [
        { name: "name", traduction: "nombre" },
        { name: "price", traduction: "precio" },
        { name: "stock", traduction: "stock" },
        { name: "purshase_price", traduction: "Precio de compra" },
    ];
    const [json, setJson] = useState();
    
    const [msg, setMsg] = useState();
    const [showAlert, setShowAlert] = useState(true);
    var nameInput = lang.filter((obj) => obj.name === props.name);
    nameInput = nameInput[0].traduction;

    useEffect(() => {
        setJson(props.error)
        if (json) {
            if (json.hasOwnProperty(props.name)) {
                var type = json[props.name]['type'];
                if (type === 'required') {
                    setMsg(`El ${nameInput} es requerido`);
                }
                else if(type === 'maxLength'){
                    setMsg(`El ${nameInput} es muy extenso`);
                }


                
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
