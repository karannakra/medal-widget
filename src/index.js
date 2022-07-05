import React from "react";
import ReactDOM from "react-dom/client";
import MedalWidget from "./components/MedalWidget/MedalWidget";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MedalWidget sort="gold" element_id="medal_container" />);
