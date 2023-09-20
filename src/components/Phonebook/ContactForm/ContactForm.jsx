import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { selectItem } from 'redux/contacts/contactsSelectors';
import { addContact } from 'redux/contacts/requestAPI';
import ContactFormSCSS from './ContactForm.module.scss';

const BASE_STATE = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [{ name, number }, setState] = useState(BASE_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(selectItem);

  function onChange(eve) {
    const { name, value } = eve.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = event => {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };
    if (contacts.some(x => x.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already is contacts`);
      return;
    }
    dispatch(addContact(newContact));
    setState({ ...BASE_STATE });
  };

  return (
    <form onSubmit={onSubmit} className={ContactFormSCSS.form}>
      <label htmlFor="name" className={ContactFormSCSS.label}>
        <p className={ContactFormSCSS.paragraph}>Name</p>
        <input
          className={ContactFormSCSS.input}
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Rosie Simpson"
        />
      </label>

      <label htmlFor="number" className={ContactFormSCSS.label}>
        <p className={ContactFormSCSS.paragraph}>Number</p>
        <input
          className={ContactFormSCSS.input}
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="645-17-79"
        />
      </label>

      <button className={ContactFormSCSS.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;