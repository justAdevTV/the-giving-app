import PropTypes from "prop-types";
import { _Card } from "./card.styles";

function Card({ children }) {
  return <_Card>{children}</_Card>;
}

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
