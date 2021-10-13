import styled from "styled-components";

export const Pharagraph = styled.p`
  font-size: 0.87rem;
  font-weight: 500;
  line-height: 1.4;
  /* letter-spacing: -0.2px; */
  color: ${({ theme }) => theme.color_text_200};
  font-family: "Lato", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: ${({ crop }) => crop};
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: ${({ textAling }) => (textAling ? textAling : "left")};
`;
