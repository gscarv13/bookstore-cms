import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';
import CategoryFilter from './CategoryFilter';
import { removeBookAction, changeFilterAction } from '../actions';
import '../stylesheet/index.css';

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
      <nav className="Navbar">
        <div className="Navbar-left">
          <h1>Bookstore CMS</h1>
          <button type="button">BOOKS</button>
          <CategoryFilter handleChange={handleFilterChange} />
        </div>
        <div className="Navbar-right">
          <button type="button">
            <i className="fas fa-user" />
          </button>
        </div>
      </nav>
      <div className="Main">
        {filterBooks(books).map((book) => (
          <Book
            key={book.ID}
            bookInfo={book}
            handleClick={handleRemoveBook}
          />
        ))}
      </div>
    </>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBookAction: PropTypes.func.isRequired,
  changeFilterAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksObject.books,
  filter: state.filterObject.filter,
});

const mapDispatchToProps = { removeBookAction, changeFilterAction };

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
