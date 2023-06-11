import React from 'react';

import { ListContact } from './ListContact/ListContact';
import { FormContacts } from './FormContact/FormContact';
import { Container } from './Container/Container';

import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from '../store/selectors';

export function App() {
  const items = useSelector(getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <FormContacts />
      <h1>Contacts</h1>
      {items.length > 1 && <Filter />}
      {items.length > 0 ? (
        <ListContact />
      ) : (
        <p>There is no contacts left. Please add some.</p>
      )}
    </Container>
  );
}
