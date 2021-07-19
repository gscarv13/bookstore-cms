import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <table>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      {books.map((book) => <Book key={book.ID} bookInfo={book} />)}
    </table>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

export default connect(mapStateToProps, null)(BookList);
