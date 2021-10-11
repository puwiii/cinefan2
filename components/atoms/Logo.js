import styled from "styled-components";

const LogoTitle = styled.h1`
  font-size: ${({ variant }) => {
    console.log(variant);
    switch (variant) {
      case "small":
        return "1.5rem";
      case "regular":
        return "2.1rem";
      case "large":
        return "2.8rem";
      default:
        return "2.1rem";
    }
  }};

  color: ${({ theme }) => theme.color_primary_400};
  font-family: "Poppins";
  font-weight: 800;
  letter-spacing: -0.8px;
  background: -webkit-linear-gradient(45deg, #ff9966, #ff5e62);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Logo = ({ variant }) => {
  return <LogoTitle variant={variant}>cinefan 2</LogoTitle>;
};
