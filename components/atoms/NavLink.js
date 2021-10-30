import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const StyledLink = styled.a`
  color: ${({ isActive, theme }) =>
    isActive ? theme.color_primary_300 : theme.color_text_400};
  font-weight: 500;
  border: 0;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  font-size: 0.87rem;

  padding: 1.37em;

  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  user-select: none;

  transition: color 105ms linear, border-color 105ms linear;

  & > svg {
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
    font-size: 1.1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.color_primary_300};
    border-bottom: 2px solid ${({ theme }) => theme.color_primary_300};
  }

  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.color_primary_300};
    border-bottom: 2px solid ${theme.color_primary_300};
    background: rgba(255, 255, 255, 0.1);
  `}

  @media screen and (max-width: 768px) {
    flex-direction: column;
    border-bottom: 2px solid transparent;
    border-top: 2px solid transparent;
    font-size: 0.8rem;
    padding: 0.87em 1.37em;
    gap: 5px;
  }
`;

export const NavLink = ({
  href,
  label,
  passHref = true,
  icon = "",
  // isActive = false,
  shallow = false,
}) => {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref={passHref} shallow={shallow}>
      <StyledLink isActive={isActive}>
        {icon}
        {label}
      </StyledLink>
    </Link>
  );
};
