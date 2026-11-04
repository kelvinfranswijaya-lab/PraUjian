import KartuAktivitas from "./kartuaktivitas.jsx";
import Ikon from "./ikon.jsx";

function Tentang2() {
  return (
    <section className="tentang-dua" id="tentang">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-8">
            <div className="row g-4 align-items-center">
              <div className="col-md-5">
                <div className="foto-tentang-dua">
                  <span className="bulat-play kecil">Play</span>
                </div>
              </div>
              <div className="col-md-7">
                <span className="label-kecil-biru">Who We Are</span>
                <h2 className="judul-tentang-dua">Welcome to Sailing! Best Water Sports Agency in Thailand.</h2>
                <p className="paragraf-awal">Yachts are places of entertainment, discovery and relaxation. Sewa kapal bersama kami dan nikmati perjalanan laut yang tidak akan terlupakan, dengan kru yang mengurus semuanya dari pelabuhan sampai kembali lagi.</p>
                <a href="#yacht" className="link-panah">More About Us <Ikon nama="panah" ukuran={14} tebal={2} /></a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <KartuAktivitas id="ukuran-0" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Tentang2;
