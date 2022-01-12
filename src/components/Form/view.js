const View = ({ isReady, searchInput, handleTextChange, handleSubmit }) => (
  <div data-testid="form">
    <input
      data-testid="searchInput"
      type="text"
      onChange={handleTextChange}
      value={searchInput}
    />
    <button
      data-testid="submitButton"
      type="submit"
      disabled={!isReady}
      onClick={handleSubmit}
    >
      Search
    </button>
  </div>
);

export default View;
