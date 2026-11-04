import { dataTim } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function TimPemandu() {
  return (
    <section className="tim-area">
      <div className="container">
        <JudulBagian label="Our Team" judul="Meet Our Excellent Guides" />
        <div className="row g-4 mt-2">
          {dataTim.map((o) => (
            <div className="col-6 col-lg-3" key={o.nama}>
              <div className="kartu-orang">
                <div className="foto-orang" style={{ backgroundImage: `url("${o.foto}"), ${o.warna}` }}>
                  <button type="button" className="tombol-bagikan" aria-label={"Bagikan " + o.nama}>
                    <Ikon nama="bagikan" ukuran={14} />
                  </button>
                </div>
                <div className="info-orang">
                  <h3>{o.nama}</h3>
                  <span>{o.jabatan}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TimPemandu;
