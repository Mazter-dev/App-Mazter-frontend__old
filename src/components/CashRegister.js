import React from "react";
import { Link } from "react-router-dom";
import Master from "./layouts/Master";
const CashRegister = () => {
  return (
    <Master>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Caja de ventas</h3>
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
                          <span className="text-primary">*</span>
                          Código / Nombre del producto
                        </label>
                      </div>
                      <div className="form-group row">
                        <div className="col-lg-6">
                          <input type="text" className="form-control" />
                        </div>
                        <button className="btn btn-primary">
                          <i className="fas fa-hashtag"></i>
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pull-right">
                        <h1 style={{ fontSize: "7em" }}>$ 15.000</h1>
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
                      <Link className="nav-link" href="wallet.html">
                        Wallet Report
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link">Wallet History</Link>
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
                          <td>1</td>
                          <td>15 Sep 2020</td>
                          <td>
                            <span className="table-avatar">
                              <Link href="#" className="avatar avatar-sm mr-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  alt=""
                                  src="assets/img/customer/user-02.jpg"
                                />
                              </Link>
                              <Link>Nancy Olson</Link>
                            </span>
                          </td>
                          <td>Car Repair Services</td>
                          <td>$50</td>
                          <td className="pull-right px-5">
                            <Link
                              href="edit-ratingstype.html"
                              className="table-action-btn btn btn-sm bg-success-light"
                            >
                              <i className="far fa-edit mr-1"></i> &nbsp; Edit
                              &nbsp;&nbsp;
                            </Link>
                            <br />
                            <Link
                              href="edit-ratingstype.html"
                              className="table-action-btn btn btn-sm bg-danger-light"
                            >
                              <i className="far fa-edit mr-1"></i> Delete
                            </Link>
                          </td>
                        </tr>
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
                      <div className="" id="" role="status" aria-live="polite">
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
