import PropTypes from "prop-types";
import { _Home } from "./home.styles";

function Home({ banner, difference, download, sponsors, helpInfo, contact }) {
  // Change this to components if needed
  return (
    <_Home>
      <section>{banner}</section>
      <section>{difference}</section>
      <section>{download}</section>
      <section>{sponsors}</section>
      <section>{helpInfo}</section>
      <section>{contact}</section>
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
