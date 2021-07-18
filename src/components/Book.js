import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;

  return (
    <tr>
      <th>{bookInfo.ID}</th>
      <tr>{bookInfo.title}</tr>
      <tr>{bookInfo.category}</tr>
    </tr>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Book;
