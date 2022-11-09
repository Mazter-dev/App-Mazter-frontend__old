import $ from "jquery";
export function getBearer() {
    return sessionStorage.getItem("bearer");
}
export function urlApi(url) {
    // return process.env.REACT_APP_URL_API + url;
    return 'https://app-mazter-backend-production.up.railway.app/';
}
export function configApi() {
    var config = {};
    if (sessionStorage.getItem("bearer")) {
        config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("bearer")}`,
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "https://app-mazter-backend-production.up.railway.app/",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
            },
        };
    } else {
        config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };
    }
    return config;
}
export function ip() {
    $.getJSON("https://api.ipify.org?format=json", function (data) {
        // Setting text of element P with id gfg
        console.log(data);
    });
    // return "1";
}
