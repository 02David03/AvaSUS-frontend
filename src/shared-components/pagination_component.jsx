import React, { useEffect } from "react";
import { IconButton, Button, ButtonGroup } from "@material-tailwind/react";

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

  const checkPaginationIntegrity = () => {
    if (currentPage > pagesCount) {
      setCurrentPage(pagesCount);
    } else if( currentPage < 1) {
      setCurrentPage(1);
    }
  }

  let isPageNumberOutOfRange;

  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers =  Math.abs(pageNumber - currentPage) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <IconButton
        className={(pageNumber === currentPage ? 'bg-red text-white ' : 'bg-white-dark text-f-black-light ') + ' !border-gray !font-semibold text-lg xl:h-10 h-9 focus:ring-0'}
        key={pageNumber}
        onClick={() => onPageNumberClick(pageNumber)}>
          {pageNumber}
        </IconButton>
      );
    }


    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return <IconButton key={pageNumber} className="muted bg-white-dark border-gray !font-semibold xl:h-10 h-9 text-lg focus:ring-0"> ... </IconButton> 
    }

    return null;
  });

  useEffect(checkPaginationIntegrity, [currentPage, pagesCount, setCurrentPage]);

  return (
      <ButtonGroup className={className + ' rounded-3xl'} variant="outlined" size="md">
        <Button
        className={"flex items-center border-gray bg-white-dark gap-2 xl:h-10 h-9 py-0 px-3"}
        onClick={onPreviousPageClick}
        disabled={isCurrentPageFirst}>
          <p className="text-center text-nowrap !font-semibold"> &lt; Anterior </p>
        </Button>

        {pageNumbers}

        <Button 
        className="flex items-center border-gray bg-white-dark gap-2 xl:h-10 h-9 py-0"
        onClick={onNextPageClick}
        disabled={isCurrentPageLast}>
          <p className="text-center text-nowrap !font-semibold"> Próximo &gt; </p>
        </Button>
      </ButtonGroup>
  );
};

export default PaginationComponent;