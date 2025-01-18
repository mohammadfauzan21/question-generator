import { useState } from "react";

export default function Option({ option, nameIcon }) {
    const [isClicked, setIsClicked] = useState(false);

    let component;

    if(isClicked){
        component = (
            <li className="profile-link">
                <a href="">
                    <div className="box-icon">
                        <i className={`bx bx-${nameIcon} icon`}></i>
                    </div>
                    <p className="text nav-text">{option}</p>
                </a>
            </li>
        )
    }else{
        component = (
            <li className="profile-link">
                <a href="">
                    <div className="box-icon">
                        <i className={`bx bx-${nameIcon} icon`}></i>
                    </div>
                    <p className="text nav-text">{option}</p>
                </a>
            </li>
        )
    }

    return(
        <a onClick={() => setIsClicked(true)}>
            {component}
        </a>
    )
}