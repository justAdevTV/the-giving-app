import PropTypes from "prop-types";
import { _Button } from "./button.styles";

function Button({ children, inverted, large }) {
  return (
    <_Button inverted={inverted} large={large}>
      {children}
    </_Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool,
  large: PropTypes.bool,
};

export default Button;
