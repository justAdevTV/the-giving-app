import styled from "styled-components";

const _Button = styled.button`
  padding: ${({ large }) => (large ? "2.5rem" : "1.8rem ")} 3rem;
  font-size: 2.4rem;
  border-radius: ${({ large }) => (large ? " 2rem" : "1.5rem")};
  color: ${({ theme, inverted }) =>
    inverted ? theme.colors.primary : theme.colors.white};
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.colors.white : theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  border: none;
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${({ theme, inverted }) =>
      inverted ? theme.colors.grayLight1 : theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export { _Button };
