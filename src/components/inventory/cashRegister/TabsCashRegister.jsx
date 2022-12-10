import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { configApi, urlApi } from "../../../helpers/helper";
import TableCashRegister from "./TableCashRegister";

const TabsCashRegister = (props) => {
    const [cartShowing, setCartShowing] = useState();
    const [tabs, setTabs] = useState(null);
    const [productsShowing, setProductsShowing] = useState();

    useEffect(() => {
        axios
            .post(urlApi("getProductShoppingCart"), {}, configApi())
            .then(function (r) {
                setTabs(r.data.carts);
                setCartShowing(r.data.carts[0].shopping_cart_id);
            });
    }, []);

    useEffect(() => {
        // Default first item found in the carts
        if (cartShowing) {
            getItemsCart(cartShowing);
        }
    }, [props, cartShowing]);

    useEffect(() => {
        // Set Tabs
    }, []);

    function changeProductsCart(shopping_cart_id) {
        setCartShowing(shopping_cart_id)
    }

    function getItemsCart(cart) {
        axios
            .post(urlApi("getItemsCart"), { cart: cart }, configApi())
            .then(function (r) {
                setProductsShowing(r);
            });
    }

    return (
        <>
            {tabs
                ? tabs.map((item, key) => (
                      <>
                          <div key={key}>
                              <li
                                  className={
                                      cartShowing === item.shopping_cart_id
                                          ? "nav-item active"
                                          : "nav-item"
                                  }
                              >
                                  <div
                                      className="nav-link"
                                      onClick={() =>
                                          changeProductsCart(
                                              item.shopping_cart_id
                                          )
                                      }
                                  >
                                      Caja {key + 1}
                                  </div>
                              </li>
                          </div>
                      </>
                  ))
                : null}
            <div className="table-responsive mt-4">
                {productsShowing ? (
                    <TableCashRegister
                        productsShowing={productsShowing}
                        setProductsShowing={setProductsShowing}
                    />
                ) : null}
            </div>
        </>
    );
};

export default TabsCashRegister;
