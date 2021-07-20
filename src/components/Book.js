import PropTypes from 'prop-types';
import '../stylesheet/Book.css';

const displayFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '170px',
  marginTop: '15px',
};

const Book = (props) => {
  const { bookInfo, handleClick } = props;

  return (
    <div className="Book-Container">
      <div className="Book-Info">
        <p className="Book-Category">{bookInfo.category}</p>
        <h3 className="Book-Title">{bookInfo.title}</h3>
        <span className="Author">Author</span>
        <div style={displayFlex}>
          <button className="Button-info" type="button">Comments</button>
          <button className="Button-info Mid-Button-Info" id={bookInfo.ID} type="button" onClick={handleClick}>Remove</button>
          <button className="Button-info" type="button">Edit</button>
        </div>
      </div>
      <div>
        <div className="progress"> % </div>
        <div className="divider"> | </div>
        <div className="current-progress">
          <p>CURRENT CHAPTER</p>
          <p>Chapter goes here</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  bookInfo: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Book;
