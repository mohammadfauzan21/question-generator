import React from 'react'

const ButtonCustom = ({name, onClicked}) => {
    return (
        <div className="box-btn">
            <button className={`btn-${name}`}>{name}</button>
        </div>
    )
}

export default ButtonCustom