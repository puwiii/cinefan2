import { useEffect, useState } from "react";

export const usePopularMovies = (page) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    axios.get(`${requests.fetchMostPopularMovies}${page}`).then((res) => {
      setMovies(res.data.results);
    });
  }, [page]);

  return movies;
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
