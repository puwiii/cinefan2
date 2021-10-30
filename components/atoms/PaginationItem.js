import styled from "styled-components";

export const PaginationItem = styled.div`
  font-size: 1rem;
  /* line-height: 0; */
  border: 2px solid transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  border-radius: 50%;

  width: 50px;
  height: 50px;

  transition: border-color 125ms linear, color 125ms linear;

  pointer-events: ${({ active }) => active && "none"};
  background: ${({ active, theme }) => active && theme.color_secondary_600};

  &:hover {
    border-color: ${({ theme }) => theme.color_secondary_300};
    color: ${({ theme }) => theme.color_secondary_300};
  }
`;
