import "./App.css";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/loveandball.png";

function App() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/loveandball");
  };

  return (
    <div className="main__container">
      <div onClick={handleOnClick}>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h2 className="title">HOYEOL X DAEMAN ONLY</h2>
      <h1 className="title2">
        {" "}
        <span className="dela-gothic-one-regular">ツッパリ</span> HIGH SCHOOL
      </h1>
      <h1 className="title2">✨️ LOVE & BALL ✨️</h1>
      <p className="read-the-docs">2025. 05. 24</p>
      <p className="read-the-docs">SLAM DUNK NON-OFFICIAL FESTIVAL</p>
    </div>
  );
}

export default App;
