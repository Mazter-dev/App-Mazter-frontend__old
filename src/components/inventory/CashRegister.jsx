/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Master from "./layouts/Master";
import Select from "react-select";
import $ from "jquery";
import axios from "axios";
import { useForm } from "react-hook-form";
import TableCashRegister from "./TableCashRegister";
const CashRegister = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];
    const user_id = localStorage.getItem("user_id");

    const [total, setTotal] = useState(0);
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        const url = process.env.REACT_APP_URL_API + "getProductShoppingCart";
        const data = {
            user_id: user_id,
            cart: 1,
        };
        axios
            .post(url, data)
            .then(function (r) {
                console.log(r.data.cart);
                setTabs(r.data.cart);
                setTotal(r.data.total);
            })
            .catch(function (r) {});
    }, [user_id]);

    const [isSubscribed, setIsSubscribed] = useState(false);
    const [tabs, setTabs] = useState(false);

    const handleChange = (event) => {
        setIsSubscribed((current) => !current);
    };

    function searchByBarCode() {
        const data = {
            barcode: $("#inputBarcode").val(),
            user_id: user_id,
            cart: 1,
        };
        $("#inputBarcode").val("");
        const url =
            process.env.REACT_APP_URL_API + "registerProductShoppingCart";
        axios
            .post(url, data)
            .then(function (r) {
                console.log(r.data.cart);
                setTabs(r.data.cart);
                setTotal(r.data.total);
            })
            .catch(function (r) {});
    }

    return (
        <Master>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">
                                    Caja de ventas st {isSubscribed}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group row">
                                                <label className="col-lg-6 col-form-label">
                                                    <span className="text-primary">
                                                        *
                                                    </span>
                                                    Código / Nombre del producto
                                                </label>
                                            </div>

                                            <form
                                                onSubmit={handleSubmit(
                                                    searchByBarCode
                                                )}
                                                className="form-group row"
                                            >
                                                <div className="col-lg-6">
                                                    {isSubscribed ? (
                                                        <Select
                                                            options={options}
                                                        />
                                                    ) : (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            id="inputBarcode"
                                                            {...register(
                                                                "inputBarcode",
                                                                {
                                                                    required: false,
                                                                    maxLength: 100,
                                                                }
                                                            )}
                                                            maxLength="12"
                                                        />
                                                    )}
                                                </div>
                                                <button className="btn btn-primary">
                                                    <i className="fas fa-hashtag"></i>
                                                </button>
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
                                        <div className="col-6">
                                            <div className="pull-right">
                                                <h1 style={{ fontSize: "7em" }}>
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
                                        {tabs ? (
                                            tabs.map((number, key) => (
                                                <div
                                                    key={key}
                                                    className="table-responsive"
                                                >
                                                    <li className="nav-item active">
                                                        <div className="nav-link">
                                                            Caja {key + 1}
                                                            {/* {number.get_list_products.map(
                                                                (xd, xx) => (
                                                                    <div
                                                                        key={xx}
                                                                    ></div>
                                                                )
                                                            )} */}
                                                        </div>
                                                    </li>
                                                    <TableCashRegister
                                                        items={
                                                            number.get_list_products
                                                        }
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
                                        )}
                                    </ul>

                                    <div className="col-12 mt-5">
                                        <div className="pull-right">
                                            <button className="btn btn-primary">
                                                Finaliza Compra
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
                                        <div className="col-sm-12 col-md-4">
                                            <div
                                                className=""
                                                id=""
                                                role="status"
                                                aria-live="polite"
                                            >
                                                Showing 1 to 10 of 10 entries
                                            </div>
                                        </div>
                                    </div>
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
