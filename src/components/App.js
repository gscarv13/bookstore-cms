import BooksForm from './BooksForm';
import BookList from './BookList';
import '../stylesheet/index.css';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="Navbar">
      <div className="Navbar-left">
        <h1>Bookstore CMS</h1>
        <button type="button">BOOKS</button>
        <button type="button">CATEGORIES</button>
      </div>
      <div className="Navbar-right">
        <button type="button">
          <i className="fas fa-user" />
        </button>
      </div>
    </div>
    <div className="Main">
      <BookList />
      <BooksForm />
    </div>
  </div>
);

export default App;
