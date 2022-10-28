/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Master from "./layouts/Master";
import Select from "react-select";
import $ from "jquery";
import axios from "axios";
const CashRegister = () => {
    const options = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    // const [showComponent] = useState(true);
    const [table, setTable] = useState({});
    useEffect(() => {
        setTable({})
      }, []);
    // var total = 0;

    const [isSubscribed, setIsSubscribed] = useState(false);

    var [totalCart, setTotalCart] = useState(0);

    const handleChange = (event) => {
        setIsSubscribed((current) => !current);
    };

    const listProducts = [];

    function findProducByBarcode(evt) {
        var value = evt.target.value;
        if (value.length >= 12) {
            const url = process.env.REACT_APP_URL_API + "products/show";
            const data = { code: $("#inputBarcode").val() };
            axios
                .post(url, data)
                .then(function (r) {
                    if (listProducts.length <= 0) {
                        // Add firs item cart
                        // addCart(r);
                        setTable({
                            id: r.data.id,
                            name: r.data.name,
                            price: r.data.price,
                            amount: 1,
                            totalProduct: r.data.price * 1,
                        });
                        console.log(table, "Add firs item cart");
                    } else {
                        const name = listProducts.find((product) => {
                            return product.id === r.data.id;
                        });
                        if (typeof name === "undefined") {
                            // Add new item cart
                            addCart(r);
                            console.log(table, "Add new item cart");
                            setTable(1);
                        } else {
                            // If isset item cart cahange amount
                            listProducts.forEach((element, index) => {
                                if (element.id === r.data.id) {
                                    listProducts[index] = {
                                        id: r.data.id,
                                        name: r.data.name,
                                        price: r.data.price,
                                        amount: element.amount + 1,
                                        totalProduct:
                                            r.data.price * (element.amount + 1),
                                    };
                                }
                            });
                            console.log(listProducts, "change amount");
                        }
                    }
                    $("#inputBarcode").val("");
                })
                .catch(function () {});

            $("#inputBarcode").val("");
            // console.log(table,'table');
            // console.log(listProducts,'listProducts');
        }
    }

    function addCart(r) {
        setTable({
            id: r.data.id,
            name: r.data.name,
            price: r.data.price,
            amount: 1,
            totalProduct: r.data.price * 1,
        });
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

                                            <div className="form-group row">
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
                                                            onChange={
                                                                findProducByBarcode
                                                            }
                                                        />
                                                    )}
                                                </div>
                                                <button className="btn btn-primary">
                                                    <i className="fas fa-hashtag"></i>
                                                </button>
                                            </div>

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
                                                    $ {totalCart}
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
                                        <li className="nav-item active">
                                            <Link
                                                className="nav-link"
                                                href="wallet.html"
                                            >
                                                Wallet Report
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link">
                                                Wallet History
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link">
                                                <i className="fas fa-plus-square text-primary"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="table-responsive">
                                        <table className="table table-hover table-center mb-0 datatable">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Producto</th>
                                                    <th>Cantidad</th>
                                                    <th>Precio unidad</th>
                                                    <th>Precio final</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {table ? (
                                                        <th>si</th>
                                                    ) : (
                                                        <th>no</th>
                                                    )}
                                                </tr>

                                                {/* {table.map((i, index) => (
                                                    <tr>
                                                        <td>1</td>
                                                        <td>15 Sep 2020</td>
                                                        <td>
                                                            <span className="table-avatar">
                                                                <Link
                                                                    href="#"
                                                                    className="avatar avatar-sm mr-2"
                                                                >
                                                                    <img
                                                                        className="avatar-img rounded-circle"
                                                                        alt=""
                                                                        src="assets/img/customer/user-02.jpg"
                                                                    />
                                                                </Link>
                                                                <Link>
                                                                    Nancy Olson
                                                                </Link>
                                                            </span>
                                                        </td>
                                                        <td>
                                                            Car Repair Services
                                                        </td>
                                                        <td>$50</td>
                                                        <td className="pull-right px-5">
                                                            <Link
                                                                href="edit-ratingstype.html"
                                                                className="table-action-btn btn btn-sm bg-success-light"
                                                            >
                                                                <i className="far fa-edit mr-1"></i>{" "}
                                                                &nbsp; Edit
                                                                &nbsp;&nbsp;
                                                            </Link>
                                                            <br />
                                                            <Link
                                                                href="edit-ratingstype.html"
                                                                className="table-action-btn btn btn-sm bg-danger-light"
                                                            >
                                                                <i className="far fa-edit mr-1"></i>{" "}
                                                                Delete
                                                            </Link>
                                                        </td>
                                                    </tr>
                                                ))} */}
                                            </tbody>
                                        </table>
                                    </div>
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
