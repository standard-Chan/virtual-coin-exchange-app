import React from "react";
import PropTypes from "prop-types";

const TableRow = ({ children, baseline, isHeader }) => {
  return (
    <tr>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { baseline, isHeader })
      )}
    </tr>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  baseline: PropTypes.bool,
  isHeader: PropTypes.bool,
};
TableRow.defaultProps = {
  baseline: false,
  isHeader: false,
};

export default TableRow;
