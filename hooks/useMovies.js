import { useContext, useState } from 'react'
import MoviesContext from '../contexts/MoviesContext'
import { searchMovies as searchMoviesService } from '../services/movies'

const useMovies = () => {
  const { movies, setMovies } = useContext(MoviesContext)
  const [loading, setLoading] = useState(false)
  const [errorMovies, setErrorMovies] = useState(null)

  const searchMovies = ({ value = '' }) => {
    setLoading(true)
    searchMoviesService({ value })
      .then((movies) => {
        setMovies(movies)
        console.log(movies)
      })
      .catch((error) => {
        console.log(error)
        setErrorMovies(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return {
    movies: movies?.Search,
    searchMovies,
    errorMovies,
    isLoading: loading,
  }
}

export default useMovies
