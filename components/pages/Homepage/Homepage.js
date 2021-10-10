import { useEffect, useState } from "react";

//components
import MoviesHome from "../../organisms/MoviesHome";
import SeriesHome from "../../organisms/SeriesHome";

import { HomepageContainer } from "./Homepage.elements";

const Index = ({ popularMovies = [], popularSeries = [] }) => {
  return (
    <>
      {/* <HomepageSection></HomepageSection> */}
      <HomepageContainer>
        <MoviesHome popularMovies={popularMovies} />
        <SeriesHome popularMovies={popularSeries} />
      </HomepageContainer>
    </>
  );
};

export default Index;
