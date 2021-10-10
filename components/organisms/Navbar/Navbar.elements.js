import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const Header = styled.header`
  padding: 10px 0;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  gap: 12px;
  justify-content: flex-end;
`;

export const HeaderLogo = styled.a`
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  margin-right: auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogoTitle = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color_text_400};
  font-family: "Poppins";
  font-weight: 700;

  /* @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  } */
`;
