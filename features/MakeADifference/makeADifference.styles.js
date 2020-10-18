import styled from "styled-components";

const _MakeADifference = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const _BodyTextContainer = styled.div`
  & > p {
    position: relative;
    width: 82.5rem;
    margin-top: 15rem;
    margin-left: auto;
    margin-right: auto;

    &:before {
      content: "";
      bottom: -5.75rem;
      left: 50%;
      transform: translateX(-50%);
      position: absolute;
      width: 25%;
      border-bottom: solid 1px ${({ theme }) => theme.black};
    }
  }
`;

export { _MakeADifference, _BodyTextContainer };
