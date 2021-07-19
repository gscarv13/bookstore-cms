import PropTypes from 'prop-types';

const Book = (props) => {
  const { bookInfo } = props;

  return (
    <>
      <td>{bookInfo.ID}</td>
      <td>{bookInfo.title}</td>
      <td>{bookInfo.category}</td>
    </>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Book;
