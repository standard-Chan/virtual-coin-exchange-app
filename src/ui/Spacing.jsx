import PropTypes from "prop-types";

const Spacing = ({children}) => {

  return <div>{children}</div>;
};

export const propTypes = {
  top: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  bottom: PropTypes.number,
  vertical: PropTypes.number,
  horizontal: PropTypes.number,
};

export default Spacing;
