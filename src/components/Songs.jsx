import React, { useContext } from "react";
import data, { songsData } from "./Song.js";
import { datacontext } from "../context/UserContext.jsx";

const Songs = ({ song }) => {
  const filterSong = data.filter((item) => {
    return (
      item.name.toLowerCase().includes(song) ||
      item.singer.toLowerCase().includes(song)
    );
  });

  let {setIndex,playSong } = useContext(datacontext);

  return (
    <section className="md:w-[80%] md:ml-[15%] w-full lg:mt-0 mt-15 ">
      <h1 className="text-3xl font-bold mt-4 mb-4 text-center">All Songs</h1>
      {filterSong.map((song, index) => (
        <div
          onClick={() => {
            setIndex(song.id - 1);
            playSong();
          }}
          key={index}
          className="flex flex-row items-center gap-4 rounded p-2 mb-2 hover:bg-green-700 cursor-pointer"
        >
          <img
            className="md:h-20 md:w-20 h-14 w-14 object-cover rounded"
            src={song.image}
            alt="song-img"
          />

          <div className="flex-1">
            <h2 className="md:text-lg font-semibold">{song.name}</h2>
            <p className="text-sm font-light">{song.singer}</p>
          </div>

          <div className="w-24 text-right">
            <h4>{song.category}</h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Songs;
