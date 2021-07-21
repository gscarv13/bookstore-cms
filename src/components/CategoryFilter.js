import PropTypes from 'prop-types';
import { categories } from './BooksForm';

const style = {
  padding: '5px',
  border: '1px solid #e8e8e8',
  backgroundColor: '#fff',
};

const CategoryFilter = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <select style={style} id="filter" onChange={handleChange}>
        <option value="All">All</option>
        {categories.map((op, i) => <option key={i.toString()} value={op}>{op}</option>)}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
