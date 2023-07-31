import React from "react";
import { getLatestNotification } from "../utils/utils";
import "./Notifications.css";

export default function Notifications() {
    return (
        <div className="Notifications">
            <button style={{ float: "right" }} aria-label="Close" onClick={() => console.log('Close button has been clicked')}>
                <img src={require('../close-icon.png')} alt="close-icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}