import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions/index';
import '../stylesheet/BookForm.css';

export const categories = [
  'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-fi',
];

const BooksForm = (props) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleChange = (e) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else if (e.target.name === 'select') {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') return;

    const book = {
      ID: uuidv4(),
      title,
      category,
    };

    props.createBookAction(book);
    setTitle('');
  };

  return (
    <>
      <div style={{ borderTop: '1px solid #e8e8e8' }}>
        <h3>ADD NEW BOOK</h3>
        <div className="Book-Form">
          <div>
            <input className="Input" placeholder="Book Title" name="title" type="text" value={title} onChange={handleChange} />
          </div>
          <div>
            <select className="Select" name="select" value={category} onChange={handleChange}>
              {categories.map((category) => (
                <option key={uuidv4()} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <input className="Button" type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};

export default connect(null, { createBookAction })(BooksForm);
