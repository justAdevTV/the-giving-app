import PropTypes from "prop-types";
import styled from "styled-components";

const _Paragraph = styled.p`
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.colors.black};
`;

function Paragraph({ children }) {
  return <_Paragraph>{children}</_Paragraph>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
};

export default Paragraph;
