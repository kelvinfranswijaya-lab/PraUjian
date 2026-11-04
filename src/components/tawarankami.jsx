import { dataTawaran } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function TawaranKami() {
  return (
    <section className="tawaran-kita">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-5">
            <div className="text-center">
              <JudulBagian label="Explore" judul="What We Offer" terang />
              <div className="d-flex justify-content-center gap-3 gap-lg-4 mt-4">
                {dataTawaran.map((t) => (
                  <div className="kolom-tawaran" key={t.nama}>
                    <div className="bulat-tawaran"><Ikon nama={t.ikon} ukuran={26} tebal={1.4} /></div>
                    <p className="nama-tawaran">{t.nama}</p>
                  </div>
                ))}
              </div>
              <a href="#yacht" className="tombol-biru mt-3">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TawaranKami;
