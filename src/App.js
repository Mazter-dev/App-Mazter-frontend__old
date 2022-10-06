import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Web from "./components/Web";

function App() {
    var textFromStorage = localStorage.getItem("bearer");

    console.log("token " + textFromStorage);

    // if (!textFromStorage) {
    //     return <div>No login</div>;
    // }
    return (
        <div>
            <BrowserRouter>
                <Web />
            </BrowserRouter>
        </div>
    );
}
export default App;
