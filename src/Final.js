import { MovieSharp } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import './Final.css';
import Video from './Video';
import requests from './requests' 
import axios from "./axios"

function Final() {

const [movies, setMovies] = useState([]);

      useEffect(() => {
     

        async function FetchData(){

          const request = await axios.get(requests);
          setMovies(request.data.Final);
          return request;
        

        }  
        FetchData();
        
           //run this code once  when the  results components loads and mounts
      }, [])
    
    
      // useEffect(() => {
     //   effect
    //return () => {
      //    cleanup
      //  }
           //run this code Every time when the  results components loads and mounts
     // },)



    return (
        <div className="Final">
           { movies.map((movie)=>(
                <Video movie={movie}/>
           ))
           }


        </div>
    )
}

export default Final
