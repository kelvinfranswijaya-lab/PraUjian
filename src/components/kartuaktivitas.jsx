import { useState } from "react";
import { pilihanUkuran } from "../data/isi2.js";

function KartuAktivitas({ id }) {
  const [ukuran, setUkuran] = useState(pilihanUkuran[0]);
  const [pesan, setPesan] = useState("");
  const [sukses, setSukses] = useState(false);

  function mulaiBooking(e) {
    e.preventDefault();
    if (ukuran === pilihanUkuran[0]) {
      setSukses(false);
      setPesan("Pilih ukuran kapal dulu.");
    } else {
      setSukses(true);
      setPesan("Booking kapal " + ukuran + " dicatat.");
    }
  }

  return (
    <form className="kartu-aktivitas h-100" onSubmit={mulaiBooking}>
      <h3>Book For Activities</h3>
      <label className="visually-hidden" htmlFor={id}>Ukuran kapal</label>
      <select id={id} className="form-select select-merk-kita mb-3" value={ukuran} onChange={(e) => setUkuran(e.target.value)}>
        {pilihanUkuran.map((u) => (
          <option key={u}>{u}</option>
        ))}
      </select>
      <div className="d-grid">
        <button type="submit" className="btn tombol-search">Start Booking</button>
      </div>
      <p className={"pesan-booking " + (sukses ? "pesan-ok" : "pesan-gagal")}>{pesan}</p>
    </form>
  );
}

export default KartuAktivitas;
