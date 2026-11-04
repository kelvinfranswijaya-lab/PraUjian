import { dataSlide } from "../data/isi.js";

// slider pake bootstrap carousel
function HeroSlider() {
  const carouselId = "beranda";

  return (
    <section
      id={carouselId}
      className="carousel slide slider-kita"
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-pause="hover"
    >
      <div className="carousel-indicators">
        {dataSlide.map((s, i) => (
          <button
            key={s.judul}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : undefined}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="carousel-inner">
        {dataSlide.map((s, i) => (
          <div key={s.judul} className={`carousel-item${i === 0 ? " active" : ""}`}>
            <div
              className="latar-slide"
              style={{ backgroundImage: `url("${s.gambar}"), url("${s.lokal}"), ${s.warna}` }}
            />
            <div className="slider-overlay-dark" />
            <div className="isi-slide">
              <h1 className="judul-slide">{s.judul}</h1>
              <p className="teks-slide">{s.teks}</p>
              <a href="#yacht" className="tombol-slide">Discover More</a>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev panah-slide" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Sebelumnya</span>
      </button>
      <button className="carousel-control-next panah-slide" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Berikutnya</span>
      </button>
    </section>
  );
}

export default HeroSlider;
