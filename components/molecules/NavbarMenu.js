import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "../atoms/NavLink";

// import { HiMenuAlt3 } from "react-icons/hi";
// import { GrFormClose } from "react-icons/gr";

// const NavMenuButton = styled.div`
//   display: none;
//   flex-direction: row;
//   align-items: center;
//   font-size: 40px;

//   cursor: pointer;

//   @media screen and (max-width: 445px) {
//     display: flex;
//   }
// `;

const StyledNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    background: ${({ theme }) => theme.color_background_400};
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    justify-content: space-evenly;
    gap: 0;
    display: grid;
    grid-template-columns: repeat(${({ lenght }) => lenght}, 1fr);
    box-shadow: ${({ theme }) => `0 0 50px ${theme.color_text_400}1f`};
    z-index: 100;
  }
`;

export const NavbarMenu = ({ links = [] }) => {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <StyledNavMenu lenght={links.length}>
      {links.map((link, index) => {
        return (
          <NavLink
            key={index}
            href={link.href}
            passHref={link.passHref}
            label={link.label}
            icon={link.icon}
          />
        );
      })}
      {/* <NavMenuButton
        onClick={(e) => setMobileMenuOpen((oldState) => !oldState)}
      >
        {mobileMenuOpen ? <GrFormClose /> : <HiMenuAlt3 />}
      </NavMenuButton> */}
    </StyledNavMenu>
  );
};
