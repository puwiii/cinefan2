import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/organisms/Navbar/Navbar";
import Homepage from "../components/pages/Homepage/Homepage";
import axios from "axios";
import { requests } from "../requests";

export default function Home(props) {
  const { popularMovies, popularSeries } = props;

  return (
    <>
      <div>
        <Head>
          <title>Cinefan 2 | Movies | Series | Trailers | More + ...</title>
          <meta
            name="description"
            content="Cinefan 2 es una nueva version de Cinefan, nuevo diseño, nuevo esquema y nuevas sensaciones."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* home page */}
        <Navbar />
        <Homepage popularMovies={popularMovies} popularSeries={popularSeries} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const movieRequest = await axios.get(requests.fetchMostPopularMovies);
  const popularMovies = movieRequest.data.results;

  const seriesRequest = await axios.get(requests.fetchMostPopularTV);
  const popularSeries = seriesRequest.data.results;

  return {
    props: {
      popularMovies: popularMovies,
      popularSeries: popularSeries,
    },
  };
}
