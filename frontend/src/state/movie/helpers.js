import MovieService from "services/MovieService"

export const getMovies = async (limit, offset) => {
  try {
    const movies = await MovieService.getAllMovies(limit, offset)
    return movies
  } catch (error) {
    console.log('getMovies error: ', error)
    return []
  }
} 