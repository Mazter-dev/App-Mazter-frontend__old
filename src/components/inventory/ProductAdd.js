import React, { useState } from "react";
import Master from "./layouts/Master";
import { useForm } from "react-hook-form";
import { IconRequired } from "./layouts/IconRequired";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
const ProductAdd = () => {
    const [msgErrorLogin, setMsgErrorLogin] = useState("");

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const user_id = localStorage.getItem("user_id");
        const url = process.env.REACT_APP_URL_API + "products/save";
        Object.assign(data, {
            user_id: user_id,
        });

        axios
            .post(url, data)
            .then(function () {
                Swal.fire({
                    title: "Error!",
                    text: "Do you want to continue",
                    icon: "success",
                    confirmButtonText: "Cool",
                });

                Swal.fire({
                    title: 'Producto registrado',
                    text: '¿Desea agregar otro producto?',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.value) {
                        resetForm()
                    }else{
                        navigate("/app/list-products");
                    }
                });
            })
            .catch(function () {
                setMsgErrorLogin("Datos incorrectos intente nuevamente");
            });
    };

    function resetForm() {
        document.getElementById("form-add-product").reset();
    }

    return (
        <Master>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col">
                                <h3 className="page-title">Agregar producto</h3>
                            </div>
                        </div>
                    </div>
                    {msgErrorLogin}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">
                                        Información del producto
                                    </h4>
                                    <form onSubmit={handleSubmit(onSubmit)} id="form-add-product">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        <IconRequired /> Nombre
                                                    </label>
                                                    <div className="col-lg-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            {...register(
                                                                "name",
                                                                {
                                                                    required: true,
                                                                    maxLength: 15,
                                                                }
                                                            )}
                                                        />
                                                        <i className="text-primary">
                                                            &nbsp;
                                                            {errors.name
                                                                ?.type ===
                                                                "required" &&
                                                                "El nombre es requerido"}
                                                            {errors.name
                                                                ?.type ===
                                                                "maxLength" &&
                                                                "El nombre esta muy extenso"}
                                                        </i>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        <IconRequired /> Código
                                                        de barras
                                                    </label>
                                                    <div className="col-lg-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            {...register(
                                                                "bar_code",
                                                                {
                                                                    required: false,
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                {/* Discount */}
                                                {/* <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        <IconRequired />
                                                        ¿Incluir descuento?
                                                    </label>
                                                    <div className="col-lg-9">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="gender_male"
                                                                value="option1"
                                                            />
                                                            <label className="form-check-label">
                                                                Aplica
                                                            </label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="gender"
                                                                id="gender_female"
                                                                value="option2"
                                                            />
                                                            <label className="form-check-label">
                                                                No aplica
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        Descuento
                                                    </label>
                                                    <div className="col-lg-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div> */}
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        <IconRequired /> Costo
                                                    </label>
                                                    <div className="col-lg-9">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            {...register(
                                                                "price",
                                                                {
                                                                    required: true,
                                                                }
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-lg-3 col-form-label">
                                                        <IconRequired />{" "}
                                                        Unidades disonibles
                                                    </label>
                                                    <div className="col-lg-9">
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
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <img
                                                    src="https://i.pinimg.com/736x/4c/97/10/4c97106bd38a9428c1b112211e2582b5.jpg"
                                                    style={{ height: "341px" }}
                                                    alt=""
                                                />
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                            >
                                                Agregar producto
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Master>
    );
};

export default ProductAdd;
