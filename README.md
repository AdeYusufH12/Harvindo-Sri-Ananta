# PT Harvindo Sri Ananta — Official Website

Website resmi PT Harvindo Sri Ananta, dealer resmi mesin pertanian **Lovol** yang melayani petani dan kelompok tani di seluruh Indonesia.

🌐 **Live Website:** [harvindosriananta.my.id](https://www.harvindosriananta.my.id)

---

## 🛠️ Tech Stack

- **HTML5** — Struktur halaman
- **CSS3** — Styling custom (`css/style.css`)
- **Tailwind CSS v4** (Tailwind CLI) — Utility-first CSS framework, di-build menjadi `css/tailwind.css`
- **Vanilla JavaScript** — Interaktivitas tanpa framework
- **GitHub Pages** — Hosting

---

## ✨ Fitur

- ✅ Responsive design (mobile & desktop)
- ✅ Sticky navbar dengan mobile hamburger menu
- ✅ Dropdown menu produk
- ✅ Dua bahasa (Indonesia / English) dengan tombol toggle
- ✅ Marquee testimoni dengan pause on hover
- ✅ Galeri dokumentasi kegiatan
- ✅ Bagian FAQ
- ✅ Form kontak via Web3Forms
- ✅ Halaman artikel dengan search bar & pagination
- ✅ SEO: meta tags, Open Graph, canonical, structured data (LocalBusiness & FAQ), `sitemap.xml`, `robots.txt`
- ✅ Lazy loading gambar

---

## 📁 Struktur Project

```
├── index.html
├── produk-combine.html
├── produk-tractor.html
├── artikel.html
├── artikel/            # Isi artikel
├── assets/             # Gambar & logo
├── css/
│   ├── style.css       # CSS custom
│   └── tailwind.css    # Hasil build Tailwind (jangan diedit manual)
├── js/
├── lang/               # File terjemahan
├── src/
│   └── input.css       # Sumber Tailwind
├── sitemap.xml
└── robots.txt
```

---

## 🚀 Cara Menjalankan Lokal

```bash
# Clone repo
git clone https://github.com/AdeYusufH12/Harvindo-Sri-Ananta.git

# Masuk folder
cd Harvindo-Sri-Ananta

# Buka dengan Live Server di VSCode
# Klik kanan index.html → Open with Live Server
```

> File `css/tailwind.css` sudah ada di repo, jadi website bisa langsung dijalankan tanpa build.

---

## 🎨 Build Tailwind CSS

Build ulang CSS **setiap kali menambah halaman baru atau class Tailwind baru**. Butuh [Node.js](https://nodejs.org) (LTS).

```bash
# Pertama kali saja
npm install

# Build untuk produksi (minify)
npx @tailwindcss/cli -i ./src/input.css -o ./css/tailwind.css --minify

# Atau mode watch saat sedang mengedit
npx @tailwindcss/cli -i ./src/input.css -o ./css/tailwind.css --watch
```

Pastikan `css/tailwind.css` ikut di-commit karena file inilah yang dipakai website.

---

## 📝 Menambah Artikel Baru

1. Buat file artikel di folder `artikel/` (contoh: `artikel/judul-artikel.html`) dengan `<title>`, meta description, dan canonical yang lengkap.
2. Tambahkan kartu artikel di `artikel.html`.
3. Tambahkan entri `<url>` baru di `sitemap.xml` (isi `lastmod` dengan tanggal edit sebenarnya).
4. Jalankan build Tailwind jika memakai class baru.
5. Setelah live, minta indexing URL artikel tersebut di Google Search Console.

---

## 📦 Deployment

Website di-hosting menggunakan **GitHub Pages** dan otomatis live setiap kali ada push ke branch `main`.

```bash
# Build CSS dulu jika ada perubahan class Tailwind
npx @tailwindcss/cli -i ./src/input.css -o ./css/tailwind.css --minify

# Merge fitur ke main
git checkout main
git merge nama-branch
git push origin main
```

---

## 📬 Kontak

- 📧 Email: operational@harvindo.com
- 📱 WhatsApp: 0812-3177-3188
- 📍 Alamat: Jl. Raya Rt 01/Rw 02 Pangulah Selatan, Kec. Kota Baru, Kab. Karawang, Jawa Barat 41374
- 🌐 Website: [harvindosriananta.my.id](https://www.harvindosriananta.my.id)

---

© 2026 PT Harvindo Sri Ananta. All Rights Reserved.