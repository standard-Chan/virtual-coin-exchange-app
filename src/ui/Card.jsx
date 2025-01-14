import PropTypes from "prop-types";
import Spacing from "./Spacing";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #a4d4ed;
  height: 100%;
  padding: 10px;
`;

const Card = ({ children }) => {
  return (
    <CardContainer>
      <Spacing>{children}</Spacing>
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
