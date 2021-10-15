import styled from "styled-components";
import NextLink from "next/link";

const StyledLink = styled(NextLink)`
  all: inherit;
`;

const AnchorLink = styled.a`
  all: inherit;
`;

export const Link = ({ href, passHref = true, children, shallow = false }) => {
  return (
    <StyledLink href={href} passHref={passHref} shallow={shallow}>
      <AnchorLink>{children}</AnchorLink>
    </StyledLink>
  );
};
