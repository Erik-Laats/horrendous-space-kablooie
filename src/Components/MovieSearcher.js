import React, { useState } from "react";
import "../App.css";

export default function MovieSearcher() {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=7d382303dbb8a3a849336128190d514c&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovie(data.results);
      console.log(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <MovieForm
        onChange={(e) => setQuery(e.target.value)}
        searchMovies={searchMovies}
        query={query}
      />

      <div className="card-list">
        {movie
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieResult movie={movie} key={movie.id} />
          ))}
      </div>
    </div>
  );
}

function MovieResult({ movie }) {
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title}
      />
      <h1 className="card--title">{movie.title}</h1>
      <p>
        <small>RELEASE DATE: {movie.release_date}</small>
      </p>
      <p>
        <small>RATING: {movie.vote_average}</small>
      </p>
      <p className="card--desc">
        <small>{movie.overview}</small>
      </p>
    </div>
  );
}

function MovieForm(props) {
  return (
    <form className="form" onSubmit={props.searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        value={props.query}
        onChange={props.onChange}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
