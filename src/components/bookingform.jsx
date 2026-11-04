import { useState } from "react";
import { dataMerk } from "../data/isi.js";

function FormBooking() {
  const [ambil, setAmbil] = useState("");
  const [kembali, setKembali] = useState("");
  const [merk, setMerk] = useState(dataMerk[0]);
  const [pesan, setPesan] = useState("");
  const [sukses, setSukses] = useState(false);

  function kirimCari(e) {
    e.preventDefault();
    if (ambil === "" || kembali === "") {
      setSukses(false);
      setPesan("Tanggal pick-up dan drop-off harus diisi.");
    } else if (kembali < ambil) {
      setSukses(false);
      setPesan("Tanggal drop-off tidak boleh sebelum tanggal pick-up.");
    } else {
      setSukses(true);
      setPesan("Mencari kapal " + merk + " dari " + ambil + " sampai " + kembali + ".");
    }
  }

  return (
    <section className="booking-wrap">
      <div className="container">
        <form className="booking-bar-shadow" onSubmit={kirimCari}>
          <div className="row g-3 align-items-end">
            <div className="col-md-6 col-lg-3">
              <label className="label-booking" htmlFor="tgl-ambil">Pick - Up Date:</label>
              <input
                id="tgl-ambil"
                type="date"
                className="form-control input-abu-kita"
                value={ambil}
                onChange={(e) => setAmbil(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="label-booking" htmlFor="tgl-kembali">Drop - Off Date:</label>
              <input
                id="tgl-kembali"
                type="date"
                className="form-control input-abu-kita"
                value={kembali}
                onChange={(e) => setKembali(e.target.value)}
              />
            </div>
            <div className="col-md-6 col-lg-3">
              <label className="label-booking" htmlFor="pilih-merk">Select Make</label>
              <select
                id="pilih-merk"
                className="form-select select-merk-kita"
                value={merk}
                onChange={(e) => setMerk(e.target.value)}
              >
                {dataMerk.map((m) => (
                  <option key={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="col-md-6 col-lg-3 d-grid">
              <button type="submit" className="btn tombol-search">Search</button>
            </div>
          </div>
          <p className={"pesan-booking " + (sukses ? "pesan-ok" : "pesan-gagal")}>{pesan}</p>
        </form>
      </div>
    </section>
  );
}

export default FormBooking;
