import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBookAction = (bookID) => ({
  type: REMOVE_BOOK,
  payload: bookID,
});

export const changeFilterAction = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});
