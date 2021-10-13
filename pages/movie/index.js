// import { useRouter } from "next/router";
import Head from "next/head";
import {
  getDetails,
  getImages,
  getReviews,
  getVideos,
  requests,
} from "../../requests";
import axios from "axios";

import Details from "../../components/pages/Details";

export default function Index(props) {
  const { movieDetails, movieVideos, movieImages, movieReviews } = props;

  return (
    <>
      <Head>
        <title>{movieDetails.title || movieDetails.name} | Cinefan 2</title>
      </Head>
      <Details
        mediaDetails={movieDetails}
        mediaVideos={movieVideos}
        mediaReviews={movieReviews}
        mediaType="movie"
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const movieDetailsRequest = await axios.get(getDetails(id, "movie"));
  const movieDetails = movieDetailsRequest.data;

  const movieVideosRequest = await axios.get(getVideos(id, "movie"));
  const movieVideos = movieVideosRequest.data.results;

  const movieReviewsRequest = await axios.get(getReviews(id, "movie"));
  const movieReviews = movieReviewsRequest.data.results;

  const movieImagesRequest = await axios.get(getImages(id, "movie"));
  const movieImages = movieImagesRequest.data;

  return {
    props: {
      movieDetails: movieDetails,
      movieVideos: movieVideos,
      movieImages: movieImages,
      movieReviews: movieReviews,
    },
  };
}
