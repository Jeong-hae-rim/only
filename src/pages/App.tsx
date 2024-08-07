import reactLogo from "../assets/lovepunch.png";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/info");
  };

  return (
    <>
      <div onClick={handleOnClick}>
        <img src={reactLogo} className="logo" alt="React logo" />
      </div>
      <h1 className="title">호열X대만 온리전</h1>
      <h1 className="title">LOVE PUNCH</h1>
      <p className="read-the-docs">2024. 8. 10</p>
    </>
  );
}

export default App;
