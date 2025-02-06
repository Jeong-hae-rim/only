import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Info from "./pages/Info";
import NotFound from "./pages/404";
import DateLog from "./pages/DateLog";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/love-and-ball" element={<Info />} />
          <Route path="/date-log" element={<DateLog />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
