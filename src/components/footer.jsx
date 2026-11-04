import { useState, useEffect } from "react";
import { dataGaleri } from "../data/isi.js";
import Logo from "./logo.jsx";
import Ikon from "./ikon.jsx";

function Footer() {
  const [tombolNaik, setTombolNaik] = useState(false);

  useEffect(() => {
    function cekScroll() {
      setTombolNaik(window.scrollY > 400);
    }
    window.addEventListener("scroll", cekScroll);
    cekScroll();
    return () => window.removeEventListener("scroll", cekScroll);
  }, []);

  return (
    <footer className="footer-yacht-dark" id="kontak">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-3">
            <Logo terang />
            <p className="mt-3">Lorem ipsum dolor sit amet, consec tetur elit eiusmod tempor incididunt labore dolore magna aliqua consec tetur adipis cing elite</p>
            <div className="d-flex gap-2">
              <a href="#" className="bulat-sosial" aria-label="Facebook"><Ikon nama="facebook" ukuran={15} tebal={1.8} /></a>
              <a href="#" className="bulat-sosial" aria-label="Pinterest"><Ikon nama="pinterest" ukuran={16} tebal={1.8} /></a>
              <a href="#" className="bulat-sosial" aria-label="Instagram"><Ikon nama="instagram" ukuran={16} tebal={1.8} /></a>
              <a href="#" className="bulat-sosial" aria-label="LinkedIn"><Ikon nama="linkedin" ukuran={15} tebal={1.8} /></a>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <h5>Quicklinks</h5>
            <ul className="list-unstyled">
              <li><a href="#beranda">Home</a></li>
              <li><a href="#yacht">Yacht Rent</a></li>
              <li><a href="#destinasi">Destination</a></li>
              <li><a href="#tentang">Pages</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#kontak">Contact</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-6 col-lg-3">
            <h5>Get In Touch</h5>
            <ul className="list-unstyled daftar-kontak-kaki">
              <li><span className="ikon-kontak"><Ikon nama="pin" ukuran={18} /></span><div><b>Location:</b><br />2976 Sunrise Avenue, Las Vegas</div></li>
              <li><span className="ikon-kontak"><Ikon nama="surat" ukuran={18} /></span><div><b>Email:</b><br />example@mail.com</div></li>
              <li><span className="ikon-kontak"><Ikon nama="telepon" ukuran={18} /></span><div><b>Phone:</b><br />+8 91230 456 789</div></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5>Gallery</h5>
            <div className="galeri-kecil">
              {dataGaleri.map((g, i) => (
                <div key={i} style={{ backgroundImage: `url("${g.foto}"), ${g.warna}` }}></div>
              ))}
            </div>
          </div>
        </div>
        <p className="hak-cipta text-center mb-0">&copy; 2025 Tripzap. Tugas Pemrograman Antarmuka.</p>
      </div>

      {tombolNaik && (
        <button type="button" className="tombol-naik" aria-label="Kembali ke atas" onClick={() => window.scrollTo(0, 0)}>
          <Ikon nama="atas" ukuran={22} tebal={2.4} />
        </button>
      )}
    </footer>
  );
}

export default Footer;
