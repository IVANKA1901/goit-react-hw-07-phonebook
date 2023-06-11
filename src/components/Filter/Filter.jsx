import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { getFilter } from 'store/selectors';
import { setFilter } from 'store/contactsSlice';

export function Filter() {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onInputChange = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={onInputChange}
      />
    </label>
  );
}
