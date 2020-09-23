import { combineReducers } from 'redux';


const reducers = ['messages', 'dialogs', 'user', 'attachments'];

export default combineReducers(
  reducers.reduce((initial, reducerName) => {
    initial[reducerName] = require(`./${reducerName}`).default;
    return initial;
  }, {})
);
