import React from 'react'

const SelfInformation = ({ label, information }) => {
    return (
        <div className="box-information">
            <div className="label">
                <p>{label}</p>
            </div>
            <div className="information">
                <p>{information}</p>
            </div>
        </div>
    )
}

export default SelfInformation