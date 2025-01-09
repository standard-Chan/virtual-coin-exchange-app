import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ children}) => {
  return (
    <table style={{
      borderCollapse: 'collapse',
      width: '100%',
    }}>
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Table;