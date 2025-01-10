import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const headingStyles = {
  h1: css`
    font-size: 32px;
    font-weight: bold;
  `,
  h2: css`
    font-size: 28px;
    font-weight: bold;
  `,
  h3: css`
    font-size: 24px;
    font-weight: bold;
  `,
  h4: css`
    font-size: 20px;
    font-weight: bold;
  `,
  h5: css`
    font-size: 16px;
    font-weight: bold;
  `,
  h6: css`
    font-size: 12px;
    font-weight: bold;
  `,
};

const StyledHeading = styled.h1`
  ${({ level }) => headingStyles[`h${level}`] || headingStyles.h1}
  color: ${({ color }) => color || '#000'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
`;

const Heading = ({ children, level, color, marginTop, marginBottom }) => {
  return (
    <StyledHeading as={`h${level}`} level={level} color={color} marginTop={marginTop} marginBottom={marginBottom}>
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.string,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
};

Heading.defaultProps = {
  level: 1,
  color: '#000',
  marginTop: '0',
  marginBottom: '0',
};

export default Heading;