//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteItems } from '../../redux/items/items-actions';
import { getVisibleItems } from '../../redux/items/items-selectors';

import ContactListItem from '../ContactListItem/ContactListItem';

import { ListStyle } from './ContactList.styled';

const ContactList = () => {
  const visibleContact = useSelector(getVisibleItems);
  const dispatch = useDispatch();

  const onDeleteItems = id => dispatch(deleteItems(id));

  return (
    <ListStyle>
      {visibleContact.map(({ name, id, number }) => {
        return (
          <ContactListItem
            key={id}
            data={{ number, name, id }}
            onDeleteContact={() => onDeleteItems(id)}
          />
        );
      })}
    </ListStyle>
  );
};

export default ContactList;
