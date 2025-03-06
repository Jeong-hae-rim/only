import ReactDOM from "react-dom/client";
import Router from "./routes.tsx";
import PWAUpdate from "./func/PWAUdate.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <PWAUpdate />
    <Router />
  </>
);
