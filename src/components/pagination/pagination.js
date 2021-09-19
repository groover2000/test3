import { useState } from "react";

import "./pagination.css";

const Pagination = ({
  totalPages,
  currentPage,
  pageClick,
  leftClick,
  rightClick,
}) => {
  const pages = [];
  const [pageLimit, setPageLimit] = useState(5);
  const [maxPageLimit, setMaxPageLimit] = useState(5);
  const [minPageLimit, setMinPageLimit] = useState(0);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  // const indexOfLastItem = currentPage * itemsPerView
  // const indexxOfFirstItem = indexOfLastItem - itemsPerView;
  // const currentItems = pages.slice(indexxOfFirstItem, indexOfLastItem)

  const renderPagination = pages.map((el) => {
    if (el < maxPageLimit + 1 && el > minPageLimit) {
      return (
        <div
          key={el}
          data-value={el}
          className={currentPage == el ? "active" : "pagination-element"}
          onClick={pageClick}
        >
          {el}
        </div>
      );
    }
  });

  if (currentPage > maxPageLimit) {
    setMaxPageLimit(maxPageLimit + pageLimit);
    setMinPageLimit(minPageLimit + pageLimit);
  }

  if (currentPage - 1 < minPageLimit) {
    setMaxPageLimit(maxPageLimit - pageLimit);
    setMinPageLimit(minPageLimit - pageLimit);
  }

  return (
    <div className="pagination">
      <div className="pagination-element" onClick={leftClick}>
        prev
      </div>
      {renderPagination}
      <div className="pagination-element" onClick={rightClick}>
        next
      </div>
    </div>
  );
};

export { Pagination };

// function Pagination(totalPages, currentPage, pagePerView = 0) {
//     const LEFT_PAGE = 'LEFT';
//     const RIGHT_PAGE = 'RIGHT';
//     let pages = [];

//     const totalNumbers = (pagePerView * 2) + 3;      //  totalNumbers: the total page numbers to show on the control
//     const totalBlocks = totalNumbers + 2;         //  totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls

//     if(totalPages > totalBlocks){
//         const startPage = Math.max(2, currentPage - pagePerView);
//         const endPage = Math.min(totalPages-1, currentPage + pagePerView);
//         pages = range(startPage, endPage);

//         // console.log(`totalPages ${totalPages}`)
//         // console.log(`pagePerView ${pagePerView}`)
//         // console.log(`currentPage ${currentPage}`)
//         // console.log(`start ${startPage}`)
//         // console.log(`end ${endPage}`)
//         // console.log(`pages ${pages}`)

//         const hasLeftSpill = startPage > 2;                     // * hasLeftSpill: has hidden pages to the left
//         const hasRightSpill = (totalPages - endPage) > 1;       // * hasRightSpill: has hidden pages to the right
//         const spillOffset = totalNumbers - (pages.length + 1);  // * spillOffset: number of hidden pages either to the left or to the right
//         // console.log(`hasleft ${hasLeftSpill}`)
//         // console.log(`hasright ${hasRightSpill}`)
//         // console.log(`spillOfset ${spillOffset}`)
//         switch(true) {
//             case (hasLeftSpill && !hasRightSpill): {
//                 const extraPages = range(startPage - spillOffset, startPage-1);
//                 pages = [LEFT_PAGE, ...extraPages, ...pages];
//                 console.log(`pages ${pages}`)
//                 break;
//             }
//             case (!hasLeftSpill && hasRightSpill): {
//                 const extraPages = range(endPage  +1, endPage + spillOffset);
//                 pages = [...pages, ...extraPages, RIGHT_PAGE];
//                 console.log(`pages ${pages}`)
//                 break;
//             }
//             case (hasLeftSpill && hasRightSpill):
//             default: {

//                 pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
//                 console.log(`pages ${pages}`)
//                 break;
//             }
//         }

//         return [1, ...pages, totalPages];

//     }
//     return range(1, totalPages);
// }
