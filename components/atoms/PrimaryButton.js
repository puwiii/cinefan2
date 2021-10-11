import styled from "styled-components";
import { Button } from "../../globalStyles";

export const PrimaryButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 7px;
  background: ${({ theme }) => theme.color_primary_600};
  border: 2px solid transparent;
  font-weight: 600;
  padding: 0.8em 1em;
  cursor: pointer;
  color: ${({ theme }) => theme.color_text_400};
  transition: border-color 124ms linear, background 125ms linear,
    color 125ms linear;

  & > svg {
    font-size: 1.05rem;
  }

  &:hover {
    background: ${({ theme }) => theme.color_background_400};
    color: ${({ theme }) => theme.color_primary_300};
    border-color: ${({ theme }) => theme.color_primary_300};
  }
`;
