import { useState } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";

import { darkTheme } from "../themes";

const YouTubePlayer = styled(YouTube)`
  width: 100%;
  max-width: ${({ isDecorative }) => (isDecorative ? "100%" : "1400px;")};
  height: ${({ isDecorative }) => (isDecorative ? "100%" : "100%")};
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  pointer-events: ${({ isDecorative }) => isDecorative && "none"};
  margin-top: ${({ isDecorative }) => isDecorative && "-200px"};
  align-self: center;
  opacity: ${({ opacity }) => opacity};
  position: ${({ isDecorative }) => (isDecorative ? "auto" : "block")};
  z-index: 4000;
  transition: all 200ms ease-in-out;

  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Video = ({
  videoKey,
  videoId,
  isDecorative = false,
  aspectRatio = "16 / 9",
  autoplay = true,
}) => {
  const [opacity, setOpacity] = useState(isDecorative ? 0 : 1);

  const opts = {
    loop: isDecorative ? 1 : 0,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      disablekb: isDecorative ? 1 : 0,
      controls: isDecorative ? 0 : 1,
      color: "white",
    },
  };

  const onReady = (event) => {
    event.target.setVolume(0);
  };

  const showVideo = () => {
    setOpacity(1);
  };

  const repeatVideo = (event) => {
    event.target.playVideo();
  };

  return (
    <YouTubePlayer
      opacity={opacity}
      isDecorative={isDecorative}
      aspectRatio={aspectRatio}
      id={videoId}
      videoId={videoKey}
      opts={opts}
      onReady={isDecorative ? onReady : () => {}}
      onPlay={showVideo}
      onPause={showVideo}
      onEnd={isDecorative ? repeatVideo : () => {}}
    />
  );
};
