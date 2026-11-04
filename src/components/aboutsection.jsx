import { dataButirTentang } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function BagianTentang() {
  return (
    <section className="about-yacht-area" id="tentang">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-md-6">
            <div className="foto-tentang-wrap">
              <div className="foto-tentang-kita"></div>
            </div>
          </div>
          <div className="col-md-6">
            <JudulBagian label="About Us" judul="Welcome to Amanus, the best yachting platform" rata="kiri" />
            <p className="teks-pembuka">Dimply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since thewhen printer took this galleywhen an unknown printer took.</p>

            {dataButirTentang.map((b) => (
              <div className="butir-tentang" key={b.judul}>
                <span className="bulat-panah"><Ikon nama="panah" ukuran={14} tebal={2.2} /></span>
                <div>
                  <h3 className="judul-butir">{b.judul}</h3>
                  <p>{b.teks}</p>
                </div>
              </div>
            ))}

            <a href="#yacht" className="tombol-biru tombol-panah mt-2">View More <Ikon nama="panah" ukuran={15} tebal={2} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BagianTentang;
