import React, { useEffect, useState } from "react";

import {
  DropdwownMenu,
  DropdwownOption,
  StyledMovies,
  MoviesMain,
} from "../Movies/Movies.elements";

import GridPosters from "../../molecules/GridPosters";
import { Link } from "../../atoms/Link";
import { NavLink } from "../../atoms/NavLink";
import Pagination from "../../molecules/Pagination";
import { fetchPopularMovies } from "../../../hooks/fetchMovies";
import axios from "axios";
import { requests } from "../../../requests";

const Index = ({ mediaType, page, sort }) => {
  const [loading, setLoading] = useState(true);
  const [Series, setSeries] = useState(null);

  useEffect(() => {
    if (page && sort) {
      axios.get(`${requests[sort]}${page}`).then((response) => {
        setSeries(response.data.results);
        setLoading(false);
      });
    }
  }, [page, sort]);

  console.log(sort);

  return (
    <>
      <StyledMovies>
        <DropdwownMenu>
          <DropdwownOption active={sort === "fetchSeriesPopularPage"}>
            <NavLink
              href={`/series?sort=fetchSeriesPopularPage`}
              label="Mas populares"
              shallow={true}
            />
          </DropdwownOption>

          <DropdwownOption active={sort === "fetchSeriesOnTheAir"}>
            <NavLink
              href={`/series?sort=fetchSeriesOnTheAir`}
              label="Al aire"
              shallow={true}
            />
          </DropdwownOption>
          <DropdwownOption active={sort === "fetchSeriesAiringToday"}>
            <NavLink
              href={`/series?sort=fetchSeriesAiringToday`}
              label="Hoy"
              shallow={true}
            />
          </DropdwownOption>
          <DropdwownOption active={sort === "fetchSeriesTopRatedPage"}>
            <NavLink
              href={`/series?sort=fetchSeriesTopRatedPage`}
              label="Ranking"
              shallow={true}
            />
          </DropdwownOption>
        </DropdwownMenu>

        <MoviesMain>
          {loading ? (
            <GridPosters loader={true} />
          ) : (
            <GridPosters mediaItems={Series} mediaType={mediaType} />
          )}
          <Pagination number={page} />
        </MoviesMain>
      </StyledMovies>
    </>
  );
};

export default Index;
