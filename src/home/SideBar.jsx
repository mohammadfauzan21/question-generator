import { useState } from "react";
import OptionList from "./OptionList";
import Option from "./Option";
import Profile from "./Profile";
import logo from "../assets/logo.png";
import "./styles.css";

let id = 0;
const initialMenusUp = [
  { id: id++, option: "Practice Test", nameIcon: "crown" },
  { id: id++, option: "History Test", nameIcon: "folder" },
  { id: id++, option: "About Us", nameIcon: "pin" },
  { id: id++, option: "Contact Us", nameIcon: "conversation" },
];

export default function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "" : "close"}`}>
      <header>
        <div className="image-text">
          <span className="image">
            <img src={logo} alt="logo" />
          </span>

          <div className="text header-text">
            <span className="name">PrepMate</span>
          </div>
        </div>

        <i className="bx bx-chevron-right icon" onClick={toggleSidebar}></i>
      </header>

      <div className="menu-bar">
        <OptionList menus={initialMenusUp} />
        <div className="menu-bottom">
          <Profile option="Adit" nameIcon={"user"} />
          <Option option="LogOut" nameIcon={"log-out"} />
        </div>
      </div>
    </nav>
  );
}
