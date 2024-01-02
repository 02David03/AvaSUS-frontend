import React, { useEffect } from "react";
import { IconButton, ButtonGroup } from "@material-tailwind/react";

const PaginationComponent = ({
  itemsCount,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  className=''
}) => {
  const pagesCount = Math.ceil(itemsCount / itemsPerPage);
  const isCurrentPageFirst = currentPage === 1;
  const isCurrentPageLast = currentPage === pagesCount;
  
  const changePage = number => {
    if (currentPage === number) return;
    setCurrentPage(number);
  };

  const onPageNumberClick = pageNumber => {
    changePage(pageNumber);
  };

  const onPreviousPageClick = () => {
    changePage(currentPage => currentPage - 1);
  };

  const onNextPageClick = () => {
    changePage(currentPage => currentPage + 1);
  };

  const setLastPageAsCurrent = () => {
    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    }
  };

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =
      Math.abs(pageNumber - currentPage) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <IconButton 
          key={pageNumber} 
          onClick={() => onPageNumberClick(pageNumber)}
          active={pageNumber === currentPage}> 
          {pageNumber} 
        </IconButton>
      );
    }


    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <IconButton key={pageNumber} className="muted" /> 
    }

    return null;
  });

  useEffect(setLastPageAsCurrent, [pagesCount]);

  return (
      <ButtonGroup className={className} variant="outlined">
        <IconButton
          onClick={onPreviousPageClick}
          disabled={isCurrentPageFirst}>
          <p> &lt; Anterior </p>
        </IconButton>
        {pageNumbers}

        <IconButton 
          onClick={onNextPageClick}
          disabled={isCurrentPageLast}>
          <p> Próximo &gt; </p>
        </IconButton>
      </ButtonGroup>
  );
};

export default PaginationComponent;