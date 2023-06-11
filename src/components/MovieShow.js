import React from "react";
import { useParams } from "react-router-dom";

// routerProps to the match arguments to access the path information passed from MoviesPage.js

function MovieShow({movies}) {

// useParams hook to access the parameters from the URL, specifically the dynamic portion of our /movies/:movieId path

  const params = useParams();
  console.log(params);  

// movieId stored in the params object to retrieve the information about the selected movie and render it accordingly

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow; 