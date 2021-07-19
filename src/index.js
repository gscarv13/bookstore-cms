import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import './stylesheet/index.css';
import App from './components/App';
import booksReducer from './reducers/book';

const randomID = () => Math.floor(Math.random() * 10);

const initialState = {
  books: [
    {
      ID: randomID(),
      title: 'House of Sticks',
      category: 'Biography',
    },
    {
      ID: randomID(),
      title: 'The Hidden Knife',
      category: 'Kids',
    },
    {
      ID: randomID(),
      title: 'Survive The Night',
      category: 'Horror',
    },
  ],
};

const store = createStore(
  booksReducer,
  initialState,
  compose(
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
