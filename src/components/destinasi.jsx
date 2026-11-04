import { dataTujuan } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";

function KotakTujuan({ data, ukuran }) {
  return (
    <a href="#" className={"tujuan-kotak " + ukuran} style={{ backgroundImage: `url("${data.foto}"), ${data.warna}` }}>
      <span>{data.nama}</span>
    </a>
  );
}

function Destinasi({ data = dataTujuan }) {
  const t = data;
  return (
    <section className="destinasi-area" id="destinasi">
      <div className="container">
        <JudulBagian label="Places To Go" judul="The Perfect Destinations" />

        <div className="row g-3 g-lg-4 mt-2">
          <div className="col-lg-6">
            <div className="kolom-mozaik">
              <KotakTujuan data={t.t1} ukuran="tinggi" />
              <div className="row g-3 g-lg-4">
                <div className="col-6"><KotakTujuan data={t.t2} ukuran="pendek" /></div>
                <div className="col-6"><KotakTujuan data={t.t3} ukuran="pendek" /></div>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="kolom-mozaik">
              <KotakTujuan data={t.t4} ukuran="tinggi" />
              <KotakTujuan data={t.t5} ukuran="pendek" />
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="kolom-mozaik">
              <KotakTujuan data={t.t6} ukuran="pendek" />
              <KotakTujuan data={t.t7} ukuran="tinggi" />
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a href="#destinasi" className="tombol-garis-biru">All Destinations</a>
        </div>
      </div>
    </section>
  );
}

export default Destinasi;
