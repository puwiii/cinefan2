import styled from "styled-components";

export const StyledPagination = styled.div``;

export const PaginationBox = styled.div`
  display: flex;
  gap: 1em;
  align-items: center;
  background: ${({ theme }) => theme.color_background_300};
  padding: 0.87em;
  width: max-content;
  border-radius: 100px;
`;
