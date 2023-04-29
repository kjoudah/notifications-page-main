import BaseNotification from '../BaseNotification';

function CommentNotification(props) {
  return (
    <BaseNotification image={props.image}>
      <p>Hello World</p>
    </BaseNotification>
  );
}

export default CommentNotification;
