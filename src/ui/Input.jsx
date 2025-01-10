import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${({ error }) => (error ? '#dc3545' : '#000')};
`;

const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ error }) => (error ? '#dc3545' : '#ced4da')};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ error }) => (error ? '#dc3545' : '#80bdff')};
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  margin-top: 8px;
  font-size: 14px;
`;

const Input = ({ name, value, label, errorMessage, onChange }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  return (
    <StyledFieldset>
      <StyledLabel htmlFor={`input_${name}`} error={!!errorMessage}>
        {label}
      </StyledLabel>
      <StyledInput
        id={`input_${name}`}
        name={name}
        value={value || ''}
        onChange={handleChange}
        error={!!errorMessage}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledFieldset>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  value: '',
  errorMessage: '',
  onChange: () => {},
};

export default Input;