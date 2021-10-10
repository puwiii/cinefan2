import { requests } from "../../../requests";

import axios from "axios";

export default async function handler(req, res) {
  const data = await axios.get(requests.fetchLatestMovies, {
    baseURL: "https://api.themoviedb.org/3/",
  });

  res.status(200).json(data.data.results);
}
