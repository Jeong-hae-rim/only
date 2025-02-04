import "./Header.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="header-container">
        <div className="header-wrap">
          <span>♥ ツッパリ Highschool ⊹⁺ Love & Ball</span>
        </div>
      </div>
      <div className="navigate">
        <li>
          <span>H</span>OME_
        </li>
        <li>
          <span> Y</span>EAR LIST_
        </li>
        <li>
          <span> D</span>ATE LOG_
        </li>
        <li>
          <span> M</span>ORE_
        </li>
      </div>
    </div>
  );
};

export default Header;
