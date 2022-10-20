
export const publicRoutes = {
    LOGIN:'login',
}
export const privateRoutes = {
    APP_HOME:'homeApp',
    SESION:'sesion',
    DASHBOARD:'dashboard',
    CASHREGISTER:'CashRegister',
    PRODUCT_ADD:'add-product',
    PRODUCT_LIST:'list-products',
}

var dataSesion = localStorage.getItem("bearer");


export const helperDataSesion = {
    TOKEN:dataSesion,
}