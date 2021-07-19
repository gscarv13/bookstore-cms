import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './stylesheet/index.css';
import { v4 as uuidv4 } from 'uuid';
import App from './components/App';
import booksReducer from './reducers/book';

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

const store = createStore(
  booksReducer,
  initialState,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
