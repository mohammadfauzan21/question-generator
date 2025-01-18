import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import SideBar from "./sideBar";

createRoot(document.getElementById("root"))
.render(
    <StrictMode>
        <SideBar></SideBar>
    </StrictMode>
)