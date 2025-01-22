import React from 'react'
import "/src/styles.css";
import InformationList from '../component/InformationList';

const Profile = () => {
    return (
        <section className="profile">
        <div className="content">
            <h1 className="header-text">Your Profile</h1>
            <div className="core-content">
                <InformationList />
            </div>
        </div>
        </section>
    )
}

export default Profile