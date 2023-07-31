import React from "react";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import propTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItemShape from "./NotificationItemShape";

function Notifications({ displayDrawer, listNotifications }) {
    return (
      <React.Fragment>
        {displayDrawer ? (
          <div className="'flex-area'">
            <div className="menuItem">
              <p>Your notifications</p>
            </div>
            <div className="Notifications">
              <ul>
                {listNotifications && listNotifications.length > 0 ? (
                  listNotifications.map(({ id, html, type, value }) => (
                    <>
                      <NotificationItem key={id} type={type} value={value} html={html} />
                        <button>
                            <img src={closeIcon} alt="closeIcon" width="10px" />
                        </button>
                    </>
                  ))
                ) : (
                  <div className="">
                    <NotificationItem value="No new notification for now" />
                    <button
                      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img src={closeIcon} alt="closeIcon" width="10px" />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
  
Notifications.propTypes = {
    displayDrawer: propTypes.bool.isRequired,
    listNotifications: propTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

export default Notifications;