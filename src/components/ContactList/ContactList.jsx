import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactsList, ContactItem, DeleteButton } from './ContactList.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { selectVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsList>
      {contacts.map(contact => (
        <ContactItem key={contact.id}>
          <span>{contact.name}: {contact.number}</span>
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>Delete</DeleteButton>
        </ContactItem>
      ))}
    </ContactsList>
  );
};

export default ContactList;
