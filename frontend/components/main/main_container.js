import { connect } from 'react-redux';
import Main from './main';

const msp = state => {
  const ui = { leftsidebar: true };

  return {
    ui,
  };
};

const mdp = dispatch => {
  return {

  };
};

export default connect(msp, mdp)(Main);
