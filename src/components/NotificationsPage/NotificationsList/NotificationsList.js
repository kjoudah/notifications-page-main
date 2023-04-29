import CommentNotification from './Notification/CommentNotification/CommentNotification';
import FollowNotification from './Notification/FollowNotification/FollowNotification';
import GroupNotification from './Notification/GroupNotification/GroupNotification';
import MessageNotification from './Notification/MessageNotification/MessageNotification';
import ReactionNotification from './Notification/ReactionNotification/ReactionNotification';

import markWebberImage from './../../../assets/images/avatar-mark-webber.webp';
import BaseNotification from './Notification/BaseNotification';

function NotificationsList() {
  return (
    // <>

    //   Mark Webber reacted to your recent post My first tournament today! 1m ago
    //   Angela Gray followed you 5m ago Jacob Thompson has joined your group Chess
    //   Club 1 day ago Rizky Hasanuddin sent you a private message 5 days ago
    //   Hello, thanks for setting up the Chess Club. I've been a member for a few
    //   weeks now and I'm already having lots of fun and improving my game.
    //   Kimberly Smith commented on your picture 1 week ago Nathan Peterson
    //   reacted to your recent post 5 end-game strategies to increase your win
    //   rate 2 weeks ago Anna Kim left the group Chess Club 2 weeks ago
    // </>
    <ul>
      <BaseNotification image={markWebberImage} />
      {/* <ReactionNotification image={markWebberImage} />
      <FollowNotification image={markWebberImage} />
      <GroupNotification image={markWebberImage} />
      <MessageNotification image={markWebberImage} />
      <CommentNotification image={markWebberImage} />
      <ReactionNotification image={markWebberImage} />
      <GroupNotification image={markWebberImage} /> */}
    </ul>
  );
}

export default NotificationsList;
