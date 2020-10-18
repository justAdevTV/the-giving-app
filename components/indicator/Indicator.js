import PropTypes from "prop-types";
import { _Indicator } from "./indicator.styles";

function Indicator({ onClick }) {
  // TODO: Change later
  return (
    <_Indicator onClick={() => onClick()}>
      <img src="/icons/indicator.svg" alt="downArrow" />
    </_Indicator>
  );
}

Indicator.defaultProps = {
  onClick: () => {},
};

Indicator.propTypes = {
  onClick: PropTypes.func,
};

export default Indicator;
