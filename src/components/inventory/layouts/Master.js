import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
// import axios from "axios";
import { configApi, urlApi } from "../../../helpers/helper";
import axios from "axios";
import MenuEmploye from "./Menus/MenuEmploye";
import MenuStoreManager from "./Menus/MenuStoreManager";
// import CashRegister from "../product/CashRegister";
const Master = (props) => {
    // const [userName, setUserName] = useState('...');

    const [role_id, setRoleId] = useState(3);
    useEffect(() => {
        axios.get(urlApi("getUser"), configApi()).then(function (r) {
            setRoleId(r.data.role_id);
        });
    });
    function showMenu() {
        var $wrapper = $(".main-wrapper");
        $wrapper.toggleClass("slide-nav");
        $(".sidebar-overlay").toggleClass("opened");
        $("html").addClass("menu-opened");
    }
    $(".page-wrapper,.header").on("click", function () {
        if ($(".slide-nav") !== null) {
            var $wrapper = $(".main-wrapper");
            $wrapper.removeClass("slide-nav");
            $(".sidebar-overlay").removeClass("opened");
            $("html").removeClass("menu-opened");
        }
    });
    return (
        <div className="main-wrapper">
            <div className="header">
                <div className="header-left">
                    <Link href="index.html" className="logo logo-small">
                        <img
                            src="assets/img/logo-icon.png"
                            alt="Logo"
                            width="30"
                            height="30"
                        />
                    </Link>
                </div>
                <Link className="mobile_btn" onClick={showMenu} id="mobile_btn">
                    <i className="fas fa-align-left"></i>
                </Link>
                <ul className="nav user-menu">
                    <li className="nav-item dropdown noti-dropdown">
                        <Link
                            href="#"
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                        >
                            <i className="far fa-bell"></i>
                            <span className="badge badge-pill"></span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right notifications ">
                            <div className="topnav-dropdown-header">
                                <span className="notification-title">
                                    Notifications
                                </span>
                                <Link className="clear-noti"> Clear All </Link>
                            </div>
                            <div className="noti-content">
                                <ul className="notification-list">
                                    <li className="notification-message">
                                        <Link href="admin-notification.html">
                                            <div className="media">
                                                <span className="avatar avatar-sm">
                                                    <img
                                                        className="avatar-img rounded-circle"
                                                        alt=""
                                                        src="assets/img/provider/provider-01.jpg"
                                                    />
                                                </span>
                                                <div className="media-body">
                                                    <p className="noti-details">
                                                        <span className="noti-title">
                                                            Thomas Herzberg have
                                                            been subscribed
                                                        </span>
                                                    </p>
                                                    <p className="noti-time">
                                                        <span className="notification-time">
                                                            15 Sep 2020 10:20 PM
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="topnav-dropdown-footer">
                                <Link href="admin-notification.html">
                                    View all Notifications
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="dropdown-toggle user-link  nav-link"
                            data-toggle="dropdown"
                        >
                            <span className="user-img">
                                <img
                                    className="rounded-circle"
                                    src="assets/img/user.jpg"
                                    width="40"
                                    alt="Admin"
                                />
                            </span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right ">
                            <Link
                                className="dropdown-item"
                                href="admin-profile.html"
                            >
                                Profile
                            </Link>
                            <Link className="dropdown-item" href="login.html">
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            {role_id === 1 ? (
                <>
                    <MenuStoreManager />
                </>
            )  : role_id === 3 ?   (
                <>
                    <MenuEmploye />
                </>
            ) : null}

            {props.children}
        </div>
    );
};

export default Master;
