import React, { StrictMode } from "react";
import { createRoot, render } from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";

import "./style.css";

const fetcher = (url) => fetch(url).then((resp) => resp.json());

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </StrictMode>
);
