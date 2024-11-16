import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.
root.render(<Home />); // Render your app.
