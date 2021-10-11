import { useEffect, useState } from "react";
import Router from "next/router";
import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";
import Navbar from "../components/organisms/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/themes";

import GlobalStyles from "../globalStyles";

import LoadingPage from "../components/pages/Loading";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Navbar />
        {loading ? <LoadingPage /> : <Component {...pageProps} />}
      </ThemeProvider>
    </StateProvider>
  );
}

export default MyApp;
