import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const Option = ({ value, label, disabled }) => {
  return (
    <option value={value} disabled={disabled}>
      {label || value}
    </option>
  );
};

Option.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Option;
