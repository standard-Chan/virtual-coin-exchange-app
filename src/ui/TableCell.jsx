import React from "react";
import PropTypes from "prop-types";

/*
  JSX에서는 <>안에 변수를 넣는것도 인지할 수 있다.
  value = h1;
  <value>를 하면 <h1>으로 인지된다.

*/

const TableCell = ({ align, baseline, children, isHeader }) => {
  const Tag = isHeader ? 'th' : 'td';
  return <Tag>{children}</Tag>;
};

TableCell.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  baseline: PropTypes.bool,
  children: PropTypes.node,
  isHeader: PropTypes.bool,
};

TableCell.defaultProps = {
  baseline: true,
  isHeader: false,
};

// export default withStyles(({ color, unit }) => ({
//   cell: {
//     paddingTop: unit * 4,
//     paddingBottom: unit * 4,
//     paddingRight: unit * 8,
//     paddingLeft: unit * 8,
//     backgroundColor: color.white,
//     textAlign: "left",
//   },
//   header: {
//     backgroundColor: color.primary,
//     color: color.white,
//   },
//   baseline: {
//     borderBottom: `1px solid ${color.border}`,
//   },
//   alignCenter: {
//     textAlign: "center",
//   },
//   alignRight: {
//     textAlign: "right",
//   },
// }))(TableCell);

export default TableCell;