import axios from "axios";
import { configApi, urlApi } from "../../../helpers/helper";
import TableCashRegister from "./TableCashRegister";

const TabsCashRegister = (props) => {
    function changeProductsCart(shopping_cart_id) {
        axios
            .post(
                urlApi("getItemsCart"),
                { shopping_cart_id: shopping_cart_id },
                configApi()
            )
            .then(function (r) {
                props.setCartShowing(shopping_cart_id);
                props.setProductsShowing(r.data.data);
                props.setTotal(r.data.total);
            });
    }

    function addNewCart() {
        axios.get(urlApi("addNewCart"), configApi()).then(function (r) {
            props.setCartShowing(r.data.shopping_cart_id);
            props.setTabs(r.data.carts);
            props.setProductsShowing(r.data.data);
        });
    }

    return (
        <>
            {props.tabs
                ? props.tabs.map((item, key) => (
                      <>
                          <div key={key}>
                              <li
                                  className={
                                      props.cartShowing ===
                                      item.shopping_cart_id
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
            <li class="nav-item ">
                <div className="nav-link" onClick={() => addNewCart()}>
                    <i class="fas fa-plus-square text-primary"></i>
                </div>
            </li>
            <div className="table-responsive mt-4">
                {props.productsShowing ? (
                    <TableCashRegister
                        productsShowing={props.productsShowing}
                        setProductsShowing={props.setProductsShowing}
                        setTotal={props.setTotal}
                    />
                ) : null}
            </div>
        </>
    );
};

export default TabsCashRegister;
