import { ContactElem } from 'components/contact-elem/ContactElem';
import React from 'react';
import PropTypes from 'prop-types';
import { ContactListStyle } from './ContactList.style';

export const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ContactListStyle>
      {contacts.map(({ id, name, number }) => (
        <ContactElem
          key={id}
          id={id}
          name={name}
          number={number}
          DeleteContact={onDeleteContacts}
        ></ContactElem>
      ))}
    </ContactListStyle>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};
