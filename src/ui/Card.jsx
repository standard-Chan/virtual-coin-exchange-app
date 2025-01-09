import PropTypes from 'prop-types';
import Spacing from './Spacing';

const Card = ({children}) => {
  return (
    <div style={{
      borderRadius:'10px',
      backgroundColor:'#b5d0d6',
      border:'solid 2px #a3a3a3',
      width:'300px'
    }}>
      <Spacing>
        {children}
      </Spacing>
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;