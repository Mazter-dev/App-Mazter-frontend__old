import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Master from "./layouts/Master";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
import { IconRequired } from "./layouts/IconRequired";
import { InputRequired } from "./layouts/InputRequired";
import { useForm } from "react-hook-form";

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setListProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [hideFilter, statusHideFilter] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleShowModal = () => setShowModal(!showModal);

    const config = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("bearer")}`,
        },
    };

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("bearer")}`,
            },
        };

        function getProducts() {
            const url = process.env.REACT_APP_URL_API + "products/get";
            axios
                .get(url, config)
                .then(function (r) {
                    setListProducts(r.data);
                })
                .catch(function (r) {
                    sessionStorage.clear();
                    navigate("/auth/login");
                });
        }

        getProducts();
    }, [navigate]);

    const sendForm = (data) => {
        alert();
    };

    function toggleFilters() {
        statusHideFilter(false);
        setShow(!show);
    }

    function deleteRegister(product_id) {
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
                const url = process.env.REACT_APP_URL_API + "products/delete";
                const data = {
                    product_id: product_id,
                };
                axios
                    .post(url, data, config)
                    .then(function (r) {
                        setListProducts(r.data);
                        Swal.fire("Eliminado!", "", "success");
                    })
                    .catch(function (r) {
                        if (r.response.data.message === "Unauthenticated.") {
                            sessionStorage.clear();
                            navigate("/auth/login");
                        }
                    });
            }
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
                                    Lista de productos
                                </h3>
                            </div>
                            <div className="col-auto text-right">
                                <Link
                                    className={`btn btn-white filter-btn ${
                                        show ? "filter-btn-select" : null
                                    }`}
                                    onClick={() => {
                                        toggleFilters();
                                    }}
                                    id="filter_search"
                                >
                                    <i className="fas fa-filter"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`card filter-card 
			
			${hideFilter ? "d-none" : "d-block"} 
			${show ? "show-element" : "hide-element"} 
			
			`}
                        id=""
                    >
                        <div className="card-body pb-0">
                            <form action="#">
                                <div className="row filter-row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>Provider</label>
                                            <select className="form-control select">
                                                <option>Select Provider</option>
                                                <option>Thomas Herzberg</option>
                                                <option>Matthew Garcia</option>
                                                <option>Yolanda Potter</option>
                                                <option>
                                                    Ricardo Flemings
                                                </option>
                                                <option>Maritza Wasson</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>Status</label>
                                            <select className="form-control select">
                                                <option>Select Status</option>
                                                <option>Pending</option>
                                                <option>Inprogress</option>
                                                <option>
                                                    Completed (Provider)
                                                </option>
                                                <option>Accepted</option>
                                                <option>Rejected</option>
                                                <option>
                                                    Cancelled (Provider)
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>From Date</label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control datetimepicker"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label>To Date</label>
                                            <div className="cal-icon">
                                                <input
                                                    className="form-control datetimepicker"
                                                    type="text"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <button
                                                className="btn btn-primary btn-block"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* {show ? (
            <div className="card filter-card" id="">
              <div className="card-body pb-0">
                <form action="#">
                  <div className="row filter-row">
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label>Provider</label>
                        <select className="form-control select">
                          <option>Select Provider</option>
                          <option>Thomas Herzberg</option>
                          <option>Matthew Garcia</option>
                          <option>Yolanda Potter</option>
                          <option>Ricardo Flemings</option>
                          <option>Maritza Wasson</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label>Status</label>
                        <select className="form-control select">
                          <option>Select Status</option>
                          <option>Pending</option>
                          <option>Inprogress</option>
                          <option>Completed (Provider)</option>
                          <option>Accepted</option>
                          <option>Rejected</option>
                          <option>Cancelled (Provider)</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label>From Date</label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <label>To Date</label>
                        <div className="cal-icon">
                          <input
                            className="form-control datetimepicker"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="form-group">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div style={{ color: "blue" }}>Div 2</div>
          )} */}

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-center mb-0 datatable">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Producto</th>
                                                    <th>Precio</th>
                                                    <th>U. disponibles</th>
                                                    <th>Ventas</th>
                                                    <th>Estado</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {products.map((i, count) => {
                                                    return (
                                                        <tr key={count}>
                                                            <td>
                                                                {i.product_id}
                                                            </td>
                                                            <td>{i.name}</td>
                                                            <td>$ {i.price}</td>
                                                            <td>{i.stock}</td>
                                                            <td>{i.sales}</td>
                                                            <td>
                                                                {i.state === 1
                                                                    ? "active"
                                                                    : "inactive"}
                                                            </td>

                                                            <td>
                                                                <Link
                                                                    onClick={
                                                                        handleShowModal
                                                                    }
                                                                    href="edit-ratingstype.html"
                                                                    className="table-action-btn btn btn-sm bg-success-light"
                                                                >
                                                                    <i className="far fa-edit mr-1"></i>
                                                                    &nbsp; Edit
                                                                    &nbsp;&nbsp;
                                                                </Link>
                                                                <br />
                                                                <Link
                                                                    onClick={() => {
                                                                        deleteRegister(
                                                                            i.product_id
                                                                        );
                                                                    }}
                                                                    href="edit-ratingstype.html"
                                                                    className="table-action-btn btn btn-sm bg-danger-light"
                                                                >
                                                                    <i className="far fa-edit mr-1"></i>
                                                                    Delete
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row mt-5	">
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
                                        <div className="col-sm-12 col-md-8">
                                            <div
                                                className="dataTables_paginate paging_simple_numbers"
                                                id=""
                                            >
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            Previous
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item active">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            1
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            2
                                                        </Link>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled">
                                                        <Link
                                                            href="#"
                                                            className="page-link"
                                                        >
                                                            Next
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} centered size="lg">
                <Modal.Header>
                    <Modal.Title>Editar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="off" onSubmit={handleSubmit(sendForm)}>
                        <div className="form-group">
                            <label>
                                <IconRequired /> Nombre
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                
                                {...register("name", {
                                    required: true,
                                    maxLength: 15,
                                })}
                            />
                            <InputRequired error={errors} name="name" />
                            {/* {errors.name ? (
                                <i className="text-primary">
                                    &nbsp;
                                    {errors.name?.type === "required" &&
                                        "El nombre es requerido"}
                                    {errors.name?.type === "maxLength" &&
                                        "El nombre esta muy extenso"}
                                </i>
                            ) : (
                                false
                            )} */}
                        </div>
                        <div className="form-group">
                            <label>
                                <IconRequired /> Costo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                {...register("price", {
                                    required: true,
                                })}
                            />
                           <InputRequired error={errors} name="price" />
                        </div>

                        <div className="form-group">
                            <label>
                                <IconRequired /> Unidades disonibles
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                {...register(
                                    "stock",
                                    {
                                        required: true,
                                    }
                                )}
                            />
                            <InputRequired error={errors} name="stock" />
                        </div>
                        <div className="form-group">
                            <label>Código de barras</label>
                            <input
                                type="text"
                                className="form-control"
                                
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">
                                Actualizar
                            </button>
                            <Button
                                onClick={handleShowModal}
                                variant="secondary"
                            >
                                Close Modal
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </Master>
    );
};

export default ProductList;
