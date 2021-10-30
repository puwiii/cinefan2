import styled from "styled-components";

export const Tag = styled.span`
  position: relative;
  z-index: 1;
  padding: 0.54em 0.87em;
  padding-left: 2em;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;

  font-weight: ${({ variant }) => {
    switch (variant) {
      case "small":
        return "300";
      default:
        return "400";
    }
  }};

  font-size: ${({ variant }) => {
    switch (variant) {
      case "small":
        return ".65rem";
      default:
        return ".87rem";
    }
  }};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 1em;
    width: 10px;
    height: 100%;
    z-index: 10;
    border-left: 3px dotted ${({ theme }) => theme.color_background_400};
  }
`;
