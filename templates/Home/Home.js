import PropTypes from "prop-types";
import { _Home } from "./home.styles";

function Home({ banner, difference, download, sponsors, helpInfo, contact }) {
  // Change this to components if needed
  return (
    <_Home>
      <div>{banner}</div>
      <div>{difference}</div>
      <div>{download}</div>
      <div>{sponsors}</div>
      <div>{helpInfo}</div>
      <div>{contact}</div>
    </_Home>
  );
}

Home.propTypes = {
  banner: PropTypes.node.isRequired,
  difference: PropTypes.node.isRequired,
  download: PropTypes.node.isRequired,
  sponsors: PropTypes.node.isRequired,
  helpInfo: PropTypes.node.isRequired,
  contact: PropTypes.node.isRequired,
};

export default Home;
