import styled from "styled-components";
import { Button } from "../../globalStyles";

export const PrimaryButton = styled.button`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.67em;
  background: ${({ theme }) => theme.color_primary_600};
  border: 2px solid transparent;
  font-weight: 600;
  padding: 0.87em 1.2em;
  cursor: pointer;
  text-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color_text_400};
  transition: border-color 124ms linear, background 125ms linear,
    color 125ms linear;

  & > svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: transparent;
    color: ${({ theme }) => theme.color_primary_400};
    border-color: ${({ theme }) => theme.color_primary_400};
  }
`;
