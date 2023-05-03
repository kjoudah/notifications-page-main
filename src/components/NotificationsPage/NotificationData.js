import markWebberImage from './../../assets/images/avatar-mark-webber.webp';
import angelaGrayImage from './../../assets/images/avatar-angela-gray.webp';
import jacobThompsonImage from './../../assets/images/avatar-jacob-thompson.webp';
import rizkyHassanudinImage from './../../assets/images/avatar-rizky-hasanuddin.webp';
import kimberlySmithImage from './../../assets/images/avatar-kimberly-smith.webp';
import nathanPetersonImage from './../../assets/images/avatar-nathan-peterson.webp';
import annaKimImage from './../../assets/images/avatar-anna-kim.webp';
import commentedOnImage from './../../assets/images/image-chess.webp';

export const notificationsJson = [
  {
    id: 1,
    author: {
      name: 'Mark Webber',
      href: '#',
      src: markWebberImage,
    },
    text: 'reacted to your recent post',
    action: {
      text: 'My first tournament today!',
      href: '',
    },
    date: '1m ago',
    unread: true,
  },
  {
    id: 2,
    author: {
      name: 'Angela Gray',
      href: '#',
      src: angelaGrayImage,
    },
    text: 'followed you',
    date: '5m ago',
    unread: true,
  },
  {
    id: 3,
    author: {
      name: 'Jacob Thompson',
      href: '#',
      src: jacobThompsonImage,
    },
    text: 'has joined your group',
    action: {
      text: 'Chess Club',
      href: '#',
    },
    date: '5 days ago',
    unread: true,
  },
  {
    id: 4,
    author: {
      name: 'Rizky Hasanuddin',
      href: '#',
      src: rizkyHassanudinImage,
    },
    text: 'sent you a private message',
    private_message: {
      text: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      href: '#',
    },
    date: '5 days ago',
    unread: false,
  },
  {
    id: 5,
    author: {
      name: 'Kimberly Smith',
      href: '#',
      src: kimberlySmithImage,
    },
    text: 'commented on your picture',
    commented_on_image: {
      src: commentedOnImage,
      href: '#',
    },
    date: '1 week ago',
    unread: false,
  },
  {
    id: 6,
    author: {
      name: 'Nathan Peterson',
      href: '#',
      src: nathanPetersonImage,
    },
    text: 'reacted to your recent post',
    action: {
      text: '5 end-game strategies to increase your win rate',
      href: '#',
    },
    date: '2 week ago',
    unread: false,
  },
  {
    id: 7,
    author: {
      name: 'Anna Kim',
      href: '#',
      src: annaKimImage,
    },
    text: 'left the group',
    action: {
      text: 'Chess Club',
      href: '#',
    },
    date: '2 week ago',
    unread: false,
  },
];
