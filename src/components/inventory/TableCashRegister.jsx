import axios from "axios";
import React from "react";
import { configApi, urlApi } from "../../helpers/helper";
const TableCashRegister = (props) => {
    function changeAmount(product_id, cart, operator) {
        
        const data = {
            cart: cart,
            product_id: product_id,
            operator: operator,
        };
        axios
            .post(urlApi("changeAmountProductShoppingCart"), data, configApi())
            .then(function (r) {
                props.setTotal(r.data.total);
                props.setTabs(r.data.cart);
            })
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
                            <th>{item.product_name}</th>
                            <th>
                                <div
                                    onClick={() =>
                                        changeAmount(
                                            item.product_id,
                                            props.cart,
                                            '-'
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
                                            props.cart,
                                            '+'
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
