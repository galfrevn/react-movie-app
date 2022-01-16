import React from "react";

const IMAGES_API = "https://image.tmdb.org/t/p/w1280";

function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div id="movie">
      <div className="cursor-pointer bg-white container mx-auto shadow-md rounded-sm max-w-md hover:shadow-xl transition duration-300 h-full ">
        <img
          src={IMAGES_API + poster_path}
          alt={title}
          className="rounded-t-sm w-full"
        />
        <div className="md:p-6 p-2 ">
          <h1 className="md:text-sm text-xs hover:text-indigo-600 transition duration-200 font-semibold text-gray-900 ">
            {title}
          </h1>
          <div className=" " >
            {vote_average >= 8.0 ? (
              <span className="inline-block rounded-md text-white mt-3 bg-green-500 px-2 py-1 text-xs font-bold mr-3">
                {vote_average}
              </span>
            ) : vote_average < 7.9 && vote_average > 6.0 ? (
              <span class="inline-block rounded-md mt-3 text-white bg-yellow-500 px-2 py-1 text-xs font-bold mr-3">
                {vote_average}
              </span>
            ) : (
              <span class="inline-block rounded-md text-white mt-3 bg-red-500 px-2 py-1 text-xs font-bold mr-3">
                {vote_average}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
