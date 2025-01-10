import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const sizes = {
  small: css`
    padding: 5px 10px;
    font-size: 12px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 16px;
  `,
  large: css`
    padding: 15px 30px;
    font-size: 20px;
  `,
};

const StyledButton = styled.button`
  display: inline-block;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  ${({ size }) => sizes[size] || sizes.medium}

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const Button = ({ children, disabled, type, onPress, size }) => {
  return (
    <StyledButton disabled={disabled} onClick={onPress} type={type} size={size}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  disabled: false,
  type: 'button',
  onPress: () => {},
  size: 'medium',
};

export default Button;