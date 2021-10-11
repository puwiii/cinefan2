import styled from "styled-components";

import { skeletonAnimation } from "../../../globalStyles";

export const StyledPoster = styled.div`
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  position: relative;

  background: ${({ theme }) => theme.color_background_300};

  @media screen and (min-width: 768px) {
    ${({ wide }) => wide && `grid-column: span 2 / auto;`}
  }

  ${({ wide }) =>
    wide &&
    `
    display:flex;
    `}

  cursor:pointer;

  transition: filter 0.1s linear;
  &:hover {
    filter: brightness(1.3) contrast(0.7);
  }
`;

export const PosterImage = styled.figure`
  position: relative;
  width: 46.7%;
  height: 100%;
  opacity: 9;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.color_background_300} 0, transparent 30%);`};
  }
`;

export const PosterInfo = styled.div`
  flex: 1;
  padding: 2em 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
// export const PosterImage = styled(Image)``;

export const PosterTitle = styled.h4`
  text-align: center;
  font-size: 1.17rem;
`;

export const ImageBone = styled.div`
  width: 100%;
  aspect-ratio: ${({ width, height }) => `${width} / ${height}`};
  animation: ${skeletonAnimation} 1s ease-in-out infinite both alternate;
`;
