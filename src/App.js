import "./App.css";
// import Master from "./components/layouts/Master";
import { BrowserRouter } from "react-router-dom";
import Web from "./components/Web";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Web />
      </BrowserRouter>
    </div>
  );
}
export default App;
