import Navbar from "./navbar.jsx";
import HeroSlider from "./heroslider.jsx";
import FormBooking from "./bookingform.jsx";
import BagianTentang from "./aboutsection.jsx";
import BannerSelamat from "./bannerselamat.jsx";
import DaftarArmada from "./fleetcards.jsx";
import TawaranKami from "./tawarankami.jsx";
import Destinasi from "./destinasi.jsx";
import AngkaBangga from "./angkabangga.jsx";
import FiturSukses from "./fitursukses.jsx";
import Testimoni from "./testimoni.jsx";
import TimPemandu from "./timpemandu.jsx";
import ArtikelBlog from "./artikelblog.jsx";
import AjakanSewa from "./ajakansewa.jsx";
import Footer from "./footer.jsx";
import Muncul from "./muncul.jsx";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FormBooking />
      <Muncul><BagianTentang /></Muncul>
      <BannerSelamat />
      <Muncul><DaftarArmada /></Muncul>
      <Muncul><TawaranKami /></Muncul>
      <Muncul><Destinasi /></Muncul>
      <AngkaBangga />
      <Muncul><FiturSukses /></Muncul>
      <Muncul><Testimoni /></Muncul>
      <Muncul><TimPemandu /></Muncul>
      <Muncul><ArtikelBlog /></Muncul>
      <Muncul><AjakanSewa /></Muncul>
      <Footer />
    </>
  );
}

export default Home;
