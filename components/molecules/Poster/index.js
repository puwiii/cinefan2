import Image from "next/image";

import { Pharagraph } from "../../atoms/Pharagraph";

import { Rating } from "../../atoms/Rating";
import Genres from "../Genres";

import {
  StyledPoster,
  PosterImage,
  PosterInfo,
  PosterTitle,
} from "./Poster.elements";

const index = ({ mediaItem, mediaType = "movie" }) => {
  const isWide = mediaItem.vote_average > 7.8 ? true : false;

  return (
    <StyledPoster wide={isWide}>
      {isWide ? (
        <>
          <PosterImage>
            <Image
              layout="fill"
              objectFit="cover"
              //   width="1280px"
              //   height="720px"
              src={`https://image.tmdb.org/t/p/w780${mediaItem.poster_path}`}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w300${mediaItem.poster_path}`}
            />
          </PosterImage>
          <PosterInfo>
            <PosterTitle>{mediaItem.title}</PosterTitle>
            <Pharagraph textAling="left" crop={5}>
              {mediaItem.overview}
            </Pharagraph>
            <Rating
              value={mediaItem.vote_average}
              votes={mediaItem.vote_count}
            />
            <Genres
              variant="small"
              mediaGenresId={mediaItem.genre_ids}
              mediaType={mediaType}
            />
          </PosterInfo>
        </>
      ) : (
        <Image
          layout="responsive"
          width="500px"
          height="750px"
          src={`https://image.tmdb.org/t/p/w500${mediaItem.poster_path}`}
          placeholder="blur"
          blurDataURL={`https://image.tmdb.org/t/p/w92${mediaItem.poster_path}`}
        />
      )}
    </StyledPoster>
  );
};

export default index;
