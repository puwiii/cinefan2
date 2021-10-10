import React from "react";

import Poster from "../Poster";

import styled from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

const index = ({ mediaItems }) => {
  return (
    <StyledGrid>
      {mediaItems.map((item, index) => (
        <Poster key={index} mediaItem={item} />
      ))}
    </StyledGrid>
  );
};

export default index;
