import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectStatusFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filtersSlice';

export const Filter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    const value = event.target.value;
    dispatch(setStatusFilter(value));
  };

  return (
    <div className={css.filterDiv}>
      <label className={css.filterDiv__label}>
        Find contacts by name
        <input
          className={css.filterDiv__input}
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={handleFilterChange}
        />
      </label>
    </div>
  );
};
