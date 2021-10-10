import React, { useEffect } from "react";
import Head from "next/head";

import Navbar from "../components/organisms/Navbar/Navbar";
import Homepage from "../components/pages/Homepage/Homepage";

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
  const movieRequest = await fetch("http://localhost:3000/api/movies/popular");
  const popularMovies = await movieRequest.json();

  const seriesRequest = await fetch("http://localhost:3000/api/series/popular");
  const popularSeries = await seriesRequest.json();

  return {
    props: {
      popularMovies: popularMovies,
      popularSeries: popularSeries,
    },
  };
}
