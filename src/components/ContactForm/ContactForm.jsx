import React, { useState } from 'react';
import { LabelForm, Label, InputField, SubmitButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
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

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;