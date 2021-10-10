import styled from "styled-components";
// import { FcRating } from "react-icons/fc";
import { FiAward } from "react-icons/fi";

const StyledRating = styled.div`
  font-weight: 600;
  gap: 10px;
  display: flex;
`;

const Value = styled.span`
  gap: 7px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color_info};
`;

const Votes = styled.span`
  align-self: flex-start;
  opacity: 0.6;
`;

export const Rating = ({ value, votes }) => {
  return (
    <StyledRating>
      <Value>
        {" "}
        <FiAward />
        {value} / 10
      </Value>
      ·{votes && <Votes>{votes} votos</Votes>}
    </StyledRating>
  );
};
