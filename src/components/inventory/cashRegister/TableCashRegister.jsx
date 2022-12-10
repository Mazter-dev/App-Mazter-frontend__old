import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { configApi, urlApi } from "../../../helpers/helper";
const TableCashRegister = (props) => {
    const [listProducts, setListProducts] = useState(null);
    useEffect(() => {
        setListProducts(props.productsShowing);
    }, [props]);
    function changeAmount(product_id, shopping_cart_id, operator) {
        const data = {
            shopping_cart_id: shopping_cart_id,
            product_id: product_id,
            operator: operator,
        };
        axios
            .post(urlApi("changeAmountProductShoppingCart"), data, configApi())
            .then(function (r) {
                setListProducts(r.data.carts[0].get_list_products);
            });
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
                    {listProducts
                        ? listProducts.map((item, key) => (
                              <tr key={key}>
                                  <th>{key + 1}</th>
                                  <th>{item.product_name}</th>
                                  <th>
                                      <div
                                          onClick={() =>
                                              changeAmount(
                                                  item.product_id,
                                                  item.shopping_cart_id,
                                                  "-"
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
                                                  item.shopping_cart_id,
                                                  "+"
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
                          ))
                        : null}
                </tbody>
            </table>
            <ul className="nav nav-tabs menu-tabs"></ul>
            <div className="col-12 mt-5 mb-5">
                <div className="pull-right">
                    <button className="btn btn-primary">Finaliza Compra</button>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default TableCashRegister;
