import PropTypes from "prop-types";

const Button = ({
  children,
  disabled,
  type,
  onPress,
}) => {
  return (
    <button
      style={{
        border:'solid 1px black',
        backgroundColor:'#a2a2a2',
        cursor: "pointer",
      }}
      disabled={disabled}
      onClick={onPress}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  xsmall: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  xlarge: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  type: PropTypes.string,
  onPress: PropTypes.func,
};
Button.defaultProps = {
  onPress: () => {},
  xsmall: false,
  small: false,
  large: false,
  xlarge: false,
  secondary: false,
  primary: false,
};


export default Button;