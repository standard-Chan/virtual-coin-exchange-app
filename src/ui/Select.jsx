import PropTypes from 'prop-types';
import Option from './Option';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// 편의상 import 2번하기 싫어서 한번에 Select import 하면서 Option을 넣기 위해서 적음
export { Option };

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

const StyledSelectContainer = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  width: 100%;
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

const Select = ({ children, disabled, errorMessage, label, value, name, autoFocus, onChange }) => {
  const [focus, setFocus] = useState(false);
  const selectRef = useRef(null);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  useEffect(() => {
    if (autoFocus && selectRef.current) {
      selectRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <StyledFieldset>
      <StyledLabel htmlFor={`select_${name}`} error={!!errorMessage}>
        {label}
      </StyledLabel>
      <StyledSelectContainer>
        <StyledSelect
          id={`select_${name}`}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          error={!!errorMessage}
          ref={selectRef}
        >
          {children}
        </StyledSelect>
      </StyledSelectContainer>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </StyledFieldset>
  );
};

Select.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  disabled: false,
  errorMessage: '',
  value: '',
  autoFocus: false,
  onChange: () => {},
};

export default Select;