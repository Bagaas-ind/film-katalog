"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi login sukses, redirect ke home
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0f1014] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#1b1e23] border border-[#24272d] rounded-xl p-8 shadow-2xl relative">
        <Link href="/" className="absolute top-6 left-6 text-gray-400 hover:text-white transition">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="text-center mb-8 mt-4">
          <div className="flex justify-center items-center gap-2 mb-2">
            <div className="flex -space-x-1.5">
              <div className="w-4 h-4 rounded-full bg-[#00e054]"></div>
              <div className="w-4 h-4 rounded-full bg-[#ff8000]"></div>
              <div className="w-4 h-4 rounded-full bg-[#40bcf4]"></div>
            </div>
            <h1 className="text-2xl font-black tracking-widest text-white">SAROKA</h1>
          </div>
          <p className="text-sm text-[#789]">Sign in to continue to Saroka.</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Username or Email</label>
            <input type="text" required className="w-full bg-[#0f1014] border border-[#2c3440] rounded p-3 text-white focus:outline-none focus:border-[#00e054]" placeholder="Enter your email" />
          </div>
          <div>
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block">Password</label>
            <input type="password" required className="w-full bg-[#0f1014] border border-[#2c3440] rounded p-3 text-white focus:outline-none focus:border-[#00e054]" placeholder="Enter your password" />
          </div>
          <button type="submit" className="w-full bg-[#00e054] text-black font-bold py-3 rounded hover:bg-[#00c44a] transition mt-2">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}