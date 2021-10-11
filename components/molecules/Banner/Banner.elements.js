import styled, { css } from "styled-components";

import { skeletonAnimation } from "../../../globalStyles";

export const StyledBanner = styled.article`
  border-radius: 0.41em;
  overflow: hidden;
  border: 1px solid #323232;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.4);
  position: relative;
  width: 100%;
  cursor: pointer;
  flex-direction: row-reverse;
  /* max-width: 800px; */

  display: flex;

  padding: 0em;

  background: ${
    ({ theme }) => theme.color_background_300
    // `linear-gradient(to right, ${theme.color_background_300} 55%, transparent 70%);`
  };

  transition: filter 0.1s linear;
  &:hover {
    filter: brightness(1.1) contrast(0.9);
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }

  ${({ loader, theme }) =>
    loader &&
    css`
      min-height: 375px;
      animation: ${skeletonAnimation} 1s ease-in-out infinite both alternate;
    `}
`;

export const BannerImage = styled.div`
  position: relative;
  z-index: 10;
  flex: 2;
  background-image: url("${({ background }) => background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 200px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.color_background_300}, transparent 50%);`};

    @media screen and (max-width: 425px) {
      background: ${({ theme }) =>
        `linear-gradient(to bottom, ${theme.color_background_300}, transparent);`};
    }
  }
`;

export const BannerInfo = styled.div`
  flex: 1;
  display: flex;
  z-index: 10;
  gap: 1.7em;
  flex-direction: column;
  padding: 2.2em;
`;

export const BannerTitle = styled.h3`
  font-size: 1.5rem;
  /* white-space: nowrap; */
`;

export const Tag = styled.span`
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  padding: 10px 15px;
  right: 0;
  z-index: 100;
  border-radius: 0 0 0 0.7em;
  backdrop-filter: blur(10px);
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.4);

  @media screen and (max-width: 425px) {
    font-size: 0.7rem;
    padding: 7px 10px;
  }

  & > svg {
    fill: #ff4f4f;
  }
`;
