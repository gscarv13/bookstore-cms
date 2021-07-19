const categories = [
  'Action', 'Biography', 'History',
  'Horror', 'Kids', 'Learning', 'Sci-fi',
];

const BooksForm = () => (
  <form>
    <div>
      Title:
      <input type="text" />
    </div>
    <div>
      Select a Category:
      <select>
        {categories.map((category) => (
          <option key={category.id} value={category}>{category}</option>
        ))}
      </select>
    </div>
    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
);

export default BooksForm;
