import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectFilter);

  const handleSetNameFilter = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.searchBox}>
      <label className={s.searchLabel} htmlFor="search">
        Find contacts by name/number
        <input
          type="text"
          value={searchValue}
          onChange={handleSetNameFilter}
          className={s.searchInput}
        />
      </label>
    </div>
  );
};
export default SearchBox;
