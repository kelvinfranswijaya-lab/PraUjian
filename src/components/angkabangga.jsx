import { useState, useEffect, useRef } from "react";
import { dataAngka } from "../data/isi.js";

// counter angka, jalan pas keliatan di layar
function AngkaHitung({ nilai }) {
  const target = parseInt(nilai);
  const akhiran = nilai.replace(String(target), "");
  const [tampil, setTampil] = useState(0);
  const boxRef = useRef(null);

  useEffect(() => {
    let jam;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let sekarang = 0;
      jam = setInterval(() => {
        sekarang += Math.ceil(target / 50);
        if (sekarang >= target) {
          sekarang = target;
          clearInterval(jam);
        }
        setTampil(sekarang);
      }, 30);
    });
    observer.observe(boxRef.current);
    return () => {
      observer.disconnect();
      clearInterval(jam);
    };
  }, [target]);

  return (
    <div className="angka" ref={boxRef}>
      {tampil}
      {akhiran}
    </div>
  );
}

function AngkaBangga() {
  return (
    <>
      <section className="banner-play">
        <button type="button" className="cincin-play" aria-label="Play video">
          <span className="bulat-play">Play</span>
        </button>
      </section>

      <section className="pita-angka">
        <div className="container">
          <div className="row g-0">
            {dataAngka.map((a) => (
              <div className="col-6 col-md-3" key={a.label}>
                <div className="kolom-angka">
                  <AngkaHitung nilai={a.nilai} />
                  <p className="label-angka">{a.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AngkaBangga;
