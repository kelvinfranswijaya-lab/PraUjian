import { dataTesti } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";

function Testimoni() {
  return (
    <section className="testi-gelap" id="testimoni">
      <div className="container">
        <JudulBagian label="Testimonials" judul="The Best Days Are Spent" terang />
        <div className="row g-4 mt-3">
          {dataTesti.map((t) => (
            <div className="col-md-4 text-center" key={t.nama}>
              <p className="teks-testi">{t.isi}</p>
              <div className="foto-testi" style={{ backgroundImage: `url("${t.foto}")` }} role="img" aria-label={t.nama}></div>
              <h4 className="nama-testi">{t.nama}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
