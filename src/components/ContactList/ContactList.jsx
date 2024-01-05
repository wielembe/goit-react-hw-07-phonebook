import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';
import {
  selectError,
  selectFilterContacts,
  selectIsLoading,
} from '../../redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilterContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li key={contact.id} className={css.listItem}>
            <p>
              {contact.name}____{contact.phone}
            </p>
            <button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))
      ) : (
        <div>No contacts available</div>
      )}
      {isLoading && !error && <p>Updating...</p>}
    </ul>
  );
};
