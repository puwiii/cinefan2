// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Router from "next/router";
import Head from "next/head";

import Series from "../../components/pages/Series";

export default function Index() {
  const [pageNumber, setPageNumber] = useState(null);
  const [sort, setSort] = useState(null);

  useEffect(() => {
    !Router.query.sort &&
      Router.replace(`${Router.pathname}?sort=fetchSeriesPopularPage`);

    Router.query.page
      ? setPageNumber(Number(Router.query.page))
      : setPageNumber(1);

    Router.query.sort
      ? setSort(Router.query.sort)
      : setSort("fetchSeriesPopularPage");
  }, []);

  return (
    <>
      <Head>
        <title>Series | Cinefan 2</title>
      </Head>

      <Series mediaType="tv" page={pageNumber} sort={sort} />
    </>
  );
}
