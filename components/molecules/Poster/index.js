import Image from "next/image";

import { Sign } from "../../atoms/Sign";
import { GoVerified } from "react-icons/go";
import { Pharagraph } from "../../atoms/Pharagraph";
import { Link } from "../../atoms/Link";

import { Rating } from "../../atoms/Rating";
import Genres from "../Genres";

import {
  StyledPoster,
  PosterImage,
  PosterInfo,
  PosterTitle,
  ImageBone,
} from "./Poster.elements";

const index = ({
  mediaItem,
  mediaType = "movie",
  loader,
  isLink = true,
  noWide = false,
}) => {
  const isWide = noWide ? false : mediaItem?.vote_average > 8 ? true : false;

  return (
    <StyledPoster wide={isWide} isLink={isLink}>
      {isWide ? (
        <>
          <Link
            href={
              mediaType === "movie"
                ? `/movies/${mediaItem.id}`
                : `/series/${mediaItem.id}`
            }
          >
            <PosterImage>
              <Image
                layout="responsive"
                objectFit="cover"
                width="500px"
                height="750px"
                quality={20}
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
            <Sign colorIcon="#22ff22">
              <GoVerified />
              muy buena critica
            </Sign>
          </Link>
        </>
      ) : (
        <>
          {loader ? (
            <ImageBone width="500" height="750" />
          ) : (
            <>
              {isLink ? (
                <Link
                  href={
                    mediaType === "movie"
                      ? `/movies/${mediaItem.id}`
                      : `/series/${mediaItem.id}`
                  }
                >
                  <Image
                    layout="responsive"
                    width="500px"
                    height="750px"
                    quality={20}
                    src={`https://image.tmdb.org/t/p/w342${mediaItem.poster_path}`}
                    placeholder="blur"
                    blurDataURL={`https://image.tmdb.org/t/p/w92${mediaItem.poster_path}`}
                    alt={mediaItem.title ? mediaItem.title : mediaItem.name}
                  />
                </Link>
              ) : (
                <>
                  <Image
                    layout="responsive"
                    width="500px"
                    height="750px"
                    quality={100}
                    src={`https://image.tmdb.org/t/p/w500${mediaItem.poster_path}`}
                    placeholder="blur"
                    blurDataURL={`https://image.tmdb.org/t/p/w92${mediaItem.poster_path}`}
                    alt={mediaItem.title ? mediaItem.title : mediaItem.name}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </StyledPoster>
  );
};

export default index;
