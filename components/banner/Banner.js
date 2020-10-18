import PropTypes from "prop-types";
import { _Banner, _Content, _Overlay } from "./banner.styles";

function Banner({ children, backgroundImage }) {
  return (
    <_Banner backgroundImage={backgroundImage}>
      {/* Overlay gray */}
      <_Overlay />
      <_Content>{children}</_Content>
    </_Banner>
  );
}

Banner.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.string,
};

export default Banner;
