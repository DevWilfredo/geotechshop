import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
