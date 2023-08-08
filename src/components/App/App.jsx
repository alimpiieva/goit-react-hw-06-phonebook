import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';
import { addContact, deleteContact, setFilter } from '../../redux/contactsSlice';

import { Container } from './App.styled';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const addNewContact = (name, number) => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${existingContact.name} already added to contact list`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    dispatch(addContact(newContact));
  };

  const deleteContactHandler = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <ContactForm addContact={addNewContact} />

      <h2>Contacts:</h2>
      <ContactsFilter
        filter={filter}
        onFilterChange={handleFilterChange}
      />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
    </Container>
  );
};

export default App;