import { dataKapal2 } from "../data/isi2.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function KartuKapal2({ kapal }) {
  return (
    <div className="card kartu-kapal-dua h-100">
      <div className="row g-0 h-100">
        <div className="col-sm-5">
          <div className="foto-kapal-dua" style={{ backgroundImage: `url("${kapal.foto}"), ${kapal.warna}` }}></div>
        </div>
        <div className="col-sm-7">
          <div className="card-body isi-kapal-dua">
            <div className="d-flex justify-content-between small">
              <span className="lokasi-kapal">{kapal.lokasi}</span>
              <span className="nilai-kapal"><Ikon nama="bintang" ukuran={12} /> 4.5/5</span>
            </div>
            <h3 className="card-title">{kapal.nama}</h3>
            <p className="spesifikasi-kapal">12 Guests · 6 Beds · 2 Cabins · 1 Bathroom</p>
            <div className="d-flex justify-content-between align-items-center gap-2">
              <span className="harga-sewa-kapal">${kapal.harga} <small>/ week</small></span>
              <a href="#kontak" className="btn tombol-booknow">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KapalMusim() {
  return (
    <section className="armada-area" id="yacht">
      <div className="container">
        <JudulBagian label="Book Today" judul="Yacht & Boats For All Seasons" />
        <div className="row g-4 mt-2">
          {dataKapal2.map((k) => (
            <div className="col-lg-6" key={k.nama}>
              <KartuKapal2 kapal={k} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KapalMusim;
