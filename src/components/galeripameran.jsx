import { dataPameran } from "../data/isi2.js";

function GaleriPameran() {
  return (
    <section className="pameran-gelap">
      <div className="container">
        <span className="label-kecil-biru terang">Latest Model</span>
        <h2 className="judul-pameran">Explore the beauty of our exhibition.</h2>
        <div className="row g-3">
          {dataPameran.map((f, i) => (
            <div className={i < 2 ? "col-md-6" : "col-md-4"} key={f.foto + i}>
              <div
                className={"foto-pameran " + (i < 2 ? "besar" : "kecil")}
                style={{ backgroundImage: `url("${f.foto}"), ${f.warna}` }}
                role="img"
                aria-label={"Foto pameran " + (i + 1)}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GaleriPameran;
