import { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../requests";

export const fetchPopularMovies = async (page) => {
  // const [movies, setMovies] = useState(null);

  // useEffect(() => {
  const movies = await axios.get(`${requests.fetchMoviesPopularPage}${page}`);

  return movies.data.results;
};

const fetchLatestMovies = (page) => {
  setMoviesLoading(true);
  axios.get(requests.fetchLatestMovies).then((res) => {});
};

const fetchTopRatedMovies = (page) => {
  setMoviesLoading(true);
  axios.get(requests.fetchMoviesTopRatedPage).then((res) => {});
};

const fetchUpcomingMovies = (page) => {
  setMoviesLoading(true);
  axios.get(requests.fetchMoviesUpcomingPage).then((res) => {});
};

const fetchNowPlayingMovies = (page) => {
  setMoviesLoading(true);
  axios.get(requests.fetchMoviesNowPlayingPage).then((res) => {});
};
