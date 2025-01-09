import PropTypes from 'prop-types';

const headingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Heading = ({children}) => {
  return (
    <h3>
      {children}
    </h3>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
Heading.defaultProps = {
  level: 1,
};


export default Heading;