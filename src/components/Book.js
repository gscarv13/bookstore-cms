import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo, handleClick } = props;

  return (
    <tr>
      <td>{bookInfo.ID}</td>
      <td>{bookInfo.title}</td>
      <td>{bookInfo.category}</td>
      <td><button id={bookInfo.ID} type="button" onClick={handleClick}>Delete Book</button></td>
    </tr>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
