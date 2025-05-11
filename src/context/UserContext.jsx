import React, { createContext, useEffect, useRef, useState } from "react";
import { data } from "react-router-dom";
import songsData from "../components/Song";

export const datacontext = createContext();

export const UserContext = ({ children }) => {
  let audioRef = useRef(new Audio());
  let [index, setIndex] = useState(0);
  const[isPlaying, setIsplaying] = useState(false);
  const [songplayed,setSongPlayed] = useState(false)


  useEffect(() => {
    audioRef.current.src = songsData[index].song;
    audioRef.current.load();
    if(isPlaying){
      playSong()
    }
  }, [index]);

  function playSong(){
    setSongPlayed(true)
    setIsplaying(true)
    audioRef.current.play()
  }

  function pauseSong(){
    setIsplaying(false)
    audioRef.current.pause()
  }

  function nextSong(){
    setIndex(prev=>(prev + 1)%songsData.length)
  }

  function previousSong(){
    setIndex((prev)=>{
      if(prev==0){
        return songsData.length -1
      }
      else{
        return prev - 1 
      }
    })
  }

  let value = {
    isPlaying,setIsplaying,audioRef,playSong,pauseSong,nextSong,previousSong,index, setIndex,songplayed,setSongPlayed
  };

  return (
    <div>
    <datacontext.Provider value={value}>
        {children}
    </datacontext.Provider>
    </div>
  );
};
