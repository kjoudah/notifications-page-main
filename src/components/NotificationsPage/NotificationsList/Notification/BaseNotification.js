import { useState } from 'react';
import './Notification.scss';
function BaseNotification(props) {
  const [read, setRead] = useState(false);

  const NotificationReadIcon = () =>
    read ? <span className="notification-icon"></span> : <></>;

  const CommentedOnImage = () =>
    false ? (
      <img src={props.commentedOnImage} width="40px" height="40px" />
    ) : (
      <></>
    );

  const PrivateMessage = () =>
    false ? (
      <blockquote className="private-message-content pd-sm">
        Hello, thanks for setting up the Chess Club. I've been a member for a
        few weeks now and I'm already having lots of fun and improving my game.
      </blockquote>
    ) : (
      <></>
    );

  return (
    <li className="notification pd-sm">
      <div className="flex-row gap-sm">
        <img src={props.image} width="40px" height="40px" />
        <div className="notification-content flex-col gap-md">
          <div className="flex-col">
            <div className="flex-row gap-sm">
              <a href="#">Mark Webber</a>
              <p>reacted to your recent post My first tournament today!</p>
              <NotificationReadIcon />
            </div>
            <p className="notification-date">1m ago</p>
          </div>
          <PrivateMessage />
        </div>
        <CommentedOnImage />
      </div>
    </li>
  );
}

{
  {
  }
}

export default BaseNotification;
