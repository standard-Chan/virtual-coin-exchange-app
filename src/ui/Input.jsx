import React from 'react';
import PropTypes from 'prop-types';

const Input = ({name, label, errorMessage, onChange}) => {
  return (
    <fieldset>
      <label
        htmlFor={`input_${name}`}
      >
        {errorMessage || label}
      </label>
      <input
        id={`input_${name}`}
        //ref={this.setRef}
        //type={type}
        onChange={onChange}
        //value={value}
      />
    </fieldset>
  );
}

Input.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};/*
export default withStyles(({ depth, unit, color, size, lineHeight }) => ({
  wrapper: {
    border: 0,
    padding: 0,
    position: 'relative',
  },
  label: {
    display: 'block',
    fontSize: size.xs,
    top: 2,
    left: unit * 2,
    cursor: 'pointer',
  },
  input: {
    marginTop: 2,
    fontSize: size.md,
    lineHeight: lineHeight.md,
    padding: unit * 1.5,
    border: 1,
    borderColor: color.primary,
    borderStyle: 'solid',
    borderRadius: 4,
    outline: 0,
    ':focus': {
      boxShadow: '0 0 0px 2px rgba(0, 0, 0, 0.3)',
    },
  },
  */

export default Input;