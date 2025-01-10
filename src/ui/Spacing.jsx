import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const calculateMargin = ({ top, left, right, bottom, vertical, horizontal }) => {
  const marginTop = top !== undefined ? top : vertical !== undefined ? vertical : 0;
  const marginBottom = bottom !== undefined ? bottom : vertical !== undefined ? vertical : 0;
  const marginLeft = left !== undefined ? left : horizontal !== undefined ? horizontal : 0;
  const marginRight = right !== undefined ? right : horizontal !== undefined ? horizontal : 0;

  return `${marginTop}px ${marginRight}px ${marginBottom}px ${marginLeft}px`;
};

const StyledSpacing = styled.div`
  margin: ${calculateMargin};
`;

const Spacing = ({ children, top, left, right, bottom, vertical, horizontal }) => {
  return (
    <StyledSpacing top={top} left={left} right={right} bottom={bottom} vertical={vertical} horizontal={horizontal}>
      {children}
    </StyledSpacing>
  );
};

Spacing.propTypes = {
  children: PropTypes.node,
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

export default Spacing;