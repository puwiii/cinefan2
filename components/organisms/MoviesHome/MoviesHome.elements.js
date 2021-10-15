import styled from "styled-components";
import { Container } from "../../../globalStyles";

export const HomepageContainer = styled(Container)`
  max-width: none;
`;

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 100px 0;
  position: relative;
`;

export const MoviesMenu = styled.header`
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const NavButton = styled.button`
  display: flex;
  gap: 10px;
  white-space: nowrap;
  padding: 0.87em;
  cursor: pointer;
  font-size: 0.87rem;
  border-radius: 0;
  border-bottom: 2px solid transparent;

  transition: color 100ms linear, border 100ms linear, background 100ms linear;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }

  &:hover {
    color: ${({ color }) => color};
    background: ${({ theme }) => theme.color_background_300};

    /* color: ${({ theme }) => theme.color_primary_300}; */
    border-bottom: 2px solid ${({ color }) => color};
  }

  & > svg {
    font-size: 1rem;
  }
`;

export const MoviesViewer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
