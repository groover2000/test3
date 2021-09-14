import React from "react";
import PropTypes from "prop-types";
import "./Card.css"
import { Link } from "react-router-dom";

Card.propTypes = {
    
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string)

}


function Card({id, imgUrl, title, year, genres, summary}) {

    return (<div className="card">
    <Link
    to = {{
        pathname: `/movie/${id}`,
        state: {
            id,
            imgUrl,
            title,
            year,
            genres,
            summary
        }

    }}>
    
        <div className="card-top" >
            <img src={imgUrl} alt="film" />
        </div>
        <div className="card-bottom">
            <p className="card-title">{title}</p>
            <p className="card-year">{year}</p>
            <p className="card-genres">{genres}</p>
            <p className="card-summary">{summary.slice(0,140)}</p>
        </div>
    
    </Link>
    </div>
)}


export {Card}