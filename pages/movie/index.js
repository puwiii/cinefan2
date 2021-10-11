import React from "react";
import { useRouter } from "next/router";
import { getDetails, getImages, getVideos, requests } from "../../requests";
import axios from "axios";
import { Link } from "../../components/atoms/Link";

export default function Index(props) {
  const { movieDetails, movieVideos, movieImages } = props;
  console.log(props);
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <div>
      <h1>pelicula con id {movieDetails?.id}</h1>
      <Link href={`/movie?id=550988`}>IR A FREE GUY</Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const movieDetailsRequest = await axios.get(getDetails(id, "movie"));
  const movieDetails = movieDetailsRequest.data;

  const movieVideosRequest = await axios.get(getVideos(id, "movie"));
  const movieVideos = movieVideosRequest.data;

  const movieImagesRequest = await axios.get(getImages(id, "movie"));
  const movieImages = movieImagesRequest.data;

  return {
    props: {
      movieDetails: movieDetails,
      movieVideos: movieVideos,
      movieImages: movieImages,
    },
  };
}
