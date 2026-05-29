"use client";
import Link from "next/link"

export default function Home() {
  return (
    <main className="
      flex flex-col items-center justify-center
      min-h-screen
      bg-gradient-to-b from-zinc-900 to-black
      text-center
      px-6
      text-white
      relative
    ">

      <h1 className="
        text-5xl font-bold mb-4
        text-yellow-400
        tracking-wide
        drop-shadow-lg
      ">

        Mount List App

      </h1>

      <p className="
        text-lg
        text-zinc-300
        mb-8
        max-wmd
        leading-relaxed
      ">

        <span className="block">
          Welcome to your complete Final Fantasy XIV mounts guide!
        </span>

        <span className="block">
          Here you can find all the mounts available in the game and learn exactly how to obtain them.
        </span>

        <span className="block">
          Explore, filter, mark the ones you’ve already collected, and embark on this epic journey toward completing your collection!
        </span>

      </p>
      
      <Link
      href="/mounts"
      className="
        shine-effect
        px-8 py-3
        bg-yellow-500
        text-black
        font-semibold
        rounded-lg
        shadow-lg

        transform
        transition-all durantion-300 ease-out

        hover:bg-yellow-400
        hover:scale-115
        hover:shadow-yello-500/30

        active:scale-95
      ">

        Enter Collection

      </Link>

      <div className="
        mt-12 text-sm
        text-zinc-500
        space-y-1
      ">
        
        <p> Discover rare mounts </p>
        <p> Leand how to obtain each one </p>

      </div>
    </main>
  )
}