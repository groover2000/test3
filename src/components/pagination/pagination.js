import {range} from "../../helpers/range"

function pagination(totalPages, currentPage, pagePerView = 0) {
    const LEFT_PAGE = 'LEFT';
    const RIGHT_PAGE = 'RIGHT';

    const totalNumbers = (pagePerView *2) + 3;      //  totalNumbers: the total page numbers to show on the control                 
    const totalBlocks = totalNumbers + 2;         //  totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     
   

    if(totalPages > totalBlocks){
        const startPage = Math.max(2, currentPage - pagePerView);
        const endPage = Math.min(totalPages-1, currentPage + pagePerView);
        let pages = range(startPage, endPage);
        console.log(endPage)
        console.log(`start${startPage}`)

        const hasLeftSpill = startPage > 2;                     // * hasLeftSpill: has hidden pages to the left
        const hasRightSpill = (totalPages - endPage) > 1;       // * hasRightSpill: has hidden pages to the right
        const spillOffset = totalNumbers - (pages.length + 1);  // * spillOffset: number of hidden pages either to the left or to the right

        switch(true) {
            case (hasLeftSpill && !hasRightSpill): {
                const extraPages = range(startPage - spillOffset, startPage-1);
                pages = [LEFT_PAGE, ...extraPages, ...pages];
                break;
            }
            case (!hasLeftSpill && hasRightSpill): {
                const extraPages = range(endPage  +1, endPage + spillOffset);
                pages = [...pages, ...extraPages, RIGHT_PAGE];
                break;
            }
            case (hasLeftSpill && hasRightSpill): 
            default: {
                // const extraPages = range(startPage, endPage)
                pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                break;
            }
        }

        return [1, ...pages, totalPages];
        
    }
    return range(1, totalPages);
}


export {pagination}