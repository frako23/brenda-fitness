import { Link } from "react-router-dom";
import header from "../assets/imgs/hero2.png";
import "../styles/home.css";

export function MainHeader() {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>
            Fitness is my <span>PASSION</span>
          </h4>
          <h1>Brenda Orozco Personal Trainer</h1>
          <p>
            Improve your performance, enhance you skills, may goal is to get you
            to the next level straightforward
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={header} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  );
}
