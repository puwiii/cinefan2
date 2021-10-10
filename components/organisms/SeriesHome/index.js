import { useEffect, useState } from "react";

import axios from "axios";

import { Title } from "../../atoms/Title";

//icons
import { FaFire, FaRegCalendarAlt } from "react-icons/fa";
import { BiTime, BiStar } from "react-icons/bi";
import { HiOutlineTicket } from "react-icons/hi";
import { TiFilm } from "react-icons/ti";

//components
import Banner from "../../molecules/Banner";
import GridPosters from "../../molecules/GridPosters";

import {
  MoviesSection,
  MoviesMenu,
  MoviesViewer,
  Navbar,
  NavButton,
} from "./MoviesHome.elements";
import { requests } from "../../../requests";

const Index = ({ popularMovies = [] }) => {
  const [movies, setMovies] = useState(null);
  const [signContent, setSignContent] = useState("la mas popular");
  const [signIcon, setSignIcon] = useState(<FaFire />);
  const [colorIcon, setColorIcon] = useState("#ff4f4f");
  const [moviesLoading, setMoviesLoading] = useState(true);

  useEffect(() => {
    setMovies(popularMovies);
    setMoviesLoading(false);
  }, []);

  const fetchPopularMovies = (page) => {
    setMoviesLoading(true);
    axios.get(requests.fetchMostPopularTV).then((res) => {
      console.log(res.data.results);
      setMovies(res.data.results);
      setMoviesLoading(false);
      setSignContent("la mas popular");
      setSignIcon(<FaFire />);
      setColorIcon("#ff4f4f");
    });
  };

  const fetchLatestMovies = (page) => {
    setMoviesLoading(true);
    axios.get(requests.fetchLatestSeries).then((res) => {
      console.log(res);
      setMovies(res.data.results);
      setMoviesLoading(false);
      setSignContent("la mas reciente");
      setSignIcon(<BiTime />);
      setColorIcon("#3f5fff");
    });
  };

  const fetchTopRatedMovies = (page) => {
    setMoviesLoading(true);
    axios.get(requests.fetchSeriesTopRatedPage).then((res) => {
      console.log(res);
      setMovies(res.data.results);
      setMoviesLoading(false);
      setSignContent("la mejor puntuada");
      setSignIcon(<BiStar />);
      setColorIcon("#33ff33");
    });
  };

  const fetchUpcomingMovies = (page) => {
    setMoviesLoading(true);
    axios.get(requests.fetchMoviesNowPlayingPage).then((res) => {
      console.log(res);
      setMovies(res.data.results);
      setMoviesLoading(false);
      setSignContent("muy pronto");
      setSignIcon(<FaRegCalendarAlt />);
      setColorIcon("#3ff8ff");
    });
  };

  const fetchNowPlayingMovies = (page) => {
    setMoviesLoading(true);
    axios.get(requests.fetchSeriesAiringToday).then((res) => {
      console.log(res);
      setMovies(res.data.results);
      setMoviesLoading(false);
      setSignContent("en estreno ahora");
      setSignIcon(<TiFilm />);
      setColorIcon("#f358ff");
    });
  };

  return (
    <>
      <MoviesSection>
        <MoviesMenu>
          <Title>Series</Title>
          <Navbar>
            <NavButton onClick={fetchPopularMovies}>
              <FaFire />
              Mas populares
            </NavButton>
            <NavButton onClick={fetchNowPlayingMovies}>
              <HiOutlineTicket />
              Al aire ahora
            </NavButton>
            <NavButton onClick={fetchTopRatedMovies}>
              <BiStar />
              Mas puntuadas
            </NavButton>
            <NavButton onClick={fetchLatestMovies}>
              <BiTime />
              Ultimas estrenadas
            </NavButton>
          </Navbar>
        </MoviesMenu>
        <MoviesViewer>
          {moviesLoading ? (
            <>
              <Banner loader={true} />
              <GridPosters loader={true} />
            </>
          ) : (
            <>
              <Banner
                mediaItem={movies[0]}
                mediaType="tv"
                tag={signContent}
                iconTag={signIcon}
                colorIcon={colorIcon}
              />
              <GridPosters mediaItems={movies.slice(1)} mediaType="tv" />
            </>
          )}
        </MoviesViewer>
      </MoviesSection>
    </>
  );
};

export default Index;
