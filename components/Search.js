import { useEffect, useState } from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import useMovies from '../hooks/useMovies'

const Search = () => {
  const [value, setValue] = useState(null)

  const { movies, searchMovies } = useMovies()

  useEffect(() => {
    if (value?.length > 2) {
      searchMovies({ value })
    }
  }, [value])

  return (
    <form className='flex justify-end'>
      <div className='flex px-4 py-2 m-0 rounded-full border-2 border-blue-300'>
        <input
          type='text'
          placeholder='Buscar contenido...'
          className='bg-transparent focus:outline-none'
          onChange={(e) => setValue(e.target.value)}
        />

        <div className='flex items-center rounded-full bg-blue-300 py-1 px-2'>
          <SearchIcon className='h-5 w-5 mr-2' />
          <button type='submit'>Buscar</button>
        </div>
      </div>
    </form>
  )
}

export default Search
