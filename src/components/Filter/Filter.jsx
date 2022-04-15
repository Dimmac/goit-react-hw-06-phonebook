import { nanoid } from 'nanoid';
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/items/items-selectors';
import { changeFilter } from '../../redux/items/items-actions';

import { LabelFilterStyle, InputFilterStyle } from './Filter.styled';

const generateId = nanoid();

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <LabelFilterStyle htmlFor={generateId}>
      Find contacts by name
      <InputFilterStyle
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        id={generateId}
      />
    </LabelFilterStyle>
  );
};

export default Filter;

/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */
