import router, { Router, useRouter } from "next/router";
import React from "react";

import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { PaginationItem } from "../../atoms/PaginationItem";
import { Link } from "../../atoms/Link";

import { StyledPagination, PaginationBox } from "./Pagination.elements";

const Index = ({ number }) => {
  const router = useRouter();

  return (
    <>
      <PaginationBox>
        {number - 1 > 0 && (
          <Link
            href={`${router.pathname}?sort=${router.query.sort}&page=${
              number - 1
            }`}
            shallow={true}
          >
            <PaginationItem>
              <IoArrowBack />
            </PaginationItem>
          </Link>
        )}
        <PaginationItem active={true}>{number}</PaginationItem>
        {number + 1 <= 500 && (
          <Link
            href={`${router.pathname}?sort=${router.query.sort}&page=${
              number + 1
            }`}
            shallow={true}
          >
            <PaginationItem>
              <IoArrowForward />
            </PaginationItem>
          </Link>
        )}
      </PaginationBox>
    </>
  );
};

export default Index;
