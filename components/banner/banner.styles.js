import styled from "styled-components";

const _Banner = styled.header`
  position: relative;
  height: 100vh;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: border-box;
  background-position: center;
`;

const _Content = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

const _Overlay = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.overlay};
`;

export { _Banner, _Content, _Overlay };
