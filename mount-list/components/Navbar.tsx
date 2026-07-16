"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="
      bg-zinc-900
      border-b border-yellow-500/30
      shadow-md
    ">
      <div className="
        max-w-5xl mx-auto
        flex items-center gap-6
        px-6 py-4
      ">

        <Link
          href="/"
          className="text-yellow-400 font-bold tracking-wide"
        >
          Mount List
        </Link>

        <Link
          href="/"
          className={`
            ${pathname === "/" ? "text-yellow-400" : "text-zinc-300"}
            hover:text-yellow-400 transition
          `}
        >
          Home
        </Link>

        <Link
          href="/mounts"
          className={`
            ${pathname === "/mounts" ? "text-yellow-400" : "text-zinc-300"}
            hover:text-yellow-400 transition
          `}
        >
          Mounts
        </Link>

      </div>
    </nav>
  );
}