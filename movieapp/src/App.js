import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MovieList from './Components/MovieList'
import Filter from './Components/Filter'

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: '1',
      title: 'The Conjuring',
      poster: 'https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_SY606_.jpg',
      decription:
        'Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.',
      rate: 2,
    },
    {
      id: '2',
      title: 'The Grudge',
      poster:
        'https://aws-cf.imdoc.fr/prod/photos/8/6/1/11904861/29176577/big-29176577abb.jpg?v=2',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '3',
      title: 'The Ring',
      poster: 'https://m.media-amazon.com/images/I/41CGtdWTDvL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 1,
    },
    {
      id: '4',
      title: 'The Shawshank Redemption',
      poster: 'https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '5',
      title: 'The Godfather',
      poster:
        'https://ih1.redbubble.net/image.1275475865.6561/pp,504x498-pad,600x600,f8f8f8.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '5',
      title: 'The Godfather: Part II',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0hYUlSTUgCxfY-8ACz_E3CQWDKShEYEvGFw&usqp=CAU',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
    {
      id: '7',
      title: 'The Dark Knight',
      poster: 'https://m.media-amazon.com/images/I/51CbCQNMyiL._AC_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 2,
    },
    {
      id: '8',
      title: '12 Angry Men',
      poster: 'https://m.media-amazon.com/images/I/81zZhjymV7L._AC_SL1500_.jpg',
      decription: 'The Ring is a 2002 American supernatural horror film',
      rate: 3,
    },
  ])

  //Add movies to the list
  const [movie, setMovie] = useState([
    {
      title: '',
      poster: '',
      description: '',
      rate: '',
    },
  ])
  const handelChange = (event) => {
    setMovie({ ...movie, [event.target.id]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setMovieList([...movieList, movie])
  }

  //Filter movie List
  function filterCaracter(caracter) {
    if (isNaN(caracter) === true) {
      setMovieList(
        movieList.filter((movieList) =>
          movieList.title.toLowerCase().includes(caracter.toLowerCase()),
        ),
      )
    } else {
      setMovieList(movieList.filter((movieList) => movieList.rate == caracter))
    }
  }

  return (
    <div className="App">
      <div className="searchBar">
        <Filter filterCaracter={filterCaracter} />
      </div>

      <div className="container">
        <MovieList movieList={movieList} />
      </div>
      <div className="Add movies">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title of the new movie</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title"
              id="title"
              value={movie.title}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="poster">Paste link of the movie's poster</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter URL's picture"
              id="poster"
              value={movie.poster}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              id="description"
              value={movie.description}
              onChange={handelChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">rate the movie:</label>
            <input
              type="number"
              className="form-control"
              placeholder="rate the movie"
              id="rate"
              value={movie.rate}
              onChange={handelChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add new movie
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
