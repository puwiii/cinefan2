import { Rating } from "../../atoms/Rating";
import { Pharagraph } from "../../atoms/Pharagraph";
import { Sign } from "../../atoms/Sign";
import { Title } from "../../atoms/Title";
import { Link } from "../../atoms/Link";
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
const Banner = ({ mediaItem, mediaType, tag, iconTag, colorIcon, loader }) => {
  const urlBaseImage = "https://image.tmdb.org/t/p/original";

  return (
    <StyledBanner loader={loader}>
      {!loader && (
        <Link href={`/${mediaType}?id=${mediaItem.id}`}>
          {tag && (
            <Sign colorIcon={colorIcon}>
              {iconTag}
              {tag}
            </Sign>
          )}
          <BannerInfo>
            <Title>{mediaItem.title ? mediaItem.title : mediaItem.name}</Title>
            <Pharagraph crop={6}>{mediaItem.overview}</Pharagraph>

            <Genres mediaGenresId={mediaItem.genre_ids} mediaType={mediaType} />

            <Rating
              value={mediaItem.vote_average}
              votes={mediaItem.vote_count}
            />
            <PrimaryButton>
              <FiPlay />
              Mas info
            </PrimaryButton>
          </BannerInfo>
          <BannerImage
            background={`${urlBaseImage}${mediaItem.backdrop_path}`}
          ></BannerImage>
        </Link>
      )}
    </StyledBanner>
  );
};

export default Banner;
