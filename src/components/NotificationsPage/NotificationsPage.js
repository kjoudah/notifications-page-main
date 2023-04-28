import NotificationsHeader from './NotificationsHeader/NotificationsHeader';
import NotificationsList from './NotificationsList/NotificationsList';

function NotificationsPage() {
  return (
    <div className="pd-md grid place-center gap-md">
      <NotificationsHeader />
      <NotificationsList />
    </div>
  );
}

export default NotificationsPage;
