/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Master from "./layouts/Master";
import Select from "react-select";
import $ from "jquery";
import axios from "axios";
import { useForm } from "react-hook-form";
import { configApi, urlApi } from "../../helpers/helper";
import TabsCashRegister from "./cashRegister/TabsCashRegister";

const CashRegister = () => {
    const [cartShowing, setCartShowing] = useState();
    const [options, setOptions] = useState({});
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [total, setTotal] = useState(0);
    const { register, handleSubmit } = useForm();

    const handleChange = (event) => {
        setIsSubscribed((current) => !current);
        getListProducts();
    };

    function getListProducts() {
        axios
            .get(urlApi("products/getProductsSelect"), configApi())
            .then(function (r) {
                setOptions(r.data);
            });
    }

    function searchByBarCode(value) {
        var filter =
            typeof value == "number" ? value : $("#inputBarcode").val();
        var typeFilter = typeof value == "number" ? "product_id" : "barcode";
        $("#inputBarcode").val("");
        const data = {
            filter: filter,
            typeFilter: typeFilter,
            cart: 1,
        };

        axios
            .post(urlApi("registerProductShoppingCart"), data, configApi())
            .then(function (r) {
                setTotal(r.data.total);
            })
            .catch(function () {
                // sessionStorage.clear();
                // navigate("/auth/login");
            });
    }
    function findByWords(product_id) {
        searchByBarCode(product_id);
    }
    return (
        <Master>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">
                                    Caja de ventas {isSubscribed} {register}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="form-group row">
                                                <label className="col-lg-6 col-form-label">
                                                    <span className="text-primary">
                                                        *
                                                    </span>
                                                    Código / Nombre del producto
                                                </label>
                                            </div>

                                            <form
                                                autoComplete="off"
                                                onSubmit={handleSubmit(
                                                    searchByBarCode
                                                )}
                                                className="form-group row"
                                            >
                                                <div className="col-lg-6">
                                                    {isSubscribed ? (
                                                        <Select
                                                            // onChange={findByWords}
                                                            onChange={(
                                                                choice
                                                            ) =>
                                                                findByWords(
                                                                    choice.value
                                                                )
                                                            }
                                                            id="selectFind"
                                                            options={options}
                                                        />
                                                    ) : (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="inputBarcode"
                                                            maxLength="12"
                                                            autoFocus
                                                        />
                                                    )}
                                                </div>
                                            </form>

                                            <div className="ml-1 form-group row">
                                                <p className="smallText">
                                                    Busqueda por nombre&emsp;
                                                </p>
                                                <input
                                                    id="type_search"
                                                    className="check"
                                                    type="checkbox"
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    htmlFor="type_search"
                                                    className="checktoggle"
                                                >
                                                    checkbox
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                            <div className="boxValueTotal">
                                                <h1 className="valueTotal">
                                                    $ {total}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <ul className="nav nav-tabs menu-tabs">
                                        <TabsCashRegister setCartShowing={setCartShowing} />

                                        {/* {tabs ? (
                                            tabs.map((number, key) => (
                                                <div
                                                    key={key}
                                                    className="table-responsive"
                                                >
                                                    <li className="nav-item active">
                                                        <div className="nav-link">
                                                            Caja {key + 1}
                                                        </div>
                                                    </li>
                                                    <TableCashRegister
                                                        setTotal={setTotal}
                                                        setTabs={setTabs}
                                                        items={
                                                            number.get_list_products
                                                        }
                                                        cart={key + 1}
                                                    />
                                                </div>
                                            ))
                                        ) : (
                                            <>
                                                <li className="nav-item active">
                                                    <Link className="nav-link">
                                                        Cash
                                                    </Link>
                                                </li>
                                            </>
                                        )} */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    );
};

export default CashRegister;
