import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMovieStatus, useGetMovieList, useGetTotalItems } from 'state/movie/hooks'
import { STATUS } from 'state/movie/constants'
import { fetchMovies, fetchMoreMovies } from 'state/movie'
import MovieItem from 'containers/MovieItem'
import './Home.scss'
const LIMIT_PER_PAGE = 5

const Home = () => {
  const dispatch = useDispatch()
  const status = useGetMovieStatus()
  const movies = useGetMovieList()
  const totalItems = useGetTotalItems()
  useEffect(() => {
    dispatch(fetchMovies({ limit: LIMIT_PER_PAGE, offset: 0 }))
  }, [dispatch])
  const onLoadMore = () => {
    dispatch(fetchMoreMovies({ limit: LIMIT_PER_PAGE, offset: movies.length }))
  }
  return (
    <div className="Home">
      {status === STATUS.LOADING
        ? <div className="Home-loading">Loading...</div>
        : movies.length > 0
          ? (
            <>
              {movies.map(item => (
                <MovieItem item={item} key={item._id} />
              ))}
              {movies.length < totalItems && (
                <div className="Home-load-more">
                  <button className="App-button" onClick={onLoadMore}>Load more</button>
                </div>
              )}
            </>
          )
          : <div className="Home-empty">Empty video</div>
      }
    </div>
  )
}

export default Home