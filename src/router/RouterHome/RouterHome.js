import {React, useState, useEffect} from "react";
import './RouterHome.css';
import { Card } from "../../components/Card/Card";
// import {getFilms, movies} from "./../../api/getFetch.js"

function RouterHome(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])

    const getFilms = async () => {
        const response = await (await fetch('https://yts.mx/api/v2/list_movies.json'))
        const {data: {movies}} = await response.json()
        // console.log(movies)
        setMovies(movies)
        setLoading(false);
        
    }

    useEffect(() => {
        getFilms()
  
    },[] )

    

    if(loading) {
        return <div>Loading...</div>
    }
    return <div className = 'container'> 
    <div className="cards">
    {movies.map((el)=> {
       return <Card 
       key = {el.id} 
       id = {el.id}
       imgUrl = {el.medium_cover_image}
       title = {el.title}
       year = {el.year}
       genres = {el.genres}
       summary = {el.summary}
       />
       
    })}</div>
 </div>
   
     
        
    

}


export {RouterHome}