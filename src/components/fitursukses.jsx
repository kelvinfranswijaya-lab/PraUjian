import { dataFitur } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function FiturSukses() {
  return (
    <section className="fitur-area">
      <div className="container">
        <JudulBagian label="Basic Features" judul="Our Way to Success" />
        <div className="row g-4 mt-2">
          {dataFitur.map((f) => (
            <div className="col-md-6 col-lg-4" key={f.judul}>
              <div className="kotak-fitur h-100">
                <div className="ikon-fitur"><Ikon nama={f.ikon} ukuran={42} tebal={1.3} /></div>
                <h3>{f.judul}</h3>
                <p className="mb-0">{f.teks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiturSukses;
