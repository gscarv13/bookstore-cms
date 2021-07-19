import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const booksReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        books: [
          ...state.books,
          action.payload,
        ],
      };
    case REMOVE_BOOK:
      return {
        books: state.filter((book) => book.ID !== action.payload.ID),
      };
    default:
      return state;
  }
};

export default booksReducer;
