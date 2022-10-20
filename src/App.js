import "./css/App.css";
import "./css/Xd.css";
import "./css/admin.css";
import "./css/font-awesome.min.css";
import "./plugins/fontawesome/css/all.min.css";
import MainRouter from "./routing/MainRouter";
import $ from "jquery";

function App() {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 30) {
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });
    return (
        <div>
            <MainRouter />
        </div>
    );
}

export default App;
