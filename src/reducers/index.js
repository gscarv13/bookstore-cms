import { combineReducers } from 'redux';
import bookReducer from './book';

export default combineReducers({
  booksObject: bookReducer,
});
