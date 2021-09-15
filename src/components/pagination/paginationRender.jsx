import React from "react";
import { pagination } from "./pagination"
import "./pagination.css"

function RenderPagination({ total, current, pagePerview = 0, rightClick, leftClick, pageClick }) {
    let arr = pagination(total, current, pagePerview)
    //state на куррент
    console.log(`current:${current}`);
    return <div className="pagination">
        {arr.map((el, i) => {
            if (el === 'LEFT') {
                return <div className="pagination-element" key={i} data-value={el} onClick={leftClick}>{el}</div>
            }
            if (el === "RIGHT") {
                return <div className="pagination-element" key={i} data-value={el} onClick={rightClick}>{el}</div>
            }
            return <div className="pagination-element" key={i} data-value={el} onClick={pageClick}>{el}</div>

        })}

    </div>
}

export { RenderPagination }