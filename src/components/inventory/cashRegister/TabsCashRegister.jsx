import axios from "axios";
import Swal from "sweetalert2";
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
    function deleteCart() {
        Swal.fire({
            title: "Eliminar registro",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FF0080",
            cancelButtonColor: "#bebebe",
            confirmButtonText: "Eliminar",
            cancelButtonText: "cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .post(
                        urlApi("deleteCart"),
                        { shopping_cart_id: props.cartShowing },
                        configApi()
                    )
                    .then(function (r) {
                        props.setTabs(r.data.carts);
                        props.setCartShowing(r.data.carts[0].shopping_cart_id);
                        props.setProductsShowing(
                            r.data.carts[0].get_list_products
                        );
                        // props.setTotal(r.data.total);
                    });
            }
        });
    }

    function checkout() {
        Swal.fire({
            title: "¿Finalizar compra?",
            text: "",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#FF0080",
            cancelButtonColor: "#bebebe",
            confirmButtonText: "Finalizar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .post(
                        urlApi("checkoutShoppingCart"),
                        { cart_id: props.cartShowing },
                        configApi()
                    )
                    .then(function (r) {

                        console.log(r);

                        props.setTabs(r.data.carts);
                        props.setCartShowing(r.data.carts[0].shopping_cart_id);
                        props.setProductsShowing(
                            r.data.carts[0].get_list_products
                        );
                    });
            }
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
                        setCartShowing={props.setCartShowing}
                        setTotal={props.setTotal}
                        setTabs={props.setTabs}
                        cartShowing={props.cartShowing}
                    />
                ) : null}
                <ul className="nav nav-tabs menu-tabs"></ul>
                <div className="col-12 mt-5 mb-5">
                    <div className="pull-right">
                        <button
                            className="btn btn-warining ml-2 mr-2"
                            onClick={() => deleteCart()}
                        >
                            Cancelar
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => checkout()}
                        >
                            Finalizar Compra
                        </button>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
};

export default TabsCashRegister;
