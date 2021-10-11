import styled, { css } from "styled-components";
import { fadeInAnimation } from "../../../globalStyles";

export const LoadingPage = styled.main`
  min-height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  ${css`
    animation: ${fadeInAnimation} 50ms ease-in-out;
  `}
`;

export const AnimationBox = styled.figure`
  width: 200px;
  height: 200px;
`;
