import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => {
    const newValue = e.target.value;
    dispatch(changeFilter(newValue));
  };

  const resetFilter = () => {
    dispatch(changeFilter(""));
  };

  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="searchBox">
        Find contacts by name
      </label>
      <input
        type="text"
        name="searchBox"
        value={filter}
        onChange={handleChange}
        className={css.input}
      />
      <button className={css.btn} onClick={resetFilter}>
        Reset
      </button>
    </div>
  );
};

export default SearchBox;
