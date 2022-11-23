import axios from "axios";
import $ from "jquery";
export function getBearer() {
    return localStorage.getItem("bearer");
}
export function urlApi(url) {
    return "http://mazter-backend.develop/api/v1/" + url;
    // return 'https://api.nelsondjcr.com/api/v1/'+ url;
}
export function configApi() {
    var config = {};
    if (localStorage.getItem("bearer")) {
        config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("bearer")}`,
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "https://api.nelsondjcr.com",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            },
        };
    } else {
        config = {
            headers: {
                "Access-Control-Allow-Origin": "https://api.nelsondjcr.com",
            },
        };
    }
    return config;
}
export function ip() {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        console.log(data);
    });
}
export function getUserRole() {
    axios
        .get(urlApi("getUser"), configApi())
        .then(function (r) {
            console.log('helperxsd',r.data.role_id);
        })
}
