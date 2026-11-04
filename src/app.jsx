import { useState, useEffect } from "react";
import Home from "./components/home.jsx";
import Home2 from "./components/home2.jsx";

// ga pake react-router, cek hash di url aja
function App() {
  const [halaman, setHalaman] = useState(window.location.hash === "#/home-two" ? "dua" : "satu");

  useEffect(() => {
    function cekAlamat() {
      const h = window.location.hash;
      if (h === "#/home-two") {
        setHalaman("dua");
        window.scrollTo(0, 0);
      } else if (h === "" || h === "#" || h === "#beranda") {
        setHalaman("satu");
        window.scrollTo(0, 0);
      }
    }
    window.addEventListener("hashchange", cekAlamat);
    return () => window.removeEventListener("hashchange", cekAlamat);
  }, []);

  return halaman === "dua" ? <Home2 /> : <Home />;
}

export default App;
