import styled from "styled-components";

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
  flex: 1;
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
      `linear-gradient(to left, ${theme.color_background_300}, transparent 50%);`};
  }
`;

export const PosterInfo = styled.div`
  flex: 1;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: space-evenly;
`;
// export const PosterImage = styled(Image)``;

export const PosterTitle = styled.h4`
  text-align: center;
  font-size: 1.17rem;
`;
