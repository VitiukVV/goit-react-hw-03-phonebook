import React from 'react';
import PropTypes from 'prop-types';
import { FilterInput, Label } from './Filter.style';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Find contacts by name
      <FilterInput type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
