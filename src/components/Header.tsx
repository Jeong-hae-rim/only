import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header-container">
        <div className="header-wrap">
          <span>
            <div className="heart">🩷</div> ツッパリ Highschool ⊹⁺ Love & Ball
          </span>
        </div>
      </div>
      <div className="navigate">
        <li>
          <Link to={"/love-and-ball"}>
            <span>H</span>OME_
          </Link>
        </li>
        <li>
          <span> Y</span>EAR LIST_
        </li>
        <li>
          <Link to={"/date-log"}>
            <span> D</span>ATE LOG_
          </Link>
        </li>
        <li>
          <span> M</span>ORE_
        </li>
      </div>
    </div>
  );
};

export default Header;
