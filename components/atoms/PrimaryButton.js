import styled from "styled-components";
import { Button } from "../../globalStyles";

export const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.color_primary_400};
  color: #fff;

  &:hover {
    background: ${({ theme }) => theme.color_primary_300};
  }
`;
