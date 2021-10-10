import styled from "styled-components";

export const Tag = styled.span`
  position: relative;
  z-index: 1;
  padding: 0.54em 0.87em;
  border-radius: 3px;
  /* background: ${({ theme }) =>
    `linear-gradient(to right bottom, ${theme.color_primary_300} 50%, ${theme.color_secondary_400})`}; */

  font-weight: 500;

  font-size: ${({ variant }) => {
    switch (variant) {
      case "small":
        return ".7rem";
      default:
        return ".9rem";
    }
  }};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background: ${({ theme }) =>
      `linear-gradient(to right bottom, ${theme.color_primary_300} 50%, ${theme.color_secondary_400})`};
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
  }
`;
