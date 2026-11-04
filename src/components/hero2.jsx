import { dataSlide2 } from "../data/isi2.js";

// slider home two, sama kayak yg home satu
function Hero2() {
  const carouselId = "carouselHome2";

  return (
    <section
      className="carousel slide slider-kita slider-dua"
      id={carouselId}
      data-bs-ride="carousel"
      data-bs-interval="5000"
      data-bs-pause="hover"
    >
      <div className="carousel-indicators">
        {dataSlide2.map((s, i) => (
          <button
            key={s.foto}
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
        {dataSlide2.map((s, i) => (
          <div key={s.foto} className={`carousel-item${i === 0 ? " active" : ""}`}>
            <div className="latar-slide" style={{ backgroundImage: `url("${s.foto}"), ${s.warna}` }} />
            {i === 0 && (
              <video
                className="video-latar-slide"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={s.foto}
                aria-hidden="true"
              >
                <source src={import.meta.env.BASE_URL + "videos/yacht-background.mp4"} type="video/mp4" />
              </video>
            )}
            <div className="slider-overlay-dark" />
            <div className="isi-slide-kiri">
              <h1 className="judul-hero-dua">Boats and Yacht Rental</h1>
              <p className="teks-hero-dua">Yachting is one of life’s greatest pleasures! We help create unforgettable yacht charters from start to finish.</p>
              <div className="baris-hero-dua">
                <a href="#yacht" className="tombol-slide">Discover More</a>
                <button type="button" className="tombol-play-kecil" aria-label="Play video" />
              </div>
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

export default Hero2;
