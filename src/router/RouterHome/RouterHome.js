import {React, useState, useEffect} from "react";
import './RouterHome.css';
import { Card } from "../../components/Card/Card";
import {FetchRequest} from "../../api/getFetch"
import {Loader} from "../../components/Loader/Loader"
import {getPageCount} from "../../helpers/getPageCount"
import {Pagination } from "../../components/pagination/pagination"
// import {RenderPagination} from "../../components/pagination/paginationRender"


function RouterHome(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([])
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    // let arr = pagination(totalPages, page);

    const getFilms = async () => {
        const posts = FetchRequest.getAllPosts(limit, page)
        const {data} = await posts;
        setMovies(data.movies)
        setTotalPages( getPageCount(data.movie_count, limit)) 
        setLoading(false);
    }
   
    const rightClick = (e) => {
        console.log('right')
        setPage(page + 1)
    }
    const leftClick = (e) => {
        console.log('left')
        if(page > 0) {

            setPage(page - 1)
        }
       
    }
    const pageClick = (e) => {
        console.log(e.target.dataset.value)
        setPage(Number(e.target.dataset.value))
        
    }
    useEffect(() => {

            getFilms()

    },[page] )

    

    if(loading) {
        return <Loader/>
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
    <Pagination 
     totalPages = {totalPages} 
     itemsPerView = {limit}
     currentPage ={page}
     pageClick = {pageClick}
     leftClick = {leftClick}
     rightClick = {rightClick}/>


    {/* <RenderPagination
    total = {totalPages}
    current = {page}
    pagePerview = {0}
    rightClick = {rightClick}
    leftClick = {leftClick}
    pageClick = {pageClick}
    ></RenderPagination> */}
  
 </div>
   
     
        
    

}


export {RouterHome}