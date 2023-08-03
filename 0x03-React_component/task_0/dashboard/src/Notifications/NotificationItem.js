import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
	return (
		<React.Fragment>
			{type && value ? <li data-notification-type={type}>{value}</li> : null}
			{html ? (
				<li data-urgent dangerouslySetInnerHTML={{ __html: html }}></li>
			) : null}
		</React.Fragment>
	);
};


NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

NotificationItem.defaultProps = {
    type: "default",
  };

export default NotificationItem;