import { requests } from "../../../requests";

import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = await axios.get(requests.fetchMostPopularMovies);

    // let movies = [];

    // data.data.results.forEach((movie) => {
    //   const {
    //     backdrop_path,
    //     genre_ids,
    //     id,
    //     original_language,
    //     original_title,
    //   } = movie;

    //   movies.push({
    //     banner: backdrop_path,
    //     genresIds: genre_ids,
    //     id: id,
    //     originalLanguage: original_language,
    //     originalTitle: original_title,
    //   });
    // });

    // console.log(movies);

    res.status(200).json(data.data.results);
  } catch (error) {}
}
