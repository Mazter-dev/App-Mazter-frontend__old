import "./css/App.css";
import "./css/Xd.css";
import "./css/admin.css";
import "./css/font-awesome.min.css";
import "./plugins/fontawesome/css/all.min.css";

import "./js/admin.js";

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
