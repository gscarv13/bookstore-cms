import { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import { createBookAction } from '../actions/index';

const categories = [
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
    const book = {
      ID: uuidv4(),
      title,
      category,
    };

    props.createBookAction(book);
  };

  return (
    <form>
      <div>
        Title:
        <input name="title" type="text" value={title} onChange={handleChange} />
      </div>
      <div>
        Select a Category:
        <select name="select" value={category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={uuidv4()} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </div>
    </form>
  );
};

BooksForm.propTypes = {
  createBookAction: PropTypes.func.isRequired,
};

export default connect(null, { createBookAction })(BooksForm);
