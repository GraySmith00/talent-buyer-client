import { combineReducers } from 'redux';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  currentUser: userReducer
});

export default rootReducer;
