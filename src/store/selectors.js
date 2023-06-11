// export const getContacts = state => state.contacts.contacts.items;
// export const getFilter = state => state.contacts.contacts.filter;

// export const getFilteredContacts = state => {
//   const { items, filter } = state.contacts.contacts;
//   console.log(getFilteredContacts);
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(filter.toLowerCase().trim())
//   );
// };

export const selectFilter = state => state.contacts.filter;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = state => {
  const filter = selectFilter(state);

  const contact = selectContacts(state.contacts);
  console.log(contact);

  return contact.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase().trim())
  );
};
