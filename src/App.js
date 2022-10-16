import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Web from "./components/Web";
import "./css/App.css";
import "./css/Xd.css";

import Api from "./components/inventory/test/Api";
import CashRegister from "./components/inventory/CashRegister";
import Dashboard from "./components/inventory/Dashboard";
import MyData from "./components/inventory/MyData";
import MySuscription from "./components/inventory/MySuscription";
import ProductAdd from "./components/inventory/ProductAdd";
import ProductList from "./components/inventory/ProductList";
import Error404 from "./components/errors/Error404";
import Login from "./components/inventory/Login";
// import Test from "./components/inventory/test/Test";

function App() {
    var textFromStorage = localStorage.getItem("bearer");
    console.log("token " + textFromStorage);
    // if (!textFromStorage) {
    //     return <div>No login</div>;
    // }
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/CashRegister" element={<CashRegister />} />
                    <Route path="/Add-product" element={<ProductAdd />} />
                    <Route path="/List-product" element={<ProductList />} />
                    <Route path="/My-data" element={<MyData />} />
                    <Route path="/My-suscription" element={<MySuscription />} />
                    <Route path="/test-api" element={<Api />} />
                    <Route path="/test" element={<test />} />
                    <Route path="/test-login" element={<Login />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;
