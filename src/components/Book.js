import PropTypes from 'prop-types';
import '../stylesheet/Book.css';

const displayFlex = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '170px',
  marginTop: '15px',
};

const calcProgress = (percent, circ) => circ - (percent * circ) / 100;
const radius = (80 / 2) - (4 * 2);
const calcCircumference = (radius) => radius * 2 * Math.PI;
const currPercent = 50;
const currCircumference = calcCircumference(radius);

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
      <div className="Book-Right-Container">
        <div className="Progress-Container">
          <div className="Rectangle">
            <svg
              className="progress-ring"
              height="80"
              width="80"
            >
              <circle
                strokeWidth="4"
                fill="transparent"
                stroke="#e8e8e8"
                r={radius}
                cx="40"
                cy="40"
              />
              <circle
                className="progress-ring__circle"
                strokeWidth="5"
                strokeDasharray={`${currCircumference} ${currCircumference}`}
                strokeDashoffset={calcProgress(currPercent, currCircumference)}
                fill="transparent"
                stroke="#379cf6"
                r={radius}
                cx="40"
                cy="40"
              />
            </svg>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <p className="Percentage-Num">
              {currPercent}
              %
            </p>
            <p className="Completed">Completed</p>
          </div>
        </div>
        <div className="Divider"> </div>
        <div className="Current-Progress">
          <p className="Current-Chapter-Title">CURRENT CHAPTER</p>
          <p className="Current-Chapter">Chapter goes here</p>
          <button className="Button-Progress" type="button">UPDATE PROGRESS</button>
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
