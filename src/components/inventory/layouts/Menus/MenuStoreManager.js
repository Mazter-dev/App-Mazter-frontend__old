
import { privateRoutes } from "../../../../helpers/routes";
import { Link, useLocation } from "react-router-dom";

const MenuStoreManager = (props) => {
    const prefix = "/app/";
    let location = useLocation();
   
    return (

        <div className="sidebar" id="sidebar">
            <div className="sidebar-logo">
                <Link href="index.html">
                    <img
                        src="assets/img/logo-icon.png"
                        className="img-fluid"
                        alt=""
                    />
                </Link>
            </div>
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <li className="menu-title">
                        <span>Menú Manager</span>
                    </li>
                    <ul>
                        <li
                            className={`${
                                location.pathname ===
                                prefix + privateRoutes.DASHBOARD
                                    ? "active"
                                    : false
                            }`}
                        >
                            <Link to={prefix + privateRoutes.DASHBOARD}>
                                <i className="fas fa-columns"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        {/* {role_id === 1 ? (
                            <></>
                        ) : (
                            <> */}
                                {/* <li
                                    className={`${
                                        location.pathname ===
                                        prefix + privateRoutes.CASHREGISTER
                                            ? "active"
                                            : false
                                    }`}
                                >
                                    <Link
                                        to={prefix + privateRoutes.CASHREGISTER}
                                    >
                                        <i className="fas fa-shopping-cart"></i>
                                        <span>Caja</span>
                                    </Link>
                                </li> */}
                            {/* </>
                        )} */}

                        <li className="submenu">
                            <Link>
                                <i className="fas fa-qrcode"></i>
                                <span>Productos</span>
                                <span className="menu-arrow"></span>
                            </Link>
                            {/* style="display: none;" */}
                            <ul style={{ display: "block" }}>
                                <li>
                                    <Link
                                        className={`${
                                            location.pathname ===
                                            prefix + privateRoutes.PRODUCT_ADD
                                                ? "active"
                                                : false
                                        }`}
                                        to={prefix + privateRoutes.PRODUCT_ADD}
                                    >
                                        Agregar
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className={`${
                                            location.pathname ===
                                            prefix + privateRoutes.PRODUCT_LIST
                                                ? "active"
                                                : false
                                        }`}
                                        to={prefix + privateRoutes.PRODUCT_LIST}
                                    >
                                        Listar
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li className="submenu">
                            <Link href="#">
                                <i className="fas fa-user-plus"></i>{" "}
                                <span>Mi cuenta</span>
                                <span className="menu-arrow"></span>
                            </Link>
                            <ul style={{ display: "block" }}>
                                <li>
                                    <Link to="/my-data">Mis datos</Link>
                                </li>
                                <li>
                                    <Link to="/my-suscription">
                                        Mi suscripción
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/Help-Desk">
                                <i className="fas fa-exclamation"></i>
                                <span>Mesa de ayuda</span>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div
                    className="align-items-end"
                    style={{ position: "absolute", bottom: "0" }}
                >
                    <p style={{ fontSize: " 12px" }}>
                        © Mazter 2022 - power by{" "}
                        <i className="text-primary">NelsonDJCR</i> v 1.0
                    </p>
                </div>
            </div>
        </div>
    );
};
export default MenuStoreManager;
