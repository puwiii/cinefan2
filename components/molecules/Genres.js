import { useEffect, useState } from "react";

import { getGenres } from "../../utils/genres";

import styled from "styled-components";

import { Tag } from "../atoms/Tag";

const GenresStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: ${({ variant }) => {
    switch (variant) {
      case "small":
        return "0.5em";
      default:
        return "0.8em";
    }
  }};
`;

const Genres = ({ mediaGenresId, mediaType, variant }) => {
  const [tags, setTags] = useState(null);
  const [loadingTags, setLoadingTags] = useState(true);

  useEffect(() => {
    getGenres(mediaGenresId, mediaType).then((res) => {
      setTags(res);
      setLoadingTags(false);
    });
  }, []);

  return (
    <GenresStyled variant={variant}>
      {loadingTags ? (
        <Tag variant={variant}>cargando...</Tag>
      ) : (
        tags?.map((tag, index) => (
          <Tag key={index} variant={variant}>
            {tag}
          </Tag>
        ))
      )}
    </GenresStyled>
  );
};

export default Genres;
