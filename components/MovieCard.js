const MovieCard = ({ movie }) => {
  return (
    <div className='rounded-[15px] bg-cyan-400 w-300 h-400  overflow-hidden cursor-pointer'>
      <img
        src={movie.Poster}
        className=' object-cover w-full h-full'
        alt={`Portada de ${movie.Title}`}
      />
    </div>
  )
}

export default MovieCard
