import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieShow from "./MovieShow";

function MoviesPage({ movies }) {

// useRouteMatch, you can access these properties to retrieve information about the current route 

  const match = useRouteMatch();
  console.log(match);
  return (

// use the current URL from the match object as part of the path to generate a URL like "/movies/:movieId

    <div>
      <MoviesList movies={movies} />
      <Route exact path={match.url}>
        <h3>Choose a movie from the list above</h3>
      </Route>
      <Route path={`${match.url}/:movieId`}>
        <MovieShow  movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;