import { useEffect, useState } from "react";
import ani from "../assets/Animation.gif"

const UnderConstruction = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10); // 10 days from now

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, mins, secs });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <img src={ani} alt="Under Construction" className="w-44 md:h-48 h-26  animate-bounce" />
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-400 mb-8 max-w-xl">This page is currently under construction. We’ll be here soon with a new and better experience till then enjoy all songs!</p>
      <a href="/" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-green-400 rounded-lg group">
    <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
    <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
    <span class="relative ">Home</span>
</a>
    </div>
  );
};

export default UnderConstruction;
