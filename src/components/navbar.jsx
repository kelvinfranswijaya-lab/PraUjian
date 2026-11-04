import { useEffect, useState } from "react";
import { daftarMenu } from "../data/isi.js";
import Logo from "./logo.jsx";

function Navbar() {
  const [sudahScroll, setSudahScroll] = useState(false);

  // kasih shadow kalo udah scroll
  useEffect(() => {
    function cekScroll() {
      setSudahScroll(window.scrollY > 20);
    }
    window.addEventListener("scroll", cekScroll);
    cekScroll();
    return () => window.removeEventListener("scroll", cekScroll);
  }, []);

  return (
    <header className={"nav-yacht-custom" + (sudahScroll ? " menempel" : "")}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-lg-5">
          <div className="navbar-brand m-0"><Logo /></div>

          <button
            className="navbar-toggler tombol-menu"
            type="button"
            aria-label="Buka menu"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavigasiYacht"
            aria-controls="menuNavigasiYacht"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="menuNavigasiYacht">
            <ul className="navbar-nav menu-list">
              {daftarMenu.map((item) =>
                item.anak ? (
                  <li key={item.nama} className="nav-item dropdown">
                    <button
                      className="nav-link dropdown-toggle border-0 bg-transparent"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {item.nama}
                    </button>
                    <ul className="dropdown-menu sub-menu-kita">
                      {item.anak.map((sub) => (
                        <li key={sub.teks}>
                          <a className="dropdown-item" href={sub.tautan}>
                            {sub.teks}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.nama} className="nav-item">
                    <a className="nav-link" href={item.tautan}>{item.nama}</a>
                  </li>
                )
              )}
            </ul>

          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
