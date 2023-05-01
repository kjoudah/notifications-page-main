import { useState } from 'react';
import './Notification.scss';
function BaseNotification(props) {
  const [read, setRead] = useState(false);

  const NotificationReadIcon = () =>
    read ? <span className="notification-icon"></span> : <></>;

  const CommentedOnImage = () =>
    props.notification.commented_on_image && (
      <img
        className="commented-on-image"
        src={props.notification.commented_on_image.src}
        width="40px"
        height="40px"
      />
    );

  const PrivateMessage = () =>
    props.notification.private_message && (
      <blockquote className="private-message-content pd-sm">
        {props.notification.private_message.text}
      </blockquote>
    );

  return (
    <li key={props.notification.key} className="notification">
      <div className="flex-row gap-sm">
        <img src={props.notification.author.src} width="40px" height="40px" />
        <div className="notification-content flex-col gap-md">
          <div className="flex-col">
            <p>
              <a className="link notification-name">
                {props.notification.author.name}
              </a>
              <span className="notification-type-text">
                {props.notification.text}
              </span>
              <a className="notification-outcome-text link">
                {props.notification.action && props.notification.action.text}
              </a>
              <NotificationReadIcon />
            </p>

            <p className="notification-date">{props.notification.date}</p>
          </div>
          <PrivateMessage />
        </div>
        <CommentedOnImage />
      </div>
    </li>
  );
}

export default BaseNotification;
