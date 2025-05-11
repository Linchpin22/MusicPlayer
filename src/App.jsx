import './App.css';
import Counter from './components/Counter';
import Favourites from './components/Favourites';
import Options from './components/Options';
import Player from './components/Player';
import Playlist from './components/Playlist';
import Songs from './components/Songs';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useContext, useState } from 'react';
import { datacontext } from './context/UserContext';


function App() {
  const [song, setSong] = useState("");
let {songplayed} = useContext(datacontext)



  return (
    <BrowserRouter>
    <div className='bg-[#212121] text-white min-h-screen max-w-full'>
      <div className="flex">
        <Options setSong={setSong} />
        <Routes>
          <Route path='/' element={<Songs song={song}/>} />
          <Route path='/favourites' element={<Favourites song={song}/>} />
          <Route path='/playlist' element={<Playlist song={song}/>} />
        </Routes>
      </div>
      <div className='transition-all duration-300 ease-in'>
        {!songplayed? "": <Player />}
     
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
