import { useEffect } from 'react';
import css from './ListContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from 'store/thunk';
import { selectFilteredContacts } from 'store/selectors';
import { deleteContacts } from 'services/contactsApi';

export function ListContact() {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addContactsThunk());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
