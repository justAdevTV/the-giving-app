import PropTypes from "prop-types";
import styled from "styled-components";

const _Header2 = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 7.2rem;
  color: ${({ theme }) => theme.colors.black};
`;

function Header2({ children }) {
  return <_Header2>{children}</_Header2>;
}

Header2.propTypes = {
  children: PropTypes.node,
};

export default Header2;
