import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html}>
            {value}
        </li>
    );
};

NotificationItem.propTypes = {
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
};

export default NotificationItem;