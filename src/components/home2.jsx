import Navbar from "./navbar.jsx";
import Hero2 from "./hero2.jsx";
import Tentang2 from "./tentang2.jsx";
import Destinasi from "./destinasi.jsx";
import Testimoni2 from "./testimoni2.jsx";
import Layanan2 from "./layanan2.jsx";
import KapalMusim from "./kapalmusim.jsx";
import GaleriPameran from "./galeripameran.jsx";
import TimPemandu from "./timpemandu.jsx";
import PaketHarga from "./paketharga.jsx";
import Blog2 from "./blog2.jsx";
import Footer from "./footer.jsx";
import Muncul from "./muncul.jsx";
import { dataTujuan2 } from "../data/isi2.js";

function Home2() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <Muncul><Tentang2 /></Muncul>
      <Muncul><Destinasi data={dataTujuan2} /></Muncul>
      <Testimoni2 />
      <Muncul><Layanan2 /></Muncul>
      <Muncul><KapalMusim /></Muncul>
      <GaleriPameran />
      <Muncul><TimPemandu /></Muncul>
      <Muncul><PaketHarga /></Muncul>
      <Muncul><Blog2 /></Muncul>
      <Footer />
    </>
  );
}

export default Home2;
