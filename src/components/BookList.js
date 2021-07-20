import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import { removeBookAction, changeFilterAction } from '../actions';

const BookList = (props) => {
  const { books, filter } = props;

  const handleRemoveBook = (e) => {
    e.preventDefault();

    const bookID = {
      ID: e.target.id,
    };

    props.removeBookAction(bookID);
  };

  const filterBooks = (books, filterOption = filter) => (
    filterOption === 'All' ? books : books.filter((book) => book.category === filter)
  );

  const handleFilterChange = (e) => {
    e.preventDefault();
    const filter = {
      filter: e.target.value,
    };

    props.changeFilterAction(filter);
  };

  return (
    <>
      <CategoryFilter handleChange={handleFilterChange} />
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
          {filterBooks(books).map((book) => (
            <Book
              key={book.ID}
              bookInfo={book}
              handleClick={handleRemoveBook}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.objectOf(PropTypes.string).isRequired,
  removeBookAction: PropTypes.func.isRequired,
  changeFilterAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksObject.books,
  filter: state.filterObject.filter,
});

const mapDispatchToProps = { removeBookAction, changeFilterAction };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
