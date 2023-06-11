import css from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contactsSlice';
import { getFilteredContacts } from 'store/selectors';

export function ListContact() {
  const filteredContacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
