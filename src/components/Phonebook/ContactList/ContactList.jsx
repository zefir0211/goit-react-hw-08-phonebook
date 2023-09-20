import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem } from 'redux/contacts/contactsSelectors';
import { deleteContact } from 'redux/contacts/requestAPI';
import { selectFilter } from 'redux/contacts/contactsSelectors';
import ContactListSCSS from './ContactList.module.scss';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItem);
  const filter = useSelector(selectFilter);
  const delContacts = event => {
    dispatch(deleteContact(event.target.name));
  };
  const contactFilter = () => {
    if (filter === '') {
      return false;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const filterOne = contactFilter();
  const list = filterOne ? filterOne : contacts;
  return (
    <ul className={ContactListSCSS.list}>
      {list.map(({ id, name, number }) => (
        <li key={id} className={ContactListSCSS.item}>
          <p className={ContactListSCSS.par}>
            {name}: {number}
          </p>
          <button
            className={ContactListSCSS.button}
            type="button"
            name={id}
            onClick={delContacts}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;