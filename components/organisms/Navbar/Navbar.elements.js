import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const Header = styled.header`
  padding: 10px 0;
  background: ${({ theme }) => theme.color_background_300};
  position: sticky;
  top: 0;
  z-index: 10000;
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
  font-size: 2.2rem;
  color: ${({ theme }) => theme.color_text_400};
  font-family: "Poppins";
  font-weight: 800;
  letter-spacing: -1px;
  background: -webkit-linear-gradient(45deg, #ff9966, #ff5e62);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* @media screen and (max-width: 425px) {
    font-size: 1.5rem;
  } */
`;
