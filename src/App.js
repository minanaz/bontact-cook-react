import { Link } from "react-router-dom";
import "./App.css";
import MainRoutes from "./MainRoutes";
import { RiHome2Line } from "react-icons/ri";
import { AiOutlinePlusSquare } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header>
        <div class="container">
          <div class="navbar">
            <h2>
              <span>contact</span>
              <span>book</span>
            </h2>
            <ul class="navigation">
              <Link to="/">
                <li class="navigation__item">
                  home <RiHome2Line />
                </li>
              </Link>
              <Link to="/add">
                <li class="navigation__item">
                  add <AiOutlinePlusSquare />
                </li>
              </Link>
              <Link to="/">
                <li class="navigation__item">
                  home but again <RiHome2Line />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </header>

      <MainRoutes />
    </div>
  );
}

export default App;
