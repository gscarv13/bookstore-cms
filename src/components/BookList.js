import { connect } from 'react-redux';
import Book from './Book';

const tempBook = {
  ID: 1,
  title: 'Narnia',
  category: 'Fantasy',
};

const BookList = () => (
  <table>
    <tr>
      <th>Book ID</th>
      <th>Title</th>
      <th>Category</th>
    </tr>
    <tr>
      <Book bookInfo={tempBook} />
    </tr>
  </table>
);

export default connect(null, null)(BookList);
