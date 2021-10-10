import styled from "styled-components";

//receive colorIcon Prop

export const Sign = styled.span`
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  padding: 7px 15px;
  right: 0;
  z-index: 100;
  border-radius: 0 0 0 0.7em;
  backdrop-filter: blur(10px);
  font-size: 0.8rem;
  font-weight: 600;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 425px) {
    font-size: 0.7rem;
    padding: 7px 10px;
  }

  & > svg {
    fill: ${({ colorIcon }) => colorIcon};
  }
`;
