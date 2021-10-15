import { useEffect, useRef } from "react";
import Head from "next/head";
import Lottie from "lottie-web";
import SyncLoader from "react-spinners/SyncLoader";

import { darkTheme } from "../../themes";

import {
  LoadingPage,
  LoadingComponent,
  AnimationBox,
} from "./Loading.elements";

// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

const Index = () => {
  const animationBox = useRef();

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: animationBox.current,
      renderer: "svg",
      loop: true,
      autoplay: true,

      animationData: require(`../../animations/loadingAnimation.json`),
    });

    animation.setSpeed(2);
  }, []);

  return (
    <LoadingPage>
      <Head>
        <title>Cinefan 2 | Movies | Series | Trailers | More + ...</title>
      </Head>
      <LoadingComponent>
        <AnimationBox ref={animationBox} />
        <SyncLoader
          color={darkTheme.color_primary_400}
          loading={true}
          size={10}
        />
      </LoadingComponent>
    </LoadingPage>
  );
};

export default Index;
