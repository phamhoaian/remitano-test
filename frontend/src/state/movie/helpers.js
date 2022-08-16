import MovieService from "services/MovieService"

export const getMovies = async (page, offset) => {
  try {
    const movies = await MovieService.getAllMovies(page, offset)
    return movies
  } catch (error) {
    console.log('getMovies error: ', error)
    return []
  }
} 