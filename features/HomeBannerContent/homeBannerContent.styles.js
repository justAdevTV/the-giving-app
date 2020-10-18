import styled from "styled-components";

const _HomeBannerContent = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > a {
    margin: auto;
    margin-bottom: 7.5rem;
  }
`;

const _Text = styled.h1`
  text-align: center;
  margin-top: 40rem;
  color: ${({ theme }) => theme.colors.ghostWhite};

  & > span {
    display: block;

    &:first-child {
      font-size: 3.6rem;
      font-weight: 400;
    }

    &:last-child {
      font-family: "Poppins", sans-serif;
      font-size: 7.2rem;
      font-weight: 800;
    }
  }
`;

const _Buttons = styled.div`
  display: flex;
  margin-top: 10rem;
  margin-left: auto;
  margin-right: auto;

  & > button {
    margin: 0 2.9rem;
  }
`;

export { _HomeBannerContent, _Text, _Buttons };
