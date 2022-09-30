import "./App.css";
import Menu from "./components/Menu";
import { BrowserRouter } from "react-router-dom";
import Web from "./components/Web";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Web />
      </BrowserRouter>
    </div>
  );
}
export default App;
