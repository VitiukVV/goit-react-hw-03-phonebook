import React from 'react';
import PropTypes from 'prop-types';
import { ContactElement, DeleteBtn } from './ContactElem.style';

export const ContactElem = ({ id, name, number, DeleteContact }) => {
  return (
    <ContactElement>
      <p>
        {name}: {number}
      </p>
      <DeleteBtn onClick={() => DeleteContact(id)}>Delete</DeleteBtn>
    </ContactElement>
  );
};

ContactElem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  DeleteContact: PropTypes.func.isRequired,
};
