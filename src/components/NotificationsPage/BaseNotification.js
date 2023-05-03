import { useState } from 'react';
import './Notification.scss';
function BaseNotification(props) {
  const NotificationReadIcon = () =>
    props.notification.read ? (
      <span className="notification-icon"></span>
    ) : (
      <></>
    );

  const CommentedOnImage = () =>
    props.notification.commented_on_image && (
      <a
        className="commented-on-image"
        href={props.notification.commented_on_image.href}
      >
        <img
          src={props.notification.commented_on_image.src}
          width="40px"
          height="40px"
        />
      </a>
    );

  const PrivateMessage = () =>
    props.notification.private_message && (
      <blockquote className=" private-message-content pd-sm">
        <a className="link" href={props.notification.private_message.href}>
          {props.notification.private_message.text}
        </a>
      </blockquote>
    );

  return (
    <li
      onClick={() => props.handleNotificationClicked(props.notification.id)}
      key={props.notification.id}
      className={
        props.notification.unread ? 'notification unread' : 'notification'
      }
    >
      <div className="flex-row gap-sm">
        <img src={props.notification.author.src} width="40px" height="40px" />
        <div className="notification-content flex-col gap-md">
          <div className="flex-col">
            <p>
              <a className="notification-name">
                {props.notification.author.name}
              </a>
              <span className="notification-type-text">
                {props.notification.text}
              </span>
              <a
                href={
                  props.notification.action && props.notification.action.href
                }
                className="notification-outcome-text link"
              >
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
