import BooksForm from './BooksForm';
import BookList from './BookList';
import '../stylesheet/index.css';

const App = () => (
  <div className="Bookstore-CMS">
    <BookList />
    <BooksForm />
  </div>
);

export default App;
