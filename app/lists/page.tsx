import Link from "next/link";
import { ArrowLeft, ListVideo } from "lucide-react";

export default function ListsPage() {
  return (
    <div className="min-h-screen bg-[#0f1014] text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#00e054] hover:underline mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
        <h1 className="text-3xl font-bold mb-8 border-b border-[#24272d] pb-4">Popular Lists</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1b1e23] border border-[#24272d] rounded-lg p-6 hover:border-[#00e054] transition cursor-pointer">
            <ListVideo className="w-8 h-8 text-[#00e054] mb-4" />
            <h2 className="text-xl font-bold mb-2">Top 10 Movies of All Time</h2>
            <p className="text-sm text-gray-400 mb-4">Dari Godfather sampai The Dark Knight, ini deretan film dengan rating tertinggi di dunia!</p>
            <span className="text-xs font-bold text-gray-500 uppercase">10 Films</span>
          </div>

          <div className="bg-[#1b1e23] border border-[#24272d] rounded-lg p-6 hover:border-[#00e054] transition cursor-pointer">
            <ListVideo className="w-8 h-8 text-[#00e054] mb-4" />
            <h2 className="text-xl font-bold mb-2">Asian Cinema Masterpieces</h2>
            <p className="text-sm text-gray-400 mb-4">Kumpulan film Asia terbaik dari Korea, Jepang, dan Hong Kong yang sukses mendunia.</p>
            <span className="text-xs font-bold text-gray-500 uppercase">6 Films</span>
          </div>
        </div>
      </div>
    </div>
  );
}