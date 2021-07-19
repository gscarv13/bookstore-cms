import { v4 as uuidv4 } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = {
  books: [
    {
      ID: uuidv4(),
      title: 'House of Sticks',
      category: 'Biography',
    },
    {
      ID: uuidv4(),
      title: 'The Hidden Knife',
      category: 'Kids',
    },
    {
      ID: uuidv4(),
      title: 'Survive The Night',
      category: 'Horror',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
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
