import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./pages/App";
// import { Header } from "./components";
import Info from "./pages/Info";

const NotFound = () => {
  return <Link to="..">돌아가!!</Link>;
};

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
          <Route path="/info" element={<Info />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
