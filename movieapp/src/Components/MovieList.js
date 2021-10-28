import React from 'react'
import MovieCard from './MovieCard'
function MovieList(props) {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          marginRight: '20%',
          flexWrap: 'wrap',
          width: '80%',
          height: '50%',
        }}
      >
        {props.movieList.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      
    </div>
  )
}

export default MovieList
