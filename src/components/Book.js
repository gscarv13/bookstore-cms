import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;

  return (
    <tr>
      <td>{bookInfo.ID}</td>
      <td>{bookInfo.title}</td>
      <td>{bookInfo.category}</td>
    </tr>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Book;
