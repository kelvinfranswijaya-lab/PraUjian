import Ikon from "./ikon.jsx";

function Logo({ terang }) {
  return (
    <a className={"logo-brand" + (terang ? " di-gelap" : "")} href="#beranda">
      <Ikon nama="kemudi" ukuran={34} tebal={1.8} />
      <span>Trip<b>Zap</b></span>
    </a>
  );
}

export default Logo;
