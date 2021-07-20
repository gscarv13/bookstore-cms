import BooksForm from './BooksForm';
import BookList from './BookList';
import '../stylesheet/index.css';

const App = () => (
  <div className="Bookstore-CMS">
    <div className="Main">
      <BookList />
      <BooksForm />
    </div>
  </div>
);

export default App;
