import React from 'react'
import data from './Song.js'
import UnderConstruction from './UnderConstruction.jsx';

const Favourites = ({song}) => {

    const filterSong = data.filter((item)=>{
        return(
          item.name.toLowerCase().includes(song) ||item.artist.toLowerCase().includes(song)
        );
      })
  return (
    <section className="w-[80%] ml-[15%]">
    {/* <h1 className="text-xl font-bold mb-4">Favourites</h1>
    {filterSong.map((song, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-4 rounded p-2 mb-2 hover:bg-green-700 cursor-pointer"
        >
          <img className="h-20 w-20 object-cover rounded" src={song.image} alt="song-img" />
          
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{song.name}</h2>
            <p >{song.singer}</p>
          </div>

          <div className="w-24 text-right">
            <h4>{song.category}</h4>
          </div>
        </div>
      ))} */}
      <UnderConstruction/>
  </section>
  )
}

export default Favourites