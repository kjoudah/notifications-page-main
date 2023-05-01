import CommentNotification from './Notification/CommentNotification/CommentNotification';
import FollowNotification from './Notification/FollowNotification/FollowNotification';
import GroupNotification from './Notification/GroupNotification/GroupNotification';
import MessageNotification from './Notification/MessageNotification/MessageNotification';
import ReactionNotification from './Notification/ReactionNotification/ReactionNotification';

import markWebberImage from './../../../assets/images/avatar-mark-webber.webp';
import angelaGrayImage from './../../../assets/images/avatar-angela-gray.webp';
import jacobThompsonImage from './../../../assets/images/avatar-jacob-thompson.webp';
import rizkyHassanudinImage from './../../../assets/images/avatar-rizky-hasanuddin.webp';
import kimberlySmithImage from './../../../assets/images/avatar-kimberly-smith.webp';
import nathanPetersonImage from './../../../assets/images/avatar-nathan-peterson.webp';
import annaKimImage from './../../../assets/images/avatar-anna-kim.webp';
import commentedOnImage from './../../../assets/images/image-chess.webp';
import BaseNotification from './Notification/BaseNotification';
import { useState } from 'react';

function NotificationsList(props) {}

// <BaseNotification
//   key={notification.id}
//   author={notification.author}
//   text={notification.text}
//   action={notification.action}
//   date={notification.date}
//   private_message={notification.private_message}
//   commented_on_image={notification.commented_on_image}
// />;

// <ul>
//   <BaseNotification
//     notificationHandler={props.notificationHandler}
//     markAllAsRead = {props.markAllAsRead}
//     notification_name="Mark Webber"
//     notification_type_text="reacted to your recent post"
//     notification_outcome_text="My first tournament today!"
//     notification_date="1m ago"
//     image={markWebberImage}
//   />
//   <BaseNotification
//     notification_name="Angela Gray"
//     notification_type_text="followed you"
//     notification_date="5m ago"
//     image={angelaGrayImage}
//   />

//   <BaseNotification
//     notification_name="Jacob Thompson"
//     notification_type_text="has joined your group"
//     notification_outcome_text="Chess Club"
//     notification_date="1 day ago"
//     image={jacobThompsonImage}
//   />

//   <BaseNotification
//     notification_name="Rizky Hasanuddin"
//     notification_type_text="sent you a private message"
//     private_message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
//     notification_date=" 5 days ago"
//     image={rizkyHassanudinImage}
//   />

//   <BaseNotification
//     notification_name="Kimberly Smith"
//     notification_type_text="commented on your picture"
//     commentedOnImage={commentedOnImage}
//     notification_date=" 1 week ago"
//     image={kimberlySmithImage}
//   />

//   <BaseNotification
//     notification_name="Nathan Peterson"
//     notification_type_text="reacted to your recent post"
//     notification_outcome_text="5 end-game strategies to increase your win rate"
//     notification_date="2 weeks ago"
//     image={nathanPetersonImage}
//   />

//   <BaseNotification
//     notification_name="Anna Kim"
//     notification_type_text="left the group"
//     notification_outcome_text="Chess Club"
//     notification_date="2 weeks ago"
//     image={annaKimImage}
//   />
// </ul>

export default NotificationsList;
