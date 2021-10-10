export const API_KEY = process.env.API_KEY;

export const requests = {
  //auth
  fetchNewToken: `authentication/token/new?api_key=${API_KEY}&language=es`,
  fetchNewSession: `authentication/session/new?api_key=${API_KEY}&language=es`,
  fetchGuestToken: `authentication/guest_session/new?api_key=${API_KEY}&language=es`,
  fetchNewSessionWLogin: `authentication/token/validate_with_login?api_key=${API_KEY}&language=es`,
  fetchDeleteSession: `authentication/session?api_key=${API_KEY}&language=es`,

  //trendys
  fetchMostPopular: `/trending/all/week?api_key=${API_KEY}`,
  fetchLatestMovies: `discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&language=es`,
  fetchLatestSeries: `discover/tv?api_key=${API_KEY}&sort_by=release_date.desc&language=es`,
  fetchMostPopularMovies: `discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&language=es`,
  fetchMostPopularTV: `discover/tv?api_key=${API_KEY}&sort_by=popularity.desc&language=es`,

  //genres
  fetchGenresMovies: `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=es`,
  fetchGenresSeries: `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}&language=es`,

  //movies component
  fetchMoviesTopRatedPage: `movie/top_rated?api_key=${API_KEY}&language=es&page=`,
  fetchMoviesUpcomingPage: `movie/upcoming?api_key=${API_KEY}&language=es&page=`,
  fetchMoviesNowPlayingPage: `movie/now_playing?api_key=${API_KEY}&language=es&page=`,
  fetchMoviesPopularPage: `movie/popular?api_key=${API_KEY}&language=es&page=`,
  fetchMoviesLatest: `movie/latest?api_key=${API_KEY}&language=es`,

  //series component
  fetchSeriesTopRatedPage: `tv/top_rated?api_key=${API_KEY}&language=es&page=`,
  fetchSeriesPopularPage: `tv/popular?api_key=${API_KEY}&language=es&page=`,
  fetchSeriesOnTheAir: `tv/on_the_air?api_key=${API_KEY}&language=es&page=`,
  fetchSeriesAiringToday: `tv/airing_today?api_key=${API_KEY}&language=es&page=`,

  //details
  fetchMovieDetails: `movie/793723?api_key=${API_KEY}&language=es`,
};

export function getAccountDetails(session) {
  return `account?api_key=${API_KEY}&session_id=${session}`;
}

export function getDetails(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}?api_key=${API_KEY}&language=es`;
  } else if (mediaType === "tv") {
    return `tv/${id}?api_key=${API_KEY}&language=es`;
  }
}

export function getVideos(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}/videos?api_key=${API_KEY}&language=es`;
  } else if (mediaType === "tv") {
    return `tv/${id}/videos?api_key=${API_KEY}&language=es`;
  }
}

export function getSimilar(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}/similar?api_key=${API_KEY}&language=es&page=1`;
  } else if (mediaType === "tv") {
    return `tv/${id}/similar?api_key=${API_KEY}&language=es&page=1`;
  }
}

export function getRecommended(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}/recommendations?api_key=${API_KEY}&language=es-SP&page=1`;
  } else if (mediaType === "tv") {
    return `tv/${id}/recommendations?api_key=${API_KEY}&language=es-SP&page=1`;
  }
}

export function getReviews(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}/reviews?api_key=${API_KEY}&language=es-SP&page=1`;
  } else if (mediaType === "tv") {
    return `tv/${id}/reviews?api_key=${API_KEY}&language=es-SP&page=1`;
  }
}

export function sendRatings(id, mediaType, userType) {
  if (userType.username === "Guest") {
    if (mediaType === "movie") {
      return `movie/${id}/rating?api_key=${API_KEY}&guest_session_id=${userType.sessionId.session_id}`;
    } else if (mediaType === "tv") {
      return `tv/${id}/rating?api_key=${API_KEY}&guest_session_id=${userType.sessionId.session_id}`;
    }
  } else {
    if (mediaType === "movie") {
      return `movie/${id}/rating?api_key=${API_KEY}&session_id=${userType.sessionId.session_id}`;
    } else if (mediaType === "tv") {
      return `tv/${id}/rating?api_key=${API_KEY}&session_id=${userType.sessionId.session_id}`;
    }
  }
}

export function getImages(id, mediaType) {
  if (mediaType === "movie") {
    return `movie/${id}/images?api_key=${API_KEY}&language=es-SP`;
  } else if (mediaType === "tv") {
    return `tv/${id}/images?api_key=${API_KEY}&language=es-SP`;
  }
}
