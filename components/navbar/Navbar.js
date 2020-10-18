import PropTypes from "prop-types";
import { Button } from "../";
import { _Navbar, _Links, _Link, _Logo, _CallToAction } from "./navbar.styles";

// Not for export
const _linkRoutes = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About Us",
  },
  {
    route: "/team",
    name: "Our Team",
  },
  {
    route: "/founder",
    name: "Founder Letter",
  },
];

function Navbar({ onClick }) {
  // Generate <li>s for navbar
  const generateLinks = (links) =>
    links.map(({ route, name }) => (
      <_Link onClick={() => onClick({ route })}>
        <a>{name}</a>
      </_Link>
    ));

  return (
    <_Navbar>
      <_Logo onClick={() => onClick({ route: "/home" })}>
        <img src="/images/logo_white.png" alt="Company Logo" />
      </_Logo>
      <_Links>{generateLinks(_linkRoutes)}</_Links>
      <Button large onClick={() => onClick({ route: "/get-involved" })}>
        GET INVOLVED
      </Button>
    </_Navbar>
  );
}

Navbar.defaultProps = {
  onClick: () => {},
};

Navbar.propTypes = {
  /**
   * Uplifts - ({route})
   */
  onClick: PropTypes.func,
};

export default Navbar;
