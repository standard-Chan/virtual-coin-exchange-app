import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    font-size: 12px;
  `,
  medium: css`
    font-size: 16px;
  `,
  large: css`
    font-size: 20px;
  `,
  xlarge: css`
    font-size: 24px;
  `,
};

const weights = {
  normal: css`
    font-weight: 400;
  `,
  bold: css`
    font-weight: 700;
  `,
};

const StyledText = styled.span`
  color: ${({ color }) => color || '#000'};
  ${({ size }) => sizes[size] || sizes.medium}
  ${({ weight }) => weights[weight] || weights.normal}
`;

const Text = ({ children, size, color, weight }) => {
  return (
    <StyledText size={size} color={color} weight={weight}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  color: PropTypes.string,
  weight: PropTypes.oneOf(['normal', 'bold']),
};

Text.defaultProps = {
  size: 'medium',
  color: '#000',
  weight: 'normal',
};

export default Text;