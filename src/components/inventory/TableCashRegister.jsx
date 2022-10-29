import axios from "axios";
import React from "react";
const TableCashRegister = (props) => {
    const user_id = localStorage.getItem("user_id");
    function changeAmount(product_id, cart) {
        const url =
            process.env.REACT_APP_URL_API + "changeAmountProductShoppingCart";
        const data = {
            user_id: user_id,
            cart: cart,
            product_id: product_id
        };
        axios
            .post(url, data)
            .then(function (r) {})
            .catch(function (r) {});
    }

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
                            <th>
                                <div
                                    onClick={() =>
                                        changeAmount(
                                            item.product_id,
                                            props.cart
                                        )
                                    }
                                    className="nav-link"
                                >
                                    <i className="fas fa-minus-square text-primary"></i>
                                </div>
                                {" " + item.amount + " "}
                                <div
                                    onClick={() =>
                                        changeAmount(
                                            item.product_id,
                                            props.cart
                                        )
                                    }
                                    className="nav-link"
                                >
                                    <i className="fas fa-plus-square text-primary"></i>
                                </div>
                            </th>
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
