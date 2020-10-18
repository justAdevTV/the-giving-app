import PropTypes from "prop-types";
import { _Button } from "./button.styles";

function Button({ children, inverted, large, onClick }) {
  return (
    <_Button inverted={inverted} large={large} onClick={onClick}>
      {children}
    </_Button>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  inverted: PropTypes.bool,
  large: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
