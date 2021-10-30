import styled from "styled-components";

export const PreText = styled.pre`
  font-size: 0.87rem;
  font-weight: 500;
  /* line-height: 1; */
  white-space: pre-wrap;
  word-wrap: break-word;
  /* letter-spacing: -0.2px; */
  color: ${({ theme }) => theme.color_text_200};
  font-family: "Lato", sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: ${({ crop }) => crop};
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: ${({ textAling }) => (textAling ? textAling : "justify")};
`;
