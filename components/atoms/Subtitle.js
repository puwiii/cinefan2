import styled from "styled-components";

export const Subtitle = styled.h3`
  font-size: 1.27rem;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.color_text_200};
  font-weight: 600;
  /* font-family: "Lato", sans-serif; */

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
