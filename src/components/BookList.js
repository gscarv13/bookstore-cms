import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import { removeBookAction } from '../actions';

const BookList = (props) => {
  const { books } = props;

  const handleClick = (e) => {
    e.preventDefault();

    const bookID = {
      ID: e.target.id,
    };

    props.removeBookAction(bookID);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.ID}>
            <Book key={book.ID} bookInfo={book} />
            <td><button type="button" id={book.ID} onClick={handleClick}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBookAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksObject.books,
});

export default connect(mapStateToProps, { removeBookAction })(BookList);
