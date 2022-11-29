import "./css/App.css";
import "./css/Xd.css";
import "./css/admin.css";
import "./css/font-awesome.min.css";
import "./plugins/fontawesome/css/all.min.css";
import "./components/jquery/index.js";
import MainRouter from "./routing/MainRouter";
import UserContext from "./context/UserContext";
import axios from "axios";
import { configApi, urlApi } from "./helpers/helper";
import { useEffect, useState } from "react";
function App() {
    const [response, setResponse] = useState({
        name: null,
        role: null,
        auth: null,
    });
    function get() {
        
        axios
            .get(urlApi("getUser"), configApi())
            .then(function (r) {
                setResponse({
                    name: r.data.name,
                    role: r.data.role_id,
                    auth: true,
                });
            })
            .catch(function () {});
    }
    useEffect(() => {
        get();
    },[]);

    return (
        <UserContext.Provider value={{ response, setResponse }}>
            <>
                <MainRouter />
            </>
        </UserContext.Provider>
    );
}

export default App;
