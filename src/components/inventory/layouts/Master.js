import React, { useContext } from "react";
import { Link, redirect } from "react-router-dom";
import $ from "jquery";

import MenuStoreManager from "./Menus/MenuStoreManager";

import UserContext from "../../../context/UserContext";
import MenuEmploye from "./Menus/MenuEmploye";
const Master = (props) => {
    const userData = useContext(UserContext);
    const logout = async () => {
        userData.setResponse({
            name: null,
            role: null,
            auth: false,
        });
        return redirect("/auth/login");
    };
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
                            onClick={logout}
                            className="dropdown-toggle nav-link"
                            data-toggle="dropdown"
                        >
                            <i className="far fa-user"></i>
                        </Link>
                        <Link
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
            {userData.response.role === 2 ? (
                <>
                    <MenuStoreManager />
                </>
            ) : (
                userData.response.role ===
                3(
                    <>
                        <MenuEmploye />
                    </>
                )
            )}

            {props.children}
        </div>
    );
};

export default Master;
