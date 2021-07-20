import PropTypes from 'prop-types';
import { categories } from './BooksForm';

const CategoryFilter = (props) => {
  const { handleChange } = props;
  return (
    <div>
      <select id="filter" onChange={handleChange}>
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
