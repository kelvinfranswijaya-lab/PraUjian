import { dataPaket, fasilitasPaket } from "../data/isi2.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function PaketHarga() {
  return (
    <section className="paket-area">
      <div className="container">
        <JudulBagian label="Pricing Plan" judul="Choose Your Pricing Plan" />
        <div className="row g-4 mt-2">
          {dataPaket.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.nama}>
              <div className="kartu-paket h-100">
                <h3>{p.nama}</h3>
                <div className="harga-paket">
                  <sup>$</sup>{p.harga}<small>/ Week</small>
                </div>
                <ul className="list-unstyled">
                  {fasilitasPaket.map((f) => (
                    <li key={f}><Ikon nama="panah" ukuran={12} tebal={2.2} /> {f}</li>
                  ))}
                </ul>
                <a href="#kontak" className="tombol-garis-biru">Choose Plan</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PaketHarga;
