import './NotificationsHeader.scss';

function NotificationsHeader() {
  return (
    <div className="flex-row gap-md space-between align-center">
      <div className="flex-row gap-sm align-center">
        <h1 className="title">Notifications</h1>
        <span className="notifications-count">3</span>
      </div>
      <button className="mark-read-button">Mark all as read</button>
    </div>
  );
}

export default NotificationsHeader;
