import "./css/App.css";
import "./css/Xd.css";
import "./css/admin.css";
import "./css/font-awesome.min.css";
import "./plugins/fontawesome/css/all.min.css";
import "./components/jquery/index.js";
import MainRouter from "./routing/MainRouter";
// import $ from "jquery";

function App() {
    return (
        <div>
            <MainRouter />
        </div>
    );
}

export default App;
