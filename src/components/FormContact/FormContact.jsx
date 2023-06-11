// import PropTypes from 'prop-types';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './FormContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactsSlice';
import { getContacts } from 'store/selectors';

export function FormContacts() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [setId] = useState(nanoid());

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const uniqueName = newName => {
    const searchUnique = newName.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === searchUnique)) {
      Notify.failure(`"${newName}" is already in contacts`);
      return false;
    }
    return true;
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (uniqueName(name)) {
      dispatch(
        addContact({
          name: name,
          number: number,
          id: nanoid(),
        })
      );
    }
    setName('');
    setNumber('');
    setId(nanoid());
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          placeholder="Please enter your name"
          className={css.input}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          placeholder="Please enter valid number"
          className={css.input}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
}

// FormContacts.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
