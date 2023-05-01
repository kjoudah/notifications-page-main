import { useState } from 'react';
import NotificationsHeader from './NotificationsHeader/NotificationsHeader';
import NotificationsList from './NotificationsList/NotificationsList';
import BaseNotification from './NotificationsList/Notification/BaseNotification';
import './NotificationsPage.scss';
import { notificationsJson } from './NotificationData.js';

function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsJson);

  return (
    <div className="notification-page pd-md grid place-center gap-md">
      <NotificationsHeader />
      <ul>
        {notifications.map((notification) => {
          return <BaseNotification notification={{ ...notification }} />;
        })}
      </ul>
    </div>
  );
}

export default NotificationsPage;
