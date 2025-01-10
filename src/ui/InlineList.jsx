import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InlineListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${({ verticalAlign }) => verticalAlign};
  justify-content: ${({ align }) => align};
  gap: ${({ spacingBetween }) => spacingBetween}px;
`;

const InlineList = ({ align, children, spacingBetween, verticalAlign }) => {
  return (
    <InlineListContainer align={align} spacingBetween={spacingBetween} verticalAlign={verticalAlign}>
      {React.Children.map(children, child => (
        <div>{child}</div>
      ))}
    </InlineListContainer>
  );
};

InlineList.propTypes = {
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  children: PropTypes.node.isRequired,
  spacingBetween: PropTypes.number,
  verticalAlign: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'baseline', 'stretch']),
};

InlineList.defaultProps = {
  align: 'flex-start',
  spacingBetween: 0,
  verticalAlign: 'center',
};

export default InlineList;