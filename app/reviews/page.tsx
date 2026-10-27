import Link from "next/link";
import { ArrowLeft, Star, MessageSquare } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#0f1014] text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-[#00e054] hover:underline mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Beranda
        </Link>
        <h1 className="text-3xl font-bold mb-8 border-b border-[#24272d] pb-4">Recent Reviews</h1>
        
        <div className="space-y-6">
          <div className="bg-[#1b1e23] border border-[#24272d] rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-[#00e054]">The Dark Knight</h2>
              <div className="flex text-[#ff8000]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff8000]" />)}
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4 flex items-center gap-2"><MessageSquare className="w-3 h-3"/> Reviewed by @bagas_dev • 2 hours ago</p>
            <p className="text-gray-300 leading-relaxed">"Mahakarya yang tak lekang oleh waktu. Akting Heath Ledger sebagai Joker tidak akan pernah terlupakan. Nolan berhasil membawa genre superhero ke level yang lebih serius."</p>
          </div>

          <div className="bg-[#1b1e23] border border-[#24272d] rounded-lg p-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold text-[#00e054]">Parasite</h2>
              <div className="flex text-[#ff8000]">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-[#ff8000]" />)}
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-4 flex items-center gap-2"><MessageSquare className="w-3 h-3"/> Reviewed by @warga_tangerang • 1 day ago</p>
            <p className="text-gray-300 leading-relaxed">"Kritik sosial yang dikemas dengan thriller yang menegangkan. Twist-nya benar-benar di luar nalar. Wajib tonton bagi pecinta film!"</p>
          </div>
        </div>
      </div>
    </div>
  );
}