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
  const { tvDetails, tvVideos, tvImages, tvReviews } = props;

  return (
    <>
      <Head>
        <title>{tvDetails.title || tvDetails.name} | Cinefan 2</title>
      </Head>
      <Details
        mediaDetails={tvDetails}
        mediaVideos={tvVideos}
        mediaReviews={tvReviews}
        mediaType="tv"
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;

  const tvDetailsRequest = await axios.get(getDetails(id, "tv"));
  const tvDetails = tvDetailsRequest.data;

  const tvVideosRequest = await axios.get(getVideos(id, "tv"));
  const tvVideos = tvVideosRequest.data.results;

  const tvReviewsRequest = await axios.get(getReviews(id, "tv"));
  const tvReviews = tvReviewsRequest.data.results;

  const tvImagesRequest = await axios.get(getImages(id, "tv"));
  const tvImages = tvImagesRequest.data;

  return {
    props: {
      tvDetails: tvDetails,
      tvVideos: tvVideos,
      tvImages: tvImages,
      tvReviews: tvReviews,
    },
  };
}
