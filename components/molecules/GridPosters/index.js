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

  @media screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 10px;
  }
`;

const index = ({ mediaItems, mediaType, loader }) => {
  const loaderPosters = new Array(20);

  return (
    <StyledGrid>
      {loader ? (
        <>
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
          <Poster loader={true} />
        </>
      ) : (
        mediaItems.map((item, index) => (
          <Poster key={index} mediaItem={item} mediaType={mediaType} />
        ))
      )}
    </StyledGrid>
  );
};

export default index;
