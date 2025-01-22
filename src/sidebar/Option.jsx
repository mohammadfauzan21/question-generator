import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Option({ option, nameIcon, path }) {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);

    let component = (
        <li className="nav-link">
            <a onClick={() => navigate(path)}>
                <div className="box-icon">
                    <i className={`bx bx-${nameIcon} icon`}></i>
                </div>
                <p className="text nav-text">{option}</p>
            </a>
        </li>
    );

    return (
        <div onClick={() => setIsClicked(true)} role="button" style={{ cursor: "pointer" }}>
            {component}
        </div>
    );
}
