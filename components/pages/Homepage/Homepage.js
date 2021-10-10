import React from "react";

import { Title } from "../../atoms/Title";

//icons
import { FaFire } from "react-icons/fa";

//components
import { Container } from "../../../globalStyles";
import Banner from "../../molecules/Banner";
import GridPosters from "../../molecules/GridPosters";

import styled from "styled-components";

const HomepageContainer = styled(Container)`
  max-width: none;
`;

const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 100px 0;
`;

const Index = ({ popularMovies = [] }) => {
  return (
    <>
      {/* <HomepageSection></HomepageSection> */}
      <HomepageContainer>
        <MoviesSection>
          <Title>Peliculas</Title>
          <Banner
            mediaItem={popularMovies[0]}
            mediaType="movie"
            tag="la mas popular"
            iconTag={<FaFire />}
          />
          <GridPosters mediaItems={popularMovies.slice(1)} />
        </MoviesSection>
      </HomepageContainer>
      {/* {props.popularMovies.map((item) => (
        <h1>{item.title}</h1>
      ))} */}
    </>
  );
};

export default Index;
