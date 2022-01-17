import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

async function fetchMovie(movieId) {
  const endpoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=52ceeb592923ebd4b54854c874873eac`;
  return await (await fetch(endpoint)).json();
}

function convertMinsToHrsMins(minutes) {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  m = m < 10 ? "0" + m : m;
  return h + "h " + m + "m";
}

const IMG_API = "https://image.tmdb.org/t/p/w1280";

function MoviePage() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const movie = await fetchMovie(id);
    setMovieInfo(movie);
  }, []);

  const {
    title,
    overview,
    genres,
    runtime,
    poster_path,
    vote_average,
    release_date,
    backdrop_path,
  } = movieInfo;

  return (
    <>

      <a href="/" className="absolute top-10 left-10">
        « Home
      </a>

      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 z-10">
        <div class="py-3 sm:max-w-3xl sm:mx-auto">
          <div class="bg-white shadow-lg mb-12 border-gray-100 	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
              <img
                class="rounded-3xl shadow-lg"
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`}
                alt=""
              />
            </div>
            <div class="flex flex-col w-1/2 space-y-4">
              <div class="flex justify-between items-start">
                <h2 class="text-3xl font-bold ">{title} </h2>
                <div class="bg-yellow-400 font-bold rounded-xl p-2">
                  {vote_average}{" "}
                </div>
              </div>
              <div>
                <div class="text-sm text-gray-400"></div>
                <div class="text-lg text-gray-800">{release_date} </div>
              </div>
              <p class=" text-gray-400 max-h-40 overflow-y-scroll">
                {overview}
              </p>
              <div class="flex text-2xl font-bold text-a">
                {convertMinsToHrsMins(runtime)}{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoviePage;
