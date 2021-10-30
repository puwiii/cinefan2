import React, { useEffect, useState } from "react";

import {
  DropdwownMenu,
  DropdwownOption,
  StyledMovies,
  MoviesMain,
} from "./Movies.elements";

import GridPosters from "../../molecules/GridPosters";
import { Link } from "../../atoms/Link";
import { NavLink } from "../../atoms/NavLink";
import Pagination from "../../molecules/Pagination";
import { fetchPopularMovies } from "../../../hooks/fetchMovies";
import axios from "axios";
import { requests } from "../../../requests";

const Index = ({ mediaType, page, sort }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (page && sort) {
      axios.get(`${requests[sort]}${page}`).then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      });
    }
  }, [page, sort]);

  console.log(sort);

  return (
    <>
      <StyledMovies>
        <DropdwownMenu>
          <DropdwownOption active={sort === "fetchMoviesPopularPage"}>
            <NavLink
              href={`/movies?sort=fetchMoviesPopularPage`}
              label="Mas populares"
              shallow={true}
            />
          </DropdwownOption>

          <DropdwownOption active={sort === "fetchMoviesNowPlayingPage"}>
            <NavLink
              href={`/movies?sort=fetchMoviesNowPlayingPage`}
              label="Ultimas"
              shallow={true}
            />
          </DropdwownOption>
          <DropdwownOption active={sort === "fetchMoviesUpcomingPage"}>
            <NavLink
              href={`/movies?sort=fetchMoviesUpcomingPage`}
              label="Estrenos"
              shallow={true}
            />
          </DropdwownOption>
          <DropdwownOption active={sort === "fetchMoviesTopRatedPage"}>
            <NavLink
              href={`/movies?sort=fetchMoviesTopRatedPage`}
              label="Ranking"
              shallow={true}
            />
          </DropdwownOption>
        </DropdwownMenu>

        <MoviesMain>
          {loading ? (
            <GridPosters loader={true} />
          ) : (
            <GridPosters mediaItems={movies} mediaType={mediaType} />
          )}
          <Pagination number={page} />
        </MoviesMain>
      </StyledMovies>
    </>
  );
};

export default Index;
