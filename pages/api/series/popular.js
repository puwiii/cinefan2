import { requests } from "../../../requests";

import axios from "axios";

export default async function handler(req, res) {
  try {
    const data = await axios.get(requests.fetchMostPopularTV);

    res.status(200).json(data.data.results);
  } catch (error) {}
}
