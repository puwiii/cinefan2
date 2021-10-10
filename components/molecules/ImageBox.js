import styled from "styled-components";
import { ImageComponent } from "../atoms/Image";

const ImageContainer = styled.div`
  display: block;
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

export const ImageBox = ({
  width,
  height,
  layout,
  objectFit,
  mediaSource,
  quality = 75,
  alt = "",
}) => {
  return (
    <ImageContainer width={width} height={height}>
      <ImageComponent
        src={mediaSource}
        layout={layout}
        objectFit={objectFit}
        quality={quality}
        alt={alt}
        placeholder="blur"
        blurDataURL={sourceImage}
      ></ImageComponent>
    </ImageContainer>
  );
};
