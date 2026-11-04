import { dataKapal } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function CardKapal({ kapal }) {
  return (
    <div className="card yacht-card-custom h-100">
      <div className="card-img-top foto-kapal-custom" style={{ backgroundImage: `url("${kapal.foto}"), ${kapal.warna}` }}></div>
      <div className="card-body isi-card-kapal">
        <h3 className="card-title nama-kapal-custom">{kapal.nama}</h3>
        <div className="baris-bintang">
          {[1, 2, 3, 4, 5].map((n) => (
            <Ikon key={n} nama="bintang" ukuran={14} />
          ))}
          <span className="teks-rating">({kapal.rating} Rating)</span>
        </div>
        <hr className="garis-kartu" />
        <div className="d-flex justify-content-between align-items-center gap-2">
          <div>
            <span className="kata-from">From</span>
            <span className="harga-sewa-kapal">{kapal.harga}</span>
          </div>
          <a href="#kontak" className="btn tombol-booknow">Book Now <Ikon nama="panah" ukuran={14} /></a>
        </div>
      </div>
    </div>
  );
}

function DaftarArmada() {
  return (
    <section className="armada-area" id="yacht">
      <div className="container">
        <JudulBagian label="For Sale & Rent" judul="Fleet of Luxury Boats" />
        <div className="row g-4 mt-2">
          {dataKapal.map((k) => (
            <div className="col-md-4" key={k.nama}>
              <CardKapal kapal={k} />
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <a href="#yacht" className="tombol-garis-biru">View All Yachts</a>
        </div>
      </div>
    </section>
  );
}

export default DaftarArmada;
