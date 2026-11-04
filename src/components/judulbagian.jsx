function JudulBagian({ label, judul, rata = "tengah", terang = false }) {
  return (
    <div className={"judul-grup" + (rata === "tengah" ? " text-center" : "") + (terang ? " terang" : "")}>
      <p className="label-garis">{label}</p>
      <h2 className="judul-bagian">{judul}</h2>
    </div>
  );
}

export default JudulBagian;
