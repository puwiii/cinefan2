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

import { FiLogIn } from "react-icons/fi";

import { links } from "./data";
import Logo from "../../atoms/Logo";

const Navbar = () => {
  return (
    <Header>
      <HeaderContainer>
        <Link href="/" passHref>
          <HeaderLogo>
            <Logo height={29} />
            <LogoTitle>cinefan</LogoTitle>
          </HeaderLogo>
        </Link>

        <NavbarMenu links={links} />

        <PrimaryButton onClick={(e) => alert("Presionado papu")}>
          <FiLogIn /> Login
        </PrimaryButton>
      </HeaderContainer>
    </Header>
  );
};

export default Navbar;
