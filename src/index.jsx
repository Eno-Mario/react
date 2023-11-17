import React, { StrictMode } from "react";
import { createRoot, render } from "react-dom/client";
import App from "./App";

import  "./style.css"

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode><App /></StrictMode>);
