import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useGetMovieStatus, useGetMovieList } from 'state/movie/hooks'
import { STATUS } from 'state/movie/constants'
import { fetchMovies } from 'state/movie'
import MovieItem from 'containers/MovieItem'
import './Home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const status = useGetMovieStatus()
  const movies = useGetMovieList()
  useEffect(() => {
    dispatch(fetchMovies({ page: 1, offset: 0 }))
  }, [])
  return (
    <div className="Home">
      {status === STATUS.LOADING
        ? <div className="Home-loading">Loading...</div>
        : movies.length > 0
          ? movies.map(item => (
            <MovieItem item={item} key={item._id} />
          ))
          : <div className="Home-empty">Empty video</div>
      }
    </div>
  )
}

export default Home