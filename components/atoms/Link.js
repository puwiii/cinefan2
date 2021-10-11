import styled from "styled-components";
import NextLink from "next/link";

const StyledLink = styled(NextLink)`
  all: inherit;
`;

const AnchorLink = styled.a`
  all: inherit;
`;

export const Link = ({ href, passHref = true, children }) => {
  return (
    <StyledLink href={href} passHref={passHref}>
      <AnchorLink>{children}</AnchorLink>
    </StyledLink>
  );
};
