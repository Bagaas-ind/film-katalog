"use client"; // <--- TAMBAHKAN BARIS INI

import Link from "next/link";
import { Star } from "lucide-react";
import { trendingMovies, classicMovies, asianMovies, indieMovies, Movie } from "@/lib/data";

function MovieGrid({ title, movies }: { title: string, movies: Movie[] }) {
  return (
    // ... (biarkan kode MovieGrid sama persis seperti sebelumnya)
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4 border-b border-[#24272d] pb-2">
        <h2 className="text-lg md:text-2xl font-bold text-white tracking-wide">{title}</h2>
        <Link href="/lists" className="text-xs font-bold uppercase tracking-widest text-[#00e054] hover:text-white transition">View All</Link>
      </div>
      
      <div className="grid grid-rows-2 grid-flow-col overflow-x-auto md:grid-rows-1 md:grid-flow-row md:grid-cols-5 gap-3 md:gap-5 pb-4 scrollbar-hide snap-x">
        {movies.map((movie) => (
          <Link 
            href={`/movie/${movie.id}`} 
            key={movie.id} 
            className="snap-start shrink-0 w-[130px] md:w-auto group flex flex-col"
          >
            <div className="relative aspect-[2/3] rounded-md overflow-hidden border-2 border-[#24272d] group-hover:border-[#00e054] transition-all duration-300 shadow-lg bg-[#1b1e23] flex items-center justify-center">
                            <img 
                src={movie.poster} 
                alt="" // <--- Ubah jadi kosong
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none'; // <--- Sembunyikan total
                }}
              />
              <span className="text-[#00e054] font-bold text-center text-sm md:text-base px-2 z-0">
                {movie.title}
              </span>

              <div className="absolute inset-0 bg-[#0f1014]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center z-20">
                <div className="flex items-center gap-1 text-[#00e054] font-bold text-sm">
                  <Star className="w-4 h-4 fill-[#00e054]" /> {movie.rating}
                </div>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="text-white font-semibold text-sm truncate group-hover:text-[#00e054] transition-colors">{movie.title}</h3>
              <p className="text-[#789] text-xs">{movie.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f1014] text-white font-sans">
      <nav className="border-b border-[#24272d] bg-[#0f1014]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#00e054]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff8000]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#40bcf4]"></div>
              </div>
              <span className="text-white font-black text-xl tracking-widest ml-1">SAROKA</span>
            </Link>
            
            <div className="hidden md:flex gap-6 text-sm font-semibold">
              <Link href="/" className="text-white">Films</Link>
              <Link href="/reviews" className="cursor-pointer text-gray-400 hover:text-white transition">Reviews</Link>
              <Link href="/lists" className="cursor-pointer text-gray-400 hover:text-white transition">Lists</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-bold text-black bg-[#00e054] px-5 py-1.5 rounded hover:bg-[#00c44a] transition shadow-[0_0_15px_rgba(0,224,84,0.3)]">
              Sign In
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <MovieGrid title="Trending Now" movies={trendingMovies} />
        <MovieGrid title="Classic Masterpieces" movies={classicMovies} />
        <MovieGrid title="Asian Cinema" movies={asianMovies} />
        <MovieGrid title="Indie & A24 Films" movies={indieMovies} />
      </div>
    </main>
  );
}