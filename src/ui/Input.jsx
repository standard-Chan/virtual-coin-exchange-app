import React from "react";
import PropTypes from "prop-types";

const Input = ({ name, value, label, errorMessage, onChange }) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };
  return (
    <fieldset>
      <label htmlFor={`input_${name}`}>{errorMessage || label}</label>
      <input
        id={`input_${name}`}
        //ref={this.setRef}
        //type={type}
        onChange={handleChange}
        value={value || ''}
      />
    </fieldset>
  );
};

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

Input.defaultProps = {
  value: '',
  errorMessage: '',
}

export default Input;