import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const errorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = [];

  switch (action.type) {
    case (RECEIVE_SESSION_ERRORS):
      const errors = action.errors.responseJSON;
      return newState.concat(errors);

    case (RECEIVE_CURRENT_USER):
      return newState;

    default:
      return newState;

  }

};

export default errorsReducer;

// ["Incorrect username or password"],