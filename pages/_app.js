import { StateProvider } from "../context/StateProvider";
import reducer, { initialState } from "../context/reducer";
import Navbar from "../components/organisms/Navbar/Navbar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/themes";

import GlobalStyles from "../globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyles />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </StateProvider>
  );
}

export default MyApp;
