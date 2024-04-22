import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter, onReset }) => {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="searchBox">
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchBox"
        value={value}
        onChange={(evt) => onFilter(evt.target.value)}
        className={css.input}
      />
      <button className={css.btn} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default SearchBox;
