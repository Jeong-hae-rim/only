import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Info from "./pages/Info";
import NotFound from "./pages/404";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/love-you" element={<Info />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
