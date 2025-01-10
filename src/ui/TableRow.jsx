import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const TableRow = ({ children, isHeader }) => {
  return (
    <tr>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHeader })
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
  isHeader: false,
};

export default TableRow;
