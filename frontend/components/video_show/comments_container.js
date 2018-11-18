import { connect } from 'react-redux';
import Comments from './comments';

const msp = (state, ownProps) => {
  const videoId = ownProps.videoId;
  const video = state.entities.videos[videoId];
  const currentUser = state.entities.users[state.session.id];

  return {
    video,
    currentUser,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(Comments);
