import { React, useState, useEffect } from "react";
import "./RouterHome.css";
import { Card } from "../../components/Card/Card";
import { FetchRequest } from "../../api/getFetch";
import { Loader } from "../../components/Loader/Loader";
import { getPageCount } from "../../helpers/getPageCount";
import { Pagination } from "../../components/pagination/pagination";
import { FormSearch } from "../../components/FormSearch/FormSearch";
// import {RenderPagination} from "../../components/pagination/paginationRender"

function RouterHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  // let arr = pagination(totalPages, page);
  const [isSearch, setisSearch] = useState(false);

  const getFilms = async () => {
    setLoading(true);
    const posts = FetchRequest.getAllPosts(limit, page);
    const { data } = await posts;
    setMovies(data.movies);
    setTotalPages(getPageCount(data.movie_count, limit));
    setLoading(false);
  };

  const getSortedFilms = async () => {
    setLoading(true);
    setisSearch(true);
    const posts = FetchRequest.getPostsbyName(searchValue, page);
    const { data } = await posts;
    setMovies(data.movies);
    setTotalPages(getPageCount(data.movie_count, limit));
    setLoading(false);
  };

  const getSearch = (value) => {
    setSearchValue(value);
  };

  const rightClick = (e) => {
    console.log("right");
    setPage(page + 1);
  };
  const leftClick = (e) => {
    console.log("left");
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const pageClick = (e) => {
    console.log(e.target.dataset.value);
    setPage(Number(e.target.dataset.value));
  };
  useEffect(() => {
    if (isSearch) {
      getSortedFilms();
    } else {
      getFilms();
    }
  }, [page]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <FormSearch
        searchFunc={getSortedFilms}
        searchValue={searchValue}
        setSeaarchValue={getSearch}
      />
      <div className="cards">
        {movies.map((el) => {
          return (
            <Card
              key={el.id}
              id={el.id}
              imgUrl={el.medium_cover_image}
              title={el.title}
              year={el.year}
              genres={el.genres}
              summary={el.summary}
            />
          );
        })}
      </div>
      <Pagination
        totalPages={totalPages}
        itemsPerView={limit}
        currentPage={page}
        pageClick={pageClick}
        leftClick={leftClick}
        rightClick={rightClick}
      />
    </div>
  );
}

export { RouterHome };
