import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableCell = styled.td`
  padding-left: ${({ paddingLeft }) => paddingLeft || '16px'};
  padding-right: ${({ paddingRight }) => paddingRight || '16px'};
  text-align: ${({ align }) => align || 'left'};
`;

const TableCell = ({ align, children, isHeader, paddingLeft, paddingRight }) => {
  const Tag = isHeader ? 'th' : StyledTableCell;
  return (
    <Tag align={align} paddingLeft={paddingLeft} paddingRight={paddingRight}>
      {children}
    </Tag>
  );
};

TableCell.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  baseline: PropTypes.bool,
  children: PropTypes.node,
  isHeader: PropTypes.bool,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
};

TableCell.defaultProps = {
  align: 'left',
  baseline: true,
  isHeader: false,
  paddingLeft: '16px',
  paddingRight: '16px',
};

export default TableCell;