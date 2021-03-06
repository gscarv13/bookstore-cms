import { combineReducers } from 'redux';
import bookReducer from './book';
import filterReducer from './filter';

export default combineReducers({
  booksObject: bookReducer,
  filterObject: filterReducer,
});
