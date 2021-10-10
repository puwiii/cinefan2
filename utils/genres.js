import React, { useEffect, useState } from "react";
import axios from "axios";
import { requests } from "../requests";

export const getGenres = async (genresIDs, type) => {
  let genres = [""];

  if (type === "movie") {
    genres = await axios.get(requests.fetchGenresMovies);
  } else if (type === "tv") {
    genres = await axios.get(requests.fetchGenresSeries);
  } else {
    return;
  }

  const genresNameFinded = [];

  genres.data.genres.map((item) => {
    genresIDs.map((genre) => {
      if (item.id === genre) {
        genresNameFinded.push(item.name);
      }
    });
  });

  return genresNameFinded;
};
