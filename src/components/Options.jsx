import React, { useState } from "react";
import logo from "../assets/Logo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { EllipsisVertical,X  } from 'lucide-react';

const Options = ({setSong}) => {

  const [mob, setMob] = useState(false)
  

  return (
    <>
    <section className="lg:w-[15%] p-4 lg:h-screen w-full fixed text-white flex lg:flex-col flex-row justify-between lg:justify-start lg:bg-transparent bg-black ">
      <img src={logo2} alt="Logo" className="h-10 w-auto" />
      <div className="block lg:hidden" onClick={()=>setMob(true)}>
 <EllipsisVertical />
      </div>
      <div className="hidden lg:block">
        <input
          type="text"
          className="mt-4 p-1 rounded w-full"
          placeholder="Search"
          onChange={(e)=>setSong(e.target.value.toLowerCase())}
        />
        <ul className="text-xl font-semibold mt-6 space-y-4">
          <li  className="hover:text-green-500">
            <Link to="/">All Songs</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/favourites">Favourites</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </div>
      
    </section>
    {/* mobile navbar */}
    {mob?<div className="fixed right-0 top-4.5">
      <div className="bg-zinc-800 pl-4 py-4 rounded-l-lg">
        <div onClick={()=>setMob(false)} className="flex  justify-end">
        <X  />
        </div>
        <input
          type="text"
          className="mt-4 p-1 rounded border-2 w-full"
          placeholder="Search"
          onChange={(e)=>setSong(e.target.value.toLowerCase())}
        />
        <ul className="text-xl font-semibold mt-6 space-y-4">
          <li  className="hover:text-green-500">
            <Link to="/">All Songs</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/favourites">Favourites</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="/playlist">Playlist</Link>
          </li>
        </ul>
      </div>
    </div>: ""}
    
    </>
  );
};

export default Options;
