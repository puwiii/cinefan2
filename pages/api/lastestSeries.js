// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { requests } from "../../components/requests";

import axios from "axios";

export default async function handler(req, res) {
  const data = await axios.get(requests.fetchLastestSeries, {
    baseURL: "https://api.themoviedb.org/3/",
  });

  res.status(200).json(data.data.results);
}

// fetchNewToken: `authentication/token/new?api_key=${API_KEY}`,
// fetchNewSession: `authentication/session/new?api_key=${API_KEY}`,
// fetchGuestToken: `authentication/guest_session/new?api_key=${API_KEY}`,
// fetchNewSessionWLogin: `authentication/token/validate_with_login?api_key=${API_KEY}`,
// fetchDeleteSession: `authentication/session?api_key=${API_KEY}`,

// //trendys
// fetchMostPopular: `/trending/all/week?api_key=${API_KEY}`,
// fetchLastestMovies: `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc`,
// fetchLastestSeries: `discover/tv?api_key=${API_KEY}&sort_by=release_date.desc`,
// fetchMostPopularMovies: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
// fetchMostPopularTV: `discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false`,

// //genres
// fetchGenresMovies: `/genre/movie/list?api_key=${API_KEY}`,
// fetchGenresSeries: `/genre/tv/list?api_key=${API_KEY}`,

// //movies component
// fetchMoviesTopRatedPage: `movie/top_rated?api_key=${API_KEY}&language=en-US&page=`,
// fetchMoviesUpcomingPage: `movie/upcoming?api_key=${API_KEY}&language=en-US&page=`,
// fetchMoviesNowPlayingPage: `movie/now_playing?api_key=${API_KEY}&language=en-US&page=`,
// fetchMoviesPopularPage: `movie/popular?api_key=${API_KEY}&language=en-US&page=`,
// fetchMoviesLatest: `movie/latest?api_key=${API_KEY}&language=en-US`,

// //series component
// fetchSeriesTopRatedPage: `tv/top_rated?api_key=${API_KEY}&language=en-US&page=`,
// fetchSeriesPopularPage: `tv/popular?api_key=${API_KEY}&language=en-US&page=`,
// fetchSeriesOnTheAir: `tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`,
// fetchSeriesAiringToday: `tv/airing_today?api_key=${API_KEY}&language=en-US&page=`,

// //details
// fetchMovieDetails: `movie/793723?api_key=${API_KEY}&language=en-US`,
