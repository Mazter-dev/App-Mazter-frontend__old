import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IconRequired } from "../layouts/IconRequired";
import { InputRequired } from "../layouts/InputRequired";

export const ModalProductUpdate = (props,setShowModal) => {

    const sendForm = (data) => {
        console.log(data);
    };
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    function handleShowModal(product_id) {
        setShowModal(!props.showModal)
    }
    return (
        <Modal show={props.showModal}  centered size="lg">
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
                        {/* <InputRequired error={errors} name="price" /> */}
                    </div>

                    <div className="form-group">
                        <label>
                            <IconRequired /> Unidades disonibles
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("stock", {
                                required: true,
                            })}
                        />
                        {/* <InputRequired error={errors} name="stock" /> */}
                    </div>
                    <div className="form-group">
                        <label>Código de barras</label>
                        <input type="text" className="form-control" />
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
