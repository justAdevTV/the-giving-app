import styled from "styled-components";

const _Indicator = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: 5rem;
  font-weight: 700;
  width: 6rem;
  height: 6rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.ghostWhite};
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadows.shadow1};
  transition: transform 0.15s ease-in;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export { _Indicator };
