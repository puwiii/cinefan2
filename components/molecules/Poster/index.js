import Image from "next/image";

import { Sign } from "../../atoms/Sign";
import { GoVerified } from "react-icons/go";
import { Pharagraph } from "../../atoms/Pharagraph";

import { Rating } from "../../atoms/Rating";
import Genres from "../Genres";

import {
  StyledPoster,
  PosterImage,
  PosterInfo,
  PosterTitle,
  ImageBone,
} from "./Poster.elements";

const index = ({ mediaItem, mediaType = "movie", loader }) => {
  const isWide = mediaItem?.vote_average > 8 ? true : false;

  return (
    <StyledPoster wide={isWide}>
      {isWide ? (
        <>
          <Sign colorIcon="#22ff22">
            <GoVerified />
            muy buena critica
          </Sign>
          <PosterImage>
            <Image
              layout="fill"
              objectFit="cover"
              //   width="1280px"
              //   height="720px"
              src={`https://image.tmdb.org/t/p/w780${mediaItem.poster_path}`}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w300${mediaItem.poster_path}`}
              alt={mediaItem.title ? mediaItem.title : mediaItem.name}
            />
          </PosterImage>
          <PosterInfo>
            <PosterTitle>
              {mediaItem.title ? mediaItem.title : mediaItem.name}
            </PosterTitle>
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
        <>
          {loader ? (
            <ImageBone width="500" height="750" />
          ) : (
            <Image
              layout="responsive"
              width="500px"
              height="750px"
              src={`https://image.tmdb.org/t/p/w500${mediaItem.poster_path}`}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92${mediaItem.poster_path}`}
              alt={mediaItem.title ? mediaItem.title : mediaItem.name}
            />
          )}
        </>
      )}
    </StyledPoster>
  );
};

export default index;
