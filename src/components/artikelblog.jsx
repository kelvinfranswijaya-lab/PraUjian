import { dataBerita } from "../data/isi.js";
import JudulBagian from "./judulbagian.jsx";

function ArtikelBlog() {
  const utama = dataBerita.utama;

  return (
    <section className="blog-area" id="blog">
      <div className="container">
        <JudulBagian label="Blogs & News" judul="Our Latest News Feed" />
        <div className="row g-4 mt-2">
          <div className="col-lg-6">
            <article className="berita-utama" style={{ backgroundImage: `url("${utama.foto}"), ${utama.warna}` }}>
              <div className="teks-berita-utama">
                <span>{utama.kategori}</span>
                <h3>{utama.judul}</h3>
              </div>
            </article>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {dataBerita.kecil.map((b) => (
                <div className="col-6" key={b.judul}>
                  <article className="berita-kecil h-100">
                    <div className="foto-berita-kecil" style={{ backgroundImage: `url("${b.foto}"), ${b.warna}` }}></div>
                    <div className="isi-berita-kecil">
                      <small>{b.kategori}</small>
                      <h4>{b.judul}</h4>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtikelBlog;
