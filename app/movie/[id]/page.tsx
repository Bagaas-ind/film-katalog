"use client"; // <--- TAMBAHKAN BARIS INI

import { use } from "react"; // Ganti async jadi use()
import Link from "next/link";
import { ArrowLeft, Star, Play, Clock, Calendar } from "lucide-react";
import { allMovies } from "@/lib/data";
import ReviewSection from "./ReviewSection";

export default function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params); // Ambil params pakai use()
  const movie = allMovies.find((m) => m.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-[#0f1014] flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold mb-4">Film Tidak Ditemukan</h1>
        <Link href="/" className="text-[#00e054] hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f1014] text-white font-sans pb-20">
      <nav className="absolute top-0 w-full z-50 px-4 md:px-8 py-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition bg-black/40 px-4 py-2 rounded-full backdrop-blur-md">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </Link>
        <div className="text-xl font-black tracking-widest text-white/50">SAROKA</div>
      </nav>

      <div className="relative h-[50vh] md:h-[60vh] w-full bg-[#1b1e23]">
        <img 
          src={movie.banner} 
          alt={movie.title} 
          className="w-full h-full object-cover object-top opacity-40" 
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1014] via-[#0f1014]/60 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10 -mt-40 md:-mt-64 flex flex-col md:flex-row gap-8 md:gap-12">
        <div className="w-48 md:w-72 shrink-0 mx-auto md:mx-0">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden border-4 border-[#24272d] shadow-2xl bg-[#1b1e23] flex items-center justify-center">
            <img 
              src={movie.poster} 
              alt={movie.title} 
              className="w-full h-full object-cover absolute inset-0 z-10" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <span className="text-[#00e054] font-bold text-center text-lg px-4 z-0">{movie.title}</span>
          </div>
        </div>

        <div className="flex-1 text-center md:text-left mt-4 md:mt-32">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{movie.title}</h1>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-5 text-sm md:text-base text-gray-300 font-medium mb-6">
            <span className="flex items-center gap-1 text-[#00e054]">
              <Star className="w-4 h-4 fill-[#00e054]" /> {movie.rating}/10
            </span>
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {movie.year}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {movie.runtime}</span>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {movie.genre.map((g) => (
              <span key={g} className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#24272d] text-gray-300 border border-gray-600">
                {g}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-3">Sinopsis</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-3xl">{movie.synopsis}</p>

          <div className="mb-8">
            <span className="text-gray-500 text-sm">Director: </span>
            <span className="text-white font-semibold">{movie.director}</span>
          </div>

          <button className="flex items-center justify-center gap-2 mx-auto md:mx-0 bg-[#00e054] text-black px-10 py-3.5 rounded-full font-bold text-lg hover:bg-[#00c44a] hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,224,84,0.4)]">
            <Play className="w-5 h-5 fill-black" /> Tonton Trailer
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-10">
        <ReviewSection movieId={movie.id} />
      </div>
    </main>
  );
}