import { dataBlog2 } from "../data/isi2.js";
import JudulBagian from "./judulbagian.jsx";
import Ikon from "./ikon.jsx";

function Blog2() {
  return (
    <section className="blog-area" id="blog">
      <div className="container">
        <JudulBagian label="Latest Blog" judul="Recent blog & articles" rata="kiri" />
        <div className="row g-4">
          {dataBlog2.map((b) => (
            <div className="col-md-6 col-lg-4" key={b.judul}>
              <article className="kartu-blog-dua h-100">
                <div className="foto-blog-dua" style={{ backgroundImage: `url("${b.foto}"), ${b.warna}` }}></div>
                <div className="isi-blog-dua">
                  <div className="meta-blog-dua"><span>Uncategorized</span><span>tripzap</span></div>
                  <h3>{b.judul}</h3>
                  <p>Often the subject of controversy among athletes and followers of the sport.</p>
                  <a href="#blog" className="link-panah">Read More <Ikon nama="panah" ukuran={14} tebal={2} /></a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog2;
