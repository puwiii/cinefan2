import React from "react";
import { PrimaryButton } from "../../atoms/PrimaryButton";

const Navbar = () => {
  return (
    // <Header>
    //   <HeaderContainer>
    //     <HeaderLogo />
    //     <HeaderSearcher />
    //   </HeaderContainer>
    // </Header>
    <header>
      <PrimaryButton onClick={(e) => alert("Presionado papu")}>
        Presioname
      </PrimaryButton>
    </header>
  );
};

export default Navbar;
