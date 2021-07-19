import { CREATE_BOOK, REMOVE_BOOK } from './types';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBookAction = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});
