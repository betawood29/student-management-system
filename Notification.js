import React, { Component } from 'react';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isNotificationVisible: false,
    };
  }

  // Function to handle message input change
  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  // Function to show the notification
  showNotification = () => {
    if (this.state.message.trim() === '') {
      alert('Message cannot be empty');
    } else {
      this.setState({ isNotificationVisible: true });
    }
  };

  // Function to hide the notification
  hideNotification = () => {
    this.setState({ isNotificationVisible: false });
  };

  render() {
    const { isNotificationVisible, message } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter your news"
            value={message}
            onChange={this.handleMessageChange}
          />
          <button onClick={this.showNotification}>Update News</button>
        </div>

        {isNotificationVisible && (
          <div className="news-notification">
            <div className="notification-heading">News Updated</div>
            <div className="notification-body">{message}</div>
            <button className="close-button" onClick={this.hideNotification}>
              &times;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Notification;
