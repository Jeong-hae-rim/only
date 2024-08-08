import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
// import { Header } from "./components";
import Info from "./pages/Info";
import InfoDetail from "./pages/InfoDetail";
import NotFound from "./pages/404";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info/:id" element={<InfoDetail />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
