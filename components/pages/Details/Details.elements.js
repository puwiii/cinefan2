import styled from "styled-components";

import { Container } from "../../../globalStyles";

export const BackgroundPlayer = styled.div`
  text-align: center;
  width: 100%;
  background: ${({ isDecorative }) => (isDecorative ? "black" : "transparent")};
  padding: ${({ isDecorative }) => (isDecorative ? "0" : "10px 0")};
  margin-bottom: ${({ isDecorative }) => (isDecorative ? "0" : "80px;")};
  max-height: ${({ isDecorative }) => (isDecorative ? "50vh" : "100%")};
  height: 100%;
  overflow: hidden;
  position: relative;

  transition: background 1s linear;

  ${({ isDecorative, theme }) =>
    isDecorative &&
    `

    
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(0,0,0,1) 100%
    );
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 200;
    background: rgba(0, 0, 0, 0.7);
  }
  `}
`;

export const BackgroundPlayerMessage = styled.span`
  display: flex;
  align-items: center;
  gap: 0.87em;
  font-size: 1.5em;
  font-weight: 300;
  opacity: 0.4;
  /* position: absolute;
  left: 50%;
  top: 50%; */
  /* transform: translate(-50%, -50%); */
  z-index: 1500;
  height: 50vh;
  width: 100%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 30vh;
  }
`;

export const DetailsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  gap: 80px;
  margin-top: -50px;
  position: relative;
  z-index: 2000;
  padding-bottom: 60px;
`;

export const DetailsHeader = styled.header`
  position: relative;
  z-index: 1000;
  /* margin-top: -50px; */
  display: flex;
  font-size: 2em;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
`;

export const BackgroundPlayerButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.87em;
  font-size: 1.5em;
  font-weight: 300;
  opacity: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1500;
`;

export const DetailsMain = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4em;
  position: relative;
  z-index: 1000;
`;

export const DetailsPoster = styled.figure`
  flex: 3;
`;

export const DetailsInfo = styled.section`
  display: flex;
  gap: 2em;
`;

export const DetailsOverview = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 6;
`;

export const DetailsOverviewGenres = styled.div`
  display: flex;
  gap: 1em;
`;

export const DetailsAside = styled.aside`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1em;
  border-radius: 7px;
`;

export const DetailsAsideVideos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Companies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: stretch;
  align-self: flex-end;
`;

export const Company = styled.div`
  border-radius: 4px;
  background: ${({ theme }) => theme.color_background_300};
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  padding: 1em;
`;

export const CompanyLogoPlaceholder = styled.span`
  padding: 1.5em 0;
  font-size: 1.2rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  gap: 0.67em;
  white-space: nowrap;
`;

export const CompanyImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const CompanyName = styled.span`
  font-size: 0.8rem;
`;

export const StatusTag = styled.span`
  align-self: flex-end;
  border-radius: 100px;
  font-weight: 400;
  padding: 0.47em 0.87em;
  position: absolute;
  background: ${({ theme }) => theme.color_success};
`;

export const DetailsReviews = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Review = styled.article`
  display: flex;
  gap: 2em;
  border-bottom: 1px solid ${({ theme }) => theme.color_background_300};
  padding: 1em 0;
`;

export const ReviewUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
`;

export const UserImage = styled.figure`
  background: ${({ theme }) => theme.color_background_300};
  border-radius: 50%;
  overflow: hidden;
  width: 75px;
  height: 75px;
`;

export const UserName = styled.span`
  font-size: 0.6rem;
`;
