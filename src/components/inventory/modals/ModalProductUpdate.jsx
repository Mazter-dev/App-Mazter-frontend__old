import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { configApi, urlApi } from "../../../helpers/helper";
import { IconRequired } from "../layouts/IconRequired";
import { InputRequired } from "../layouts/InputRequired";

export const ModalProductUpdate = (props, setShowModal, showModal) => {
    const sendForm = (data) => {
    };

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [barcode, setBarcode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const data = {
            product_id: props.productId,
        };
        axios
            .post(urlApi("products/getProduct"), data, configApi())
            .then(function (r) {
               
                setName(r.data.product_name);
                setPrice(r.data.price);
                setStock(r.data.stock);
                setBarcode(r.data.barcode);
             
            })
            .catch(function () {
                sessionStorage.clear();
                navigate("/auth/login");
            });
    }, [navigate, props.productId]);

    function handleShowModal() {
        props.setShowModal(showModal);
    }

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    return (
        <Modal show={props.showModal} centered size="lg">
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
                            value={name}
                            className="form-control"
                            {...register("name")}
                        />
                        <InputRequired error={errors} name="name" />
                    </div>
                    <div className="form-group">
                        <label>
                            <IconRequired /> Costo
                        </label>
                        <input
                            value={price}
                            type="text"
                            className="form-control"
                            {...register("price")}
                        />
                        {/* <InputRequired error={errors} name="price" /> */}
                    </div>

                    <div className="form-group">
                        <label>
                            <IconRequired /> Unidades disonibles
                        </label>
                        <input
                            type="text"
                            value={stock}
                            className="form-control"
                            {...register("stock")}
                        />
                        {/* <InputRequired error={errors} name="stock" /> */}
                    </div>
                    <div className="form-group">
                        <label>Código de barras</label>
                        <input
                            type="text"
                            value={barcode}
                            {...register("barcode")}
                            className="form-control"
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-primary">
                            Actualizar
                        </button>
                        <Button onClick={handleShowModal} variant="secondary">
                            Close Modal
                        </Button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
};
