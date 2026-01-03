import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CssBaseline } from "@mui/material";

const rootEl = document.getElementById("root");
if (!rootEl) {
  throw new Error("Root element with id 'root' not found");
}
ReactDOM.createRoot(rootEl).render(
  <StrictMode>
    <CssBaseline />
    <App />
  </StrictMode>,
);
