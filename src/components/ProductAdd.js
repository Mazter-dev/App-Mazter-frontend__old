import React from "react";
import Master from "./layouts/Master";
const ProductAdd = () => {
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
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Información del producto</h4>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            <span className="text-primary">*</span> Nombre
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            <span className="text-primary">*</span> Código de barras
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            <span className="text-primary">*</span> ¿Incluir
                            descuento?
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
                              <label
                                className="form-check-label"
                              >
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
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            <span className="text-primary">*</span> Categoria
                          </label>
                          <div className="col-lg-9">
                            <select className="form-control">
                              <option>Select</option>
                              <option value="1">A+</option>
                              <option value="2">O+</option>
                              <option value="3">B+</option>
                              <option value="4">AB+</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-lg-3 col-form-label">
                            <span className="text-primary">*</span> Unidades
                            disonibles
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
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
                      <button type="submit" className="btn btn-primary">
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
