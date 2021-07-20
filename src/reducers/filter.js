import { CHANGE_FILTER } from '../actions/types';

const initialState = {
  filter: 'All',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default filterReducer;
