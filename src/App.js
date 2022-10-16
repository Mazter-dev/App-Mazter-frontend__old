// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Web from "./components/Web";
import "./css/App.css";
import "./css/Xd.css";

import MainRouter from "./routing/MainRouter";

function App() {
    
    var dataSesion = localStorage.getItem("bearer");
    
    
    return (
        <div>
            <MainRouter dataSesion={dataSesion} />
        </div>
    );
}
export default App;
