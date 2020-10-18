import styled from "styled-components";

const _Navbar = styled.nav`
  position: absolute;
  top: 0;
  padding: 4.5rem 9rem;
  padding-bottom: 1rem;
  width: -webkit-fill-available;
  z-index: 999;
  display: flex;

  & > button {
    height: min-content;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const _Links = styled.ul`
  user-select: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  font-size: 2.4rem;
  list-style: none;
  color: ${({ theme }) => theme.colors.ghostWhite};
`;

const _Link = styled.li`
  display: inline-block;
  margin-right: 5rem;
  cursor: pointer;
`;

const _Logo = styled.a`
  width: 15rem;
  height: 15rem;
  cursor: pointer;
  & img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export { _Navbar, _Links, _Link, _Logo };
