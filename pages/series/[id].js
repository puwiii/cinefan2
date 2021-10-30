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
  const [tvDetails, tvVideos, tvReviews] = props.info;

  console.log(tvVideos);

  return (
    <>
      {props.info.length ? (
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
      ) : (
        <h1>No encontrado</h1>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.query;

    const tvDetailsRequest = await axios.get(getDetails(id, "tv"));
    const tvDetails = tvDetailsRequest.data;

    const tvVideosRequest = await axios.get(getVideos(id, "tv"));
    const tvVideos = tvVideosRequest.data.results;

    const tvReviewsRequest = await axios.get(getReviews(id, "tv"));
    const tvReviews = tvReviewsRequest.data.results;

    return {
      props: {
        info: [tvDetails, tvVideos, tvReviews],
      },
    };
  } catch (error) {
    return { props: { info: [] } };
  }
}
