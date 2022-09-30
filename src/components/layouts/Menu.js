import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-logo">
        <Link href="index.html">
          <img src="assets/img/logo-icon.png" className="img-fluid" alt="" />
        </Link>
      </div>
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <li className="menu-title">
            <span>Menú</span>
          </li>
          <ul>
            <li>
              <Link to="/Dashboard">
                <i className="fas fa-columns"></i> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/CashRegister">
                <i className="fas fa-shopping-cart"></i>
                <span>Caja</span>
              </Link>
            </li>
            <li className="submenu">
              <Link href="#">
                <i className="fas fa-qrcode"></i>
                <span>Productos</span>
                <span className="menu-arrow"></span>
              </Link>
              {/* style="display: none;" */}
              <ul style={{ display: "block" }}>
                <li>
                  <Link to="/Add-product">Agregar</Link>
                </li>
                <li>
                  <Link to="/List-product">Listar</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link href="#">
                <i className="fas fa-user-plus"></i> <span>Mi cuenta</span>
                <span className="menu-arrow"></span>
              </Link>
              <ul style={{ display: "block" }}>
                <li>
                  <Link to="/my-data">Mis datos</Link>
                </li>
                <li>
                  <Link to="/my-suscription">Mi suscripción</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/Help-Desk">
                <i className="fas fa-exclamation"></i>
                <span>Mesa de ayuda</span>
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="align-items-end"
          style={{ position: "absolute", bottom: "0" }}
        >
          <p style={{ fontSize: " 12px" }}>
            © Mazter 2022 - power by <i className="text-primary">NelsonDJCR</i>{" "}
            v 1.0
          </p>
        </div>
      </div>
    </div>
  );
};
export default Menu;
