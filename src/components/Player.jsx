import React, { useContext, useEffect, useState } from "react";
import image1 from "../assets/image1.jpg";
import { ChevronsRight, ChevronsLeft, Play, Pause } from "lucide-react";
import { datacontext } from "../context/UserContext";
import songsData from "./Song";

const Player = () => {
  let {
    isPlaying,
    playSong,
    pauseSong,
    nextSong,
    previousSong,
    index,
    audioRef,
  } = useContext(datacontext);
  const [range, setRange] = useState(0);

  useEffect(() => {
    const progress = () => {
      let totalTime = audioRef.current.duration || 0;
      let currTime = audioRef.current.currentTime || 0;
      let propercent = (currTime / totalTime) * 100 || 0;
      setRange(propercent);
    };

    audioRef.current.addEventListener("timeupdate", progress);
  });

  function handleRange(e) {
    console.log(e.target.value);
    let newRange = e.target.value;
    setRange(newRange);
    let duration = audioRef.current.duration;
    audioRef.current.currentTime = (duration * newRange) / 100;
  }

  return (
    <div className="fixed bottom-0 w-full bg-zinc-900 lg:justify-start justify-between flex flex-row z-50 h-26 border-t-0 ">
      <div className="lg:w-2/4 w-1/2 flex gap-2 justify-center items-center">
        <img
          src={songsData[index].image}
          className="md:h-full md:w-fit h-[80%] w-[50%] justify-center"
          alt="song_image"
        />
        <div>
          <h2 className="md:text-xl font-bold">{songsData[index].name}</h2>
          <h4 className="text-sm hidden md:block font-light">{songsData[index].singer}</h4>
        </div>
      </div>
      <div className="flex flex-col space-y-4 w-1/2 justify-center items-center">
        <div className="w-[80%] flex lg:w-[50%] justify-center items-center">
          <input
            type="range"
            value={range}
            onChange={handleRange}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />
        </div>
        <div className="flex flex-row pb-2 space-x-2 justify-start mx-auto">
          <ChevronsLeft
            onClick={() => previousSong()}
            className="hover:bg-zinc-800 rounded-full p-2"
            size={48}
          />
          <div className="bg-[#212121] hover:bg-zinc-800 rounded-full p-3 ">
            {!isPlaying ? (
              <div className="rounded-full" onClick={() => playSong()}>
                <Play />
              </div>
            ) : (
              <div className="rounded-full" onClick={() => pauseSong()}>
                <Pause />
              </div>
            )}
          </div>
          <ChevronsRight
            onClick={() => nextSong()}
            className="hover:bg-zinc-800 rounded-full p-2"
            size={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
