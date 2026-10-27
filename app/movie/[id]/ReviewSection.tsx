"use client";

import { useState, useEffect } from "react";
import { Star, Send } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export default function ReviewSection({ movieId }: { movieId: string }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");

  // Ambil data review dari localStorage saat halaman dimuat
  useEffect(() => {
    const saved = localStorage.getItem(`reviews_${movieId}`);
    if (saved) {
      setReviews(JSON.parse(saved));
    }
  }, [movieId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      rating,
      text,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${movieId}`, JSON.stringify(updatedReviews));

    // Reset form
    setName("");
    setRating(5);
    setText("");
  };

  return (
    <div className="mt-16 pt-8 border-t border-[#24272d]">
      <h2 className="text-2xl font-bold mb-6">Reviews & Ratings</h2>

      {/* FORM TULIS REVIEW */}
      <form onSubmit={handleSubmit} className="bg-[#1b1e23] border border-[#24272d] p-6 rounded-xl mb-10">
        <h3 className="text-lg font-semibold mb-4">Tulis Review Kamu</h3>
        
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nama Kamu</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Masukkan nama..."
                className="w-full bg-[#0f1014] border border-[#2c3440] rounded-lg p-3 text-white focus:outline-none focus:border-[#00e054] transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Rating Bintang</label>
              <div className="flex gap-2 items-center h-[46px]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? "fill-[#00e054] text-[#00e054]"
                          : "text-gray-600"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Ulasan Kamu</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              rows={3}
              placeholder="Menurutmu film ini gimana?"
              className="w-full bg-[#0f1014] border border-[#2c3440] rounded-lg p-3 text-white focus:outline-none focus:border-[#00e054] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#00e054] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#00c44a] transition-colors w-full md:w-auto self-start"
          >
            <Send className="w-4 h-4" /> Kirim Review
          </button>
        </div>
      </form>

      {/* LIST REVIEW YANG SUDAH MASUK */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada review. Jadilah yang pertama!</p>
        ) : (
          reviews.map((rev) => (
            <div key={rev.id} className="bg-[#1b1e23] border border-[#24272d] p-5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  {/* Avatar Inisial */}
                  <div className="w-10 h-10 rounded-full bg-[#2c3440] flex items-center justify-center text-white font-bold">
                    {rev.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{rev.name}</h4>
                    <p className="text-xs text-gray-500">{rev.date}</p>
                  </div>
                </div>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= rev.rating
                          ? "fill-[#00e054] text-[#00e054]"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mt-3">{rev.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}