import { useState, useEffect } from "react";

import Image from "next/image";

import { FiVideoOff } from "react-icons/fi";
import { RiChatOffLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { FcFilmReel } from "react-icons/fc";

import { Title } from "../../atoms/Title";
import { Subtitle } from "../../atoms/Subtitle";
import { Video } from "../../atoms/Video";
import { PrimaryButton } from "../../atoms/PrimaryButton";
import Poster from "../../molecules/Poster";

import {
  BackgroundPlayer,
  BackgroundPlayerMessage,
  BackgroundPlayerButton,
  DetailsContainer,
  DetailsHeader,
  DetailsInfo,
  DetailsOverview,
  DetailsMain,
  DetailsPoster,
  DetailsAside,
  DetailsAsideVideos,
  DetailsOverviewGenres,
  DeatilsAsideCompanies,
  Companies,
  Company,
  CompanyName,
  CompanyLogoPlaceholder,
  CompanyImage,
  StatusTag,
  DetailsReviews,
  Review,
  ReviewUser,
  UserImage,
  UserName,
} from "./Details.elements";
import { Pharagraph } from "../../atoms/Pharagraph";
import { Rating } from "../../atoms/Rating";
import { Tag } from "../../atoms/Tag";
const Index = ({ mediaDetails, mediaVideos, mediaReviews, mediaType }) => {
  const [video, setVideo] = useState(null);

  const [isDecorative, setIsDecorative] = useState(true);

  useEffect(() => {
    let trailer;

    trailer = mediaVideos.find((video) => {
      return video.type === "Trailer";
    });

    if (trailer === undefined) {
      trailer = mediaVideos.find((video) => {
        return video.type === "Teaser";
      });
    }
    setVideo(trailer);
  }, [mediaVideos]);

  return (
    <>
      <BackgroundPlayer isDecorative={isDecorative}>
        {video === undefined ? (
          <BackgroundPlayerMessage>
            <FiVideoOff /> sin video
          </BackgroundPlayerMessage>
        ) : (
          <>
            {isDecorative && (
              <BackgroundPlayerButton>
                <PrimaryButton onClick={(e) => setIsDecorative(false)}>
                  <FaPlay />
                  Reproducir
                </PrimaryButton>
              </BackgroundPlayerButton>
            )}
            <Video
              videoId={video?.id}
              videoKey={video?.key}
              isDecorative={isDecorative}
              autoplay={true}
            />
          </>
        )}
      </BackgroundPlayer>
      <DetailsContainer>
        <DetailsMain>
          <DetailsHeader>
            <Title>{mediaDetails.title || mediaDetails.name}</Title>
            <Subtitle>{mediaDetails.tagline}</Subtitle>
          </DetailsHeader>
          <DetailsInfo>
            <DetailsPoster>
              <Poster
                mediaItem={mediaDetails}
                mediaType="movie"
                isLink={false}
                noWide={true}
              />
            </DetailsPoster>
            <DetailsOverview>
              <StatusTag>Status: {mediaDetails.status}</StatusTag>
              <Subtitle>Descripción</Subtitle>
              <Pharagraph>{mediaDetails.overview}</Pharagraph>
              <Rating
                value={mediaDetails.vote_average}
                votes={mediaDetails.vote_count}
              />
              <DetailsOverviewGenres>
                {mediaDetails.genres.map((genre, index) => (
                  <Tag key={index}>{genre.name}</Tag>
                ))}
              </DetailsOverviewGenres>
            </DetailsOverview>
          </DetailsInfo>
          <DetailsReviews>
            <Subtitle>Comentarios</Subtitle>
            {mediaReviews.length === 0 && (
              <Pharagraph
                style={{ display: "flex", alignItems: "center", gap: ".87em" }}
              >
                <RiChatOffLine />
                Sin comentarios aún
              </Pharagraph>
            )}
            {mediaReviews.map((review, index) => (
              <Review key={index}>
                <ReviewUser>
                  <UserImage>
                    <Image
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      quality={10}
                      src={
                        review.author_details.avatar_path
                          ? review.author_details.avatar_path.includes(
                              "secure.gravatar.com"
                            )
                            ? review.author_details.avatar_path.slice(1)
                            : `https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`
                          : "https://localripplenet.com/images/default_user_img.jpg"
                      }
                      // placeholder="blur"
                      // blurDataURL={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      alt={review.author_details.username}
                    />
                  </UserImage>
                  <UserName>{review.author_details.username}</UserName>
                </ReviewUser>
                <Pharagraph>{review.content}</Pharagraph>
              </Review>
            ))}
          </DetailsReviews>
        </DetailsMain>
        <DetailsAside>
          <Companies>
            {mediaDetails.production_companies.map((company, index) => (
              <Company key={index} title={company.name}>
                <CompanyImage>
                  {!company.logo_path ? (
                    <>
                      <CompanyLogoPlaceholder>
                        <FcFilmReel /> Film Company
                      </CompanyLogoPlaceholder>
                      <Pharagraph>{company.name}</Pharagraph>
                    </>
                  ) : (
                    <Image
                      width="200%"
                      height="100%"
                      layout="fixed"
                      objectFit="contain"
                      quality={10}
                      src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      // placeholder="blur"
                      // blurDataURL={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      alt={company.name}
                    />
                  )}
                </CompanyImage>
                {/* <CompanyName>{company.name}</CompanyName> */}
              </Company>
            ))}
          </Companies>
          {/* <DetailsAsideVideos>
              <Subtitle>Videos</Subtitle>
              {mediaVideos.map((video, index) => (
                <Video
                  key={index}
                  videoId={video?.id}
                  videoKey={video?.key}
                  isDecorative={false}
                  autoplay={false}
                />
              ))}
            </DetailsAsideVideos> */}
        </DetailsAside>
      </DetailsContainer>
    </>
  );
};

export default Index;
