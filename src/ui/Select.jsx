import PropTypes from 'prop-types';
import Option from './Option';
import React, { useEffect, useRef, useState } from 'react';


// 편의상 import 2번하기 싫어서 한번에 Select import 하면서 Option을 넣기 위해서 적음
export { Option };

const Select = ({ children, disabled, errorMessage, label, value, name, autoFocus, onChange }) => {
  const [focus, setFocus] = useState(false);
  const selectRef = useRef(null);

  const handleFocus = () => {
    setFocus({ focused: true });
  };
  const handleBlur = () => {
    setFocus({ focused: false });
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(name, e.target.value);
    }
  };

  useEffect(() => {
    if (autoFocus){
      selectRef.focus();
    }
  }, [selectRef]);

  return (
    <fieldset
      style={{
        border: 0,
        padding: 0,
        position: "relative",
      }}
    >
      <label
        style={{
          display: "block",
          top: 2,
          left: 4,
          cursor: "pointer",
        }}
        htmlFor={`input_${name}`}
      >
        {errorMessage || label}
      </label>
      <div>
        <select
          disabled={disabled}
          id={`input_${name}`}
          ref={selectRef}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
        >
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { disabled })
          )}
        </select>
      </div>
    </fieldset>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorMessage: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  autoFocus: PropTypes.bool,
};

Select.defaultProps = {
  onChange: () => {},
  autoFocus: false,
};

export default Select;
