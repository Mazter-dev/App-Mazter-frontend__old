import React from "react";
const TableCashRegister = (props) => {
    return (
        <div>
            <table className="table table-hover table-center mb-0 ">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio unidad</th>
                        <th>Precio final</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, key) => (
                        <tr key={key}>
                            <th>{key + 1}</th>
                            <th>{item.name}</th>
                            <th>{item.amount}</th>
                            <th>{item.price}</th>
                            <th>{item.amount * item.price}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableCashRegister;
