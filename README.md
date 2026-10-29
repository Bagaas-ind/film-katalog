# SAROKA - Modern Movie Catalog 🎬🍿

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**SAROKA** adalah platform katalog film modern yang terinspirasi dari *Letterboxd*. Dibangun untuk memberikan pengalaman eksplorasi film yang cepat, estetik, dan interaktif.

## 🌐 Live Demo
Cek website yang sudah online di sini: **[synoptic-weather.netlify.app](https://synoptic-weather.netlify.app)** *(Ganti dengan link Netlify Film kamu)*

## ✨ Fitur Utama

- **Desain UI "Letterboxd-Style"**: Tema *Dark Mode* dengan aksen hijau neon (`#00e054`) dan bintang rating oranye yang ikonik.
- **Dynamic Routing**: Setiap film punya halaman detailnya sendiri (`/movie/[id]`) lengkap dengan sinopsis, sutradara, dan durasi.
- **Sistem Review & Rating**: Pengguna bisa memberikan rating bintang dan menulis ulasan yang tersimpan di *localStorage*.
- **Katalog 46+ Film**: Terdiri dari film Hollywood, A24, Cinema Asia (Korea/Jepang/Hong Kong), dan *Top Rated IMDb*.
- **Anti-Broken Images**: Sistem *fallback* otomatis yang mengganti gambar rusak dengan teks judul agar UI tetap rapi.
- **Responsive Grid**: Grid film yang otomatis menyesuaikan layar HP (2 kolom) dan Laptop (6 kolom).

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 🚀 Cara Menjalankan Project di Lokal

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/Bagaas-ind/ac-sejuk-web.git
   cd ac-sejuk-web
