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
  const [movieDetails, movieVideos, movieReviews] = props.info;

  return (
    <>
      {props.info.length ? (
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
      ) : (
        <h1>No encontrado</h1>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;
    const movieDetailsRequest = await axios.get(getDetails(id, "movie"));
    const movieDetails = movieDetailsRequest.data;

    const movieVideosRequest = await axios.get(getVideos(id, "movie"));
    const movieVideos = movieVideosRequest.data.results;

    const movieReviewsRequest = await axios.get(getReviews(id, "movie"));
    const movieReviews = movieReviewsRequest.data.results;

    return {
      props: {
        info: [movieDetails, movieVideos, movieReviews],
      },
    };
  } catch (error) {
    return { props: { info: [] } };
  }
}
