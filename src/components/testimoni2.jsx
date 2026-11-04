import { useState } from "react";
import { dataTesti2 } from "../data/isi2.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function Testimoni2() {
  const [halaman, setHalaman] = useState(0);
  const jumlahHalaman = Math.ceil(dataTesti2.length / 2);
  const tampil = dataTesti2.slice(halaman * 2, halaman * 2 + 2);

  return (
    <section className="testi-gelap" id="testimoni">
      <div className="container">
        <JudulBagian label="Testimonial" judul="What Are Customer Says?" terang />
        <div className="row g-4 mt-3" key={halaman}>
          {tampil.map((t) => (
            <div className="col-lg-6" key={t.nama}>
              <div className="kartu-testi-dua">
                <div className="foto-testi-dua" style={{ backgroundImage: `url("${t.foto}")` }} role="img" aria-label={t.nama}></div>
                <div>
                  <div className="bintang-kuning">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Ikon key={n} nama="bintang" ukuran={15} />
                    ))}
                  </div>
                  <p className="teks-testi-dua">“{t.isi}”</p>
                  <h4 className="nama-testi">{t.nama}</h4>
                  <small className="tanggal-testi">{t.tanggal}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="titik-testi">
          {Array.from({ length: jumlahHalaman }, (_, i) => (
            <button
              key={i}
              type="button"
              className={i === halaman ? "aktif" : ""}
              aria-label={"Testimoni halaman " + (i + 1)}
              onClick={() => setHalaman(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni2;
