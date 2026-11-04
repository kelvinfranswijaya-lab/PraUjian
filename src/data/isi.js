
// biar jalan juga kalo di-deploy ke sub-folder (github pages)
const base = import.meta.env.BASE_URL;

export const daftarMenu = [
  {
    nama: "Home",
    anak: [
      { teks: "Home", tautan: "#beranda" },
      { teks: "Home Two", tautan: "#/home-two" },
    ],
  },
  { nama: "Yacht Rent", anak: [{ teks: "Our Yachts", tautan: "#yacht" }] },
  {
    nama: "Destinations",
    anak: [
      { teks: "Popular Destinations", tautan: "#destinasi" },
      { teks: "Destinations Details", tautan: "#" },
    ],
  },
  { nama: "Blog", anak: [{ teks: "Blog Grid", tautan: "#blog" }] },
  { nama: "Contact", tautan: "#kontak" },
];

// data buat slider home
export const dataSlide = [
  {
    judul: "Boats and Yacht Rentals",
    teks: "Enjoy the perfect service and luxury",
    gambar: base + "images/foto/photo-1605281317010-fe5ffe798166.avif",
    lokal: base + "images/slide-1.svg",
    warna: "linear-gradient(200deg, #0a2540 0%, #14607f 50%, #e0b46a 110%)",
  },
  {
    judul: "Our Premier Boats",
    teks: "Enjoy the perfect service and luxury",
    gambar: base + "images/foto/photo-1567899378494-47b22a2ae96a.avif",
    lokal: base + "images/slide-2.svg",
    warna: "linear-gradient(160deg, #0b3a5b 0%, #1d7fa8 55%, #7fd0e8 100%)",
  },
  {
    judul: "Sail to Beautiful Places",
    teks: "Make every trip an unforgettable memory",
    gambar: base + "images/foto/photo-1559599238-308793637427.avif",
    lokal: base + "images/slide-3.svg",
    warna: "linear-gradient(160deg, #0d5c7a 0%, #3b9bc0 60%, #9bdcec 100%)",
  },
];

export const dataMerk = ["All Makes", "Sunseeker", "Azimut", "Princess", "Ferretti"];

export const dataButirTentang = [
  { judul: "Exciting Places", teks: "Lorem ipsum scelerisque molestie id molestie magna etiam sollicitudin tempus consectetur conubia, the nunc." },
  { judul: "Different Yachts", teks: "Lorem ipsum scelerisque molestie id molestie magna etiam sollicitudin tempus consectetur conubia, the nunc." },
];

export const dataKapal = [
  { nama: "Ocean Dream", foto: base + "images/foto/photo-1569263979104-865ab7cd8d13.avif", harga: "$450 / hari", rating: "5.00", warna: "linear-gradient(160deg, #0b3a5b, #3b9bc0)" },
  { nama: "Blue Wave 2023", foto: base + "images/foto/photo-1540946485063-a40da27545f8.avif", harga: "$320 / hari", rating: "5.00", warna: "linear-gradient(200deg, #1b3555, #e0b46a)" },
  { nama: "Sea Breeze", foto: base + "images/foto/photo-1605281317010-fe5ffe798166.avif", harga: "$280 / hari", rating: "5.00", warna: "linear-gradient(160deg, #124a6b, #6cc3dd)" },
];

export const dataTawaran = [
  { nama: "Yacht", ikon: "kapal" },
  { nama: "Yacht Charters", ikon: "bintangsalju" },
  { nama: "Management", ikon: "acak" },
];

export const dataTujuan = {
  t1: { nama: "Santorini", foto: base + "images/foto/photo-1533105079780-92b9be482077.avif", warna: "linear-gradient(160deg, #0d5c7a, #9bdcec)" },
  t4: { nama: "Maldives", foto: base + "images/foto/photo-1519046904884-53103b34b206.avif", warna: "linear-gradient(170deg, #0a6e72, #8be0c9)" },
  t6: { nama: "Bali", foto: base + "images/foto/photo-1537996194471-e657df975ab4.avif", warna: "linear-gradient(200deg, #14365c, #e88a6a)" },
  t2: { nama: "Phuket", foto: base + "images/foto/photo-1500530855697-b586d89ba3ee.avif", warna: "linear-gradient(160deg, #1b4d63, #8cc7b8)" },
  t3: { nama: "Singapore", foto: base + "images/foto/photo-1525625293386-3f8f99389edd.avif", warna: "linear-gradient(200deg, #0b3a5b, #4fa3c7)" },
  t5: { nama: "Dubai Marina", foto: base + "images/foto/photo-1512453979798-5ea266f8880c.avif", warna: "linear-gradient(160deg, #123a56, #7ec5d6)" },
  t7: { nama: "Amalfi", foto: base + "images/foto/photo-1516483638261-f4dbaf036963.avif", warna: "linear-gradient(200deg, #0b3a5b, #3b9bc0 70%, #e0b46a 130%)" },
};

export const dataAngka = [
  { nilai: "914K +", label: "Yachts to See" },
  { nilai: "124K +", label: "Charter Destination" },
  { nilai: "75K +", label: "Year in Business" },
  { nilai: "85K +", label: "Yachts Sold" },
];

export const dataFitur = [
  { ikon: "gear", judul: "Charter Guide", teks: "Panduan lengkap sebelum berlayar: rute, cuaca, dan perlengkapan yang perlu dibawa untuk perjalanan Anda." },
  { ikon: "tv", judul: "TV And Music", teks: "Setiap kapal dilengkapi layar dan sound system supaya perjalanan panjang tetap menyenangkan." },
  { ikon: "grafik", judul: "Yacht Service", teks: "Perawatan rutin dan pemeriksaan sebelum berangkat, jadi kapal selalu siap dipakai." },
  { ikon: "wifi", judul: "Free Wifi", teks: "Koneksi internet tersedia di sebagian besar kapal selama masih dalam jangkauan pantai." },
  { ikon: "acara", judul: "Event Planing", teks: "Kami bantu atur dekorasi, makanan, dan jadwal untuk acara pribadi di atas kapal." },
  { ikon: "globe", judul: "Unbiased global", teks: "Pilihan kapal dan destinasi dari berbagai negara dengan harga yang jelas dan terbuka." },
];

export const dataTesti = [
  { nama: "Andi Pratama", foto: base + "images/foto/photo-1507003211169-0a1dd7228f2d.avif", isi: "Pelayanannya ramah dan kapalnya bersih sekali. Liburan keluarga kami jadi tidak terlupakan." },
  { nama: "Rina Wijaya", foto: base + "images/foto/photo-1534528741775-53994a69daeb.avif", isi: "Proses pemesanan gampang dan krunya sangat membantu. Pasti sewa lagi tahun depan." },
  { nama: "Budi Santoso", foto: base + "images/foto/photo-1506794778202-cad84cf45f1d.avif", isi: "Harga masuk akal untuk kualitas yang kami dapat. Pemandangannya luar biasa." },
];

export const dataTim = [
  { nama: "Rama Putra", jabatan: "Captain", foto: base + "images/foto/photo-1507003211169-0a1dd7228f2d.avif", warna: "linear-gradient(170deg, #cfe3ee, #7fb2cc)" },
  { nama: "Dimas Aryo", jabatan: "Second Captain", foto: base + "images/foto/photo-1500648767791-00dcc994a43e.avif", warna: "linear-gradient(170deg, #b9d6e3, #5f94b0)" },
  { nama: "Bayu Santoso", jabatan: "Skipper", foto: base + "images/foto/photo-1506794778202-cad84cf45f1d.avif", warna: "linear-gradient(170deg, #d8e6ec, #8fb4c4)" },
  { nama: "Fajar Nugroho", jabatan: "Skipper", foto: base + "images/foto/photo-1519085360753-af0119f7cbe7.avif", warna: "linear-gradient(170deg, #c6dde8, #6fa3bd)" },
];

export const dataBerita = {
  utama: { kategori: "Boat Trip", judul: "Panduan memilih rute berlayar pertama untuk pemula", foto: base + "images/foto/photo-1500530855697-b586d89ba3ee.avif", warna: "linear-gradient(170deg, #0b4f86, #1d7fc0 50%, #0a2540)" },
  kecil: [
    { kategori: "Uncategorized", judul: "Yacht baru dengan rute wisata menarik...", foto: base + "images/foto/photo-1544551763-46a013bb70d5.avif", warna: "linear-gradient(160deg, #6cc3dd, #e9c9a0)" },
    { kategori: "Uncategorized", judul: "Nikmati pemandangan pantai dari atas kapal...", foto: base + "images/foto/photo-1500375592092-40eb2168fd21.avif", warna: "linear-gradient(160deg, #1d7fa8, #0a2540)" },
    { kategori: "Uncategorized", judul: "Aturan baru sewa kapal di perairan wisata...", foto: base + "images/foto/photo-1518837695005-2083093ee35b.avif", warna: "linear-gradient(200deg, #124a6b, #9bdcec)" },
    { kategori: "Uncategorized", judul: "Superyacht siap bergabung dengan armada kami...", foto: base + "images/foto/photo-1569263979104-865ab7cd8d13.avif", warna: "linear-gradient(160deg, #e0b46a, #1d7fa8)" },
  ],
};

export const dataGaleri = [
  { foto: base + "images/foto/photo-1540946485063-a40da27545f8.avif", warna: "linear-gradient(160deg, #1d7fa8, #0a2540)" },
  { foto: base + "images/foto/photo-1567899378494-47b22a2ae96a.avif", warna: "linear-gradient(160deg, #e0b46a, #1d7fa8)" },
  { foto: base + "images/foto/photo-1500375592092-40eb2168fd21.avif", warna: "linear-gradient(200deg, #6cc3dd, #124a6b)" },
  { foto: base + "images/foto/photo-1518837695005-2083093ee35b.avif", warna: "linear-gradient(160deg, #9bdcec, #e88a6a)" },
];
