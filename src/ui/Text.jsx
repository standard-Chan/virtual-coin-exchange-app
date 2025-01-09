import PropTypes from 'prop-types';

const Text = ({children,}) => {
    return (
      <span>
        {children}
      </span>
    );
  }

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;