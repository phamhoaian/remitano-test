import React from 'react'
import './MovieItem.scss'

const MovieItem = ({ item }) => {
  return (
    <div className="Item">
      <div className="Item-video">
        <iframe
          width="320"
          height="200"
          src={`https://www.youtube.com/embed/${item.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      <div className="Item-content">
        <h3 className="Item-title">{item.title}</h3>
        <div className="Item-description">
          Description:<br/>
          {item.description}
        </div>
      </div>
    </div>
  )
}

export default MovieItem