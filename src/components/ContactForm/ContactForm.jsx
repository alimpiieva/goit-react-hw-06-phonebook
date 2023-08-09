import React, { useState } from 'react';
import { LabelForm, Label, InputField, SubmitButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, selectContacts } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      alert('Please provide both name and number.');
      return;
    }

    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${existingContact.name} already added to contact list`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name: name, number: number }));
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <LabelForm onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name">Name</Label>
        <InputField
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад, Адріан, Якоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
          required
          value={name}
          onChange={handleChange}
        />
      </div>
      <div>
        <Label htmlFor="number">Number</Label>
        <InputField
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону повинен містити лише цифри та може включати пробіли, тире, дужки та може починатися з +"
          required
          value={number}
          onChange={handleChange}
        />
      </div>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </LabelForm>
  );
};

export default ContactForm;
