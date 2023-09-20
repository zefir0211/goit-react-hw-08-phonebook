import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from '../../../redux/contacts/filterSlise';
import { selectFilter } from '../../../redux/contacts/contactsSelectors';
import FilterSCSS from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChange = event => {
    dispatch(filterValue(event.target.value.toLowerCase()));
  };
  return (
    <label htmlFor="filter" className={FilterSCSS.label}>
      {/* <p className={FilterSCSS.par}>Find contacts by name</p> */}
      <input
        className={FilterSCSS.input}
        onChange={onChange}
        type="filter"
        name="filter"
        value={filter}
        placeholder="Find contacts by name"
      />
    </label>
  );
};