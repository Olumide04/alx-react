import React from "react";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import propTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';

const Notifications = ({ displayDrawer }) => {
    return (
        <div className="Notifications">
            <div className="menuItem">
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div className="Notifications">
                    <button type="button" aria-label="Close" onClick={() => console.log('Close button clicked')} 
                    style={{ 
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        cursor: "pointer", 
                        }} 
                        >
                            <img src={closeIcon} alt="close-icon" style={{ width: "10px"}} />
                    </button>
                    <p>Here is the list of notifications</p>
                    <ul>
                        <NotificationItem type="default" value="New course available" />
                        <NotificationItem type="default" value="New resume available" />
                        <NotificationItem
                        type="urgent"
                        html={{ __html: '<strong>Urgent requirement</strong> - complete by EOD' }}
                        />
                    </ul>
                </div>
            )}
        </div>
    );
};

Notifications.propTypes = {
    displayDrawer: propTypes.bool.isRequired,
};

export default Notifications;