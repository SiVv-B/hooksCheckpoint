import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Filter(props) {
  const [data, setData] = useState('')

  const searchHandeler = (event) => {
    setData(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    props.filterCaracter(data)
    setData('')
  }

  return (
    <div style={{ display: 'flex', margin: '3%' }}>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <div className="form-outline">
            <input
              type="text"
              id="searchBar"
              className="form-control"
              placeholder="seaech for title or rate"
              value={data}
              onChange={searchHandeler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {' '}
            Search for movie
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Filter
