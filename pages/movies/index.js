// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Router from "next/router";
import Head from "next/head";

import Movies from "../../components/pages/Movies";

export default function Index() {
  const [pageNumber, setPageNumber] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    !Router.query.sort &&
      Router.replace(`${Router.pathname}?sort=fetchMoviesPopularPage`);

    Router.query.page
      ? setPageNumber(Number(Router.query.page))
      : setPageNumber(1);

    Router.query.sort
      ? setSort(Router.query.sort)
      : setSort("fetchMoviesPopularPage");
  }, []);

  return (
    <>
      <Head>
        <title>Peliculas | Cinefan 2</title>
      </Head>

      <Movies mediaType="movie" page={pageNumber} sort={sort} />
    </>
  );
}
