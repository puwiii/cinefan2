import React from "react";
import Link from "next/link";
import { PrimaryButton } from "../../atoms/PrimaryButton";

import {
  Header,
  HeaderContainer,
  HeaderLogo,
  LogoTitle,
} from "./Navbar.elements";

import { NavbarMenu } from "../../molecules/NavbarMenu";

import { IoEnter } from "react-icons/io5";

import { links } from "./data";
import { Logo } from "../../atoms/Logo";

const Navbar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Link href="/" passHref>
          <HeaderLogo>
            {/* <Logo height={39} /> */}
            <Logo />
          </HeaderLogo>
        </Link>

        <NavbarMenu links={links} />

        <PrimaryButton onClick={(e) => alert("Presionado papu")}>
          <IoEnter /> Login
        </PrimaryButton>
      </HeaderContainer>
    </Header>
  );
};

export default Navbar;
