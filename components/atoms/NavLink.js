import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  color: ${({ theme }) => theme.color_text_400};
  font-weight: 600;
  border: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  font-size: 0.9rem;

  padding: 1em 1.37em;

  height: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
  user-select: none;

  transition: color 105ms linear, border-color 105ms linear;

  & > svg {
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 1.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.color_primary_300};
    border-bottom: 2px solid ${({ theme }) => theme.color_primary_300};

    & > svg {
      transform: rotate(-30deg) translate(-3px, -6px);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border-bottom: 0;
    border-top: 3px solid transparent;
    font-size: 0.8rem;
  }
`;

export const NavLink = ({ href, label, passHref = true, icon }) => {
  return (
    <Link href={href} passHref={passHref}>
      <StyledLink>
        {icon}
        {label}
      </StyledLink>
    </Link>
  );
};
