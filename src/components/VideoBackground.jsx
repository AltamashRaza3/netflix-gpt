import React, { useEffect, useState } from 'react'
import {API_OPTIONS} from "../utils/constants";

const VideoBackground = ({movieId}) => {
  const [trailerId, setTrailerId] = useState(null);
  // fetch trailer videos

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/1156594/videos",API_OPTIONS);
    const json = await data.json();
    console.log(json);

    const filterData = json.results.filter(video=> video.type==="Trailer");
    const trailer = filterData.length ? filterData[0] :json.result[0];
    console.log(trailer);
    setTrailerId(trailer.key)
  }
  useEffect(()=>{
    getMovieVideos();
  },[]);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground