import React from 'react'
import './Video.css'

const baseURL = "https://image.tmdb.org/t/p/original/";
function Video({ movie  }) {
    return (
        <div className="Video">
            
            
            <img src={ `${baseURL}${movie.backdrop_path || movie.poster_path}`}   alt="movie"/>
           <p>
              {movie.release_date ||movie.first_air_date}
           </p>
           <p>
              {movie.Overview}
            </p>



        </div>
    )
}

export default Video
