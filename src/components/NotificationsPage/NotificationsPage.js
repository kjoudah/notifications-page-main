import { useState } from 'react';
import NotificationsHeader from './NotificationsHeader/NotificationsHeader';
import Notification from './Notification';
import './NotificationsPage.scss';
import { notificationsJson } from './NotificationData.js';

function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsJson);

  const handleNotificationClicked = (id) => {
    setNotifications((prev) => {
      return prev.map((notification) => {
        if (notification.id == id) {
          return { ...notification, unread: false };
        } else {
          return notification;
        }
      });
    });
  };
  return (
    <div className="notification-page pd-md grid place-center gap-md">
      <NotificationsHeader
        unreadCount={notifications.filter((notif) => notif.unread).length}
        markAllReadClicked={() => {
          setNotifications((prev) => {
            return prev.map((notification) => {
              return { ...notification, unread: false };
            });
            return prev;
          });
        }}
      />
      <ul className="flex-col gap-md">
        {notifications.map((notification) => {
          return (
            <Notification
              handleNotificationClicked={handleNotificationClicked}
              notification={{ ...notification }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default NotificationsPage;
