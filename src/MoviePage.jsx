import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

async function fetchMovie (movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=52ceeb592923ebd4b54854c874873eac`;
  return await (await fetch(endpoint)).json();
}

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

function MoviePage() {
  const [movieInfo, setMovieInfo] = useState({})
  const { id } = useParams();

  useEffect(async() => {
    const movie = await fetchMovie(id);
    setMovieInfo(movie);

  }, []);

  const { title, overview, poster_path, vote_average, backdrop_path } = movieInfo;

  return (
    <div>

      {title}
      {overview}
      {vote_average}
      <img src={IMG_API + poster_path} alt="" />
      <img src={IMG_API + backdrop_path} alt="" />
      
    </div>
  )
}

export default MoviePage
