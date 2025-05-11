import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.filters.name);
  const handleSetNameFilter = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  return (
    <div className={s.wrapper}>
      <label className={s.label} htmlFor="search">
        Find contacts by name/number
        <input
          type="text"
          value={value}
          onChange={handleSetNameFilter}
          className={s.input}
        />
      </label>
    </div>
  );
};
export default SearchBox;
