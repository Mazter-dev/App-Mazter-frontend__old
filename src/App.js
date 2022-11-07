import "./css/App.css";
import "./css/Xd.css";
import "./css/admin.css";
import "./css/font-awesome.min.css";
import "./plugins/fontawesome/css/all.min.css";
import "./components/jquery/index.js";
import MainRouter from "./routing/MainRouter";

function App() {
    // const bearer = sessionStorage.getItem("bearer");
    // axios.defaults.headers.common = {
    //     'Authorization': 'Bearer ' + bearer
    // };
    // axios.create({
    //     headers: {
    //       Authorization : `Bearer ${sessionStorage.getItem("bearer")}`
    //       }
    //     })
    return (
        <div>
            <MainRouter />
        </div>
    );
}

export default App;
