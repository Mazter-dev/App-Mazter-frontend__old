import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Master from "./layouts/Master";

const Dashboard = () => {
    const userData = useContext(UserContext);

    return (
        <Master>
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="page-title">
                                    Bienvenido {userData.response.name}!
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dash-widget-header">
                                        <span className="dash-widget-icon bg-primary">
                                            <i className="far fa-user"></i>
                                        </span>
                                        <div className="dash-widget-info">
                                            <h3>429</h3>
                                            <h6 className="text-muted">
                                                Productos registrados
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dash-widget-header">
                                        <span className="dash-widget-icon bg-primary">
                                            <i className="fas fa-user-shield"></i>
                                        </span>
                                        <div className="dash-widget-info">
                                            <h3>148</h3>
                                            <h6 className="text-muted">
                                                Ventas de hoy
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dash-widget-header">
                                        <span className="dash-widget-icon bg-primary">
                                            <i className="fas fa-qrcode"></i>
                                        </span>
                                        <div className="dash-widget-info">
                                            <h3>124</h3>
                                            <h6 className="text-muted">
                                                Total ventas hoy
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="dash-widget-header">
                                        <span className="dash-widget-icon bg-primary">
                                            <i className="far fa-credit-card"></i>
                                        </span>
                                        <div className="dash-widget-info">
                                            <h3>$11378</h3>
                                            <h6 className="text-muted">
                                                Producto más vendido
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex">
                            <div className="card card-table flex-fill">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Productos más vendidos
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-center">
                                            <thead>
                                                <tr>
                                                    <th>Customer</th>
                                                    <th>Date</th>
                                                    <th>Service</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-nowrap">
                                                        {/* <img className="avatar-xs rounded-circle"
                                                        src="assets/img/customer/user-05.jpg" alt="User Image" />  */}
                                                        Annette Silva
                                                    </td>
                                                    <td className="text-nowrap">
                                                        9 Sep 2020
                                                    </td>
                                                    <td>Car Repair Services</td>
                                                    <td>
                                                        <span className="badge bg-danger inv-badge">
                                                            Pending
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="font-weight-600">
                                                            $50
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="card card-table flex-fill">
                                <div className="card-header">
                                    <h4 className="card-title">
                                        Productos con pocas unidades
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-center">
                                            <thead>
                                                <tr>
                                                    <th>Customer</th>
                                                    <th>Date</th>
                                                    <th>Service</th>
                                                    <th>Status</th>
                                                    <th>Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-nowrap">
                                                        {/* <img className="avatar-xs rounded-circle"
                                                        src="assets/img/customer/user-05.jpg" alt="User Image" /> Annette */}
                                                        Silva
                                                    </td>
                                                    <td className="text-nowrap">
                                                        9 Sep 2020
                                                    </td>
                                                    <td>Car Repair Services</td>
                                                    <td>
                                                        <span className="badge bg-danger inv-badge">
                                                            Pending
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <div className="font-weight-600">
                                                            $50
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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

export default Dashboard;
