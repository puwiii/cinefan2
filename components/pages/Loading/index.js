import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { Logo } from "../../atoms/Logo";
import { Pharagraph } from "../../atoms/Pharagraph";

import {
  LoadingPage,
  LoadingComponent,
  AnimationBox,
} from "./Loading.elements";

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

    animation.setSpeed(1.5);
  }, []);

  return (
    <LoadingPage>
      <LoadingComponent>
        <AnimationBox ref={animationBox} />
        <Logo variant="small" />
        <Pharagraph>cargando información...</Pharagraph>
      </LoadingComponent>
    </LoadingPage>
  );
};

export default Index;
