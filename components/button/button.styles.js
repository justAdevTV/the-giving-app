import styled from "styled-components";

const _Button = styled.button`
  padding: ${({ large }) => (large ? "2.5rem" : "1.8rem ")} 3rem;
  font-size: 2.4rem;
  border-radius: 2rem;
  color: ${({ theme, inverted }) =>
    inverted ? theme.colors.primary : theme.colors.white};
  background-color: ${({ theme, inverted }) =>
    inverted ? theme.colors.white : theme.colors.primary};
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${({ theme, inverted }) =>
      inverted ? theme.colors.grayLight1 : theme.colors.primaryDark};
    transform: translateY(-1px);
  }
  &:focus {
    outline: none;
  }
`;

export { _Button };
