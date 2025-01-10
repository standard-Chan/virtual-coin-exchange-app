import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableHead = styled.thead`
  background-color: #007bff; /* 파란색 메인 색상 */
  color: #fff; /* 텍스트 색상 흰색 */
`;



const StyledTableCell = styled.th`
  flex: 1;
  padding: 10px;
  text-align: left;
  font-weight: bold;
  border-bottom: 2px solid #0056b3; /* 테두리 색상 */
`;

const TableHead = ({ children }) => {
  return (
    <StyledTableHead>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isHeader: true })
      )}
    </StyledTableHead>
  );
};

TableHead.propTypes = {
  children: PropTypes.node,
};

export default TableHead;