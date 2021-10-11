import styled from "styled-components";

export const Pharagraph = styled.p`
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.6;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.color_text_200};
  display: -webkit-box;
  -webkit-line-clamp: ${({ crop }) => crop};
  -webkit-box-orient: vertical;
  overflow: hidden;

  text-align: ${({ textAling }) => (textAling ? textAling : "left")};
`;
