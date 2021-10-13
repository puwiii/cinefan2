import styled from "styled-components";
import { Button } from "../../globalStyles";

export const PrimaryButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.75em;
  background: ${({ theme }) => theme.color_primary_600};
  border: 2px solid transparent;
  font-weight: 600;
  padding: 0.9em 1.1em;
  cursor: pointer;
  color: ${({ theme }) => theme.color_text_400};
  transition: border-color 124ms linear, background 125ms linear,
    color 125ms linear;

  & > svg {
    font-size: 1.05rem;
  }

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.color_primary_400};
    border-color: ${({ theme }) => theme.color_primary_400};
  }
`;
