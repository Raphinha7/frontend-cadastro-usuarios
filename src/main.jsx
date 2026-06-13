import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { UsuarioProvider } from "./context/UsuarioContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsuarioProvider>
    <App />
  </UsuarioProvider>
);
