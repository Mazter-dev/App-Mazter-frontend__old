export function getBearer() {
    return sessionStorage.getItem("bearer");
}
export function urlApi(url) {
    return  process.env.REACT_APP_URL_API + url;
}
export function configApi() {
    var config = {}
    if (sessionStorage.getItem("bearer")) {
        config = {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("bearer")}`,
                "Access-Control-Allow-Origin": "*",
            },
        };
    }else{
        config = {
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
        };
    }
    return config;
}
export function ip() {
    return  process.env.REACT_APP_URL_API ;
}
