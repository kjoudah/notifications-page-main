import './NotificationsHeader.scss';

function NotificationsHeader(props) {
  return (
    <div className="flex-row gap-md space-between align-center">
      <div className="flex-row gap-sm align-center">
        <h1 className="title">Notifications</h1>
        <span className="notifications-count">{props.unreadCount}</span>
      </div>
      <button
        onClick={() => props.markAllReadClicked()}
        className="mark-read-button"
      >
        Mark all as read
      </button>
    </div>
  );
}

export default NotificationsHeader;
