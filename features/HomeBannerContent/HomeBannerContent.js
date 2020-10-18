import PropTypes from "prop-types";
import {
  _HomeBannerContent,
  _Text,
  _Buttons,
} from "./homeBannerContent.styles";
import { Button, Indicator } from "../../components";

function HomeBannerContent({ onRedirectClick, onScrollDownClick }) {
  return (
    <_HomeBannerContent>
      <_Text>
        <span>Welcome to The Giving App,</span>
        <span>A good social network.</span>
      </_Text>
      <_Buttons>
        <Button onClick={() => onRedirectClick()}>DOWNLOAD</Button>
        <Button onClick={() => onRedirectClick()} inverted>
          DONATE
        </Button>
      </_Buttons>
      <Indicator />
    </_HomeBannerContent>
  );
}

HomeBannerContent.defaultProps = {
  onRedirectClick: () => {},
  onScrollDownClick: () => {},
};

HomeBannerContent.propTypes = {
  onRedirectClick: PropTypes.func,
  onScrollDownClick: PropTypes.func,
};

export default HomeBannerContent;
