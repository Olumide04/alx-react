import React, { Component } from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

class NotificationItem extends Component {
	render() {
	  const { type, value, html, markAsRead, id } = this.props;
	  return (
		<>
		  {type && value ? (
			<li onClick={() => markAsRead(id)} data-notification-type={type}>
			  {value}
			</li>
		  ) : null}
		  {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
		</>
	  );
	}
  }  

NotificationItem.propTypes = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
	markAsRead: PropTypes.func,
	id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: "default",
  };

export default NotificationItem;