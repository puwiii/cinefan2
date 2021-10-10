import { Rating } from "../../atoms/Rating";
import { Pharagraph } from "../../atoms/Pharagraph";
import Genres from "../Genres";

import { FiPlay } from "react-icons/fi";

import { PrimaryButton } from "../../atoms/PrimaryButton";

import {
  StyledBanner,
  Tag,
  BannerInfo,
  BannerTitle,
  BannerImage,
} from "./Banner.elements";

//mediaType is tv or movie
const Banner = ({ mediaItem, mediaType, tag, iconTag }) => {
  const urlBaseImage = "https://image.tmdb.org/t/p/original";

  return (
    <StyledBanner>
      {tag && (
        <Tag>
          {iconTag}
          {tag}
        </Tag>
      )}
      <BannerInfo>
        <BannerTitle>{mediaItem.title}</BannerTitle>
        <Pharagraph crop={6}>{mediaItem.overview}</Pharagraph>

        <Genres mediaGenresId={mediaItem.genre_ids} mediaType={mediaType} />

        <Rating value={mediaItem.vote_average} votes={mediaItem.vote_count} />
        <PrimaryButton>
          <FiPlay />
          Mas info
        </PrimaryButton>
      </BannerInfo>
      <BannerImage
        background={`${urlBaseImage}${mediaItem.backdrop_path}`}
      ></BannerImage>
    </StyledBanner>
  );
};

export default Banner;
