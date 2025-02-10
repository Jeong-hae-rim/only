import "./App.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/loveandball.png";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  const handleOnClick = () => {
    navigate("/love-and-ball");
  };

  return (
    <div className="main__container">
      <div>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <div className="nes-container with-title game-box-wrapper">
        <p className="title">HOYEOL X DAEMAN ONLY</p>
        <h3 className="title2"> ツッパリ </h3>
        <h3 className="title2"> HIGH SCHOOL </h3>
        <h2 className="title2">⊹⁺ LOVE & BALL ⊹⁺</h2>
        <div className="label-wrapper">
          <label>
            <input
              type="radio"
              className="nes-radio"
              name="answer"
              onClick={handleOnClick}
              checked
            />
            <span>Yes</span>
          </label>
          <label>
            <input type="radio" className="nes-radio" name="answer" />
            <span>No</span>
          </label>
        </div>
        <p className="read-the-docs">2025. 05. 24</p>
        <p className="read-the-docs">SLAM DUNK NON-OFFICIAL FESTIVAL</p>
      </div>
    </div>
  );
}

export default App;
