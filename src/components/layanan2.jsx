import { dataLayanan2 } from "../data/isi2.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function Layanan2() {
  return (
    <section className="layanan-dua">
      <div className="container">
        <JudulBagian label="What We Do" judul="Why Choose Us" />
        <div className="row g-4 mt-2">
          {dataLayanan2.map((l) => (
            <div className="col-md-6 col-lg-4" key={l.judul}>
              <div className="kotak-layanan h-100">
                <div className="bulat-layanan"><Ikon nama={l.ikon} ukuran={26} tebal={1.5} /></div>
                <div>
                  <h3>{l.judul}</h3>
                  <p className="mb-0">{l.teks}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="#kontak" className="tombol-biru">Book Today</a>
        </div>
      </div>
    </section>
  );
}

export default Layanan2;
