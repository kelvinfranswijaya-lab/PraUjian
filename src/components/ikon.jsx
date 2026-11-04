const garis = {
  kemudi: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" /><path d="M12 1v3 M12 20v3 M1 12h3 M20 12h3 M4.2 4.2l2.1 2.1 M17.7 17.7l2.1 2.1 M19.8 4.2l-2.1 2.1 M6.3 17.7l-2.1 2.1" /></>,
  panah: <path d="M5 12h14 M13 6l6 6-6 6" />,
  atas: <path d="M6 15l6-6 6 6" />,
  gear: <><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="6.5" /><path d="M12 2v3 M12 19v3 M2 12h3 M19 12h3 M4.9 4.9l2.1 2.1 M17 17l2.1 2.1 M19.1 4.9L17 7 M7 17l-2.1 2.1" /></>,
  tv: <><rect x="2" y="4" width="20" height="13" rx="2" /><path d="M8 21h8 M12 17v4 M8.5 10.5l2.5 2.5 4.5-4.5" /></>,
  grafik: <path d="M4 20v-7 M9 20v-11 M14 20v-6 M19 20V5 M2 20h20" />,
  wifi: <><path d="M2 8.8a15 15 0 0 1 20 0 M5 12.6a10 10 0 0 1 14 0 M8.5 16.4a5 5 0 0 1 7 0" /><circle cx="12" cy="20" r="0.8" /></>,
  acara: <path d="M3 11v3a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1z M15 9a4 4 0 0 1 0 6 M18 7a8 8 0 0 1 0 10" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18 M12 3a14 14 0 0 1 0 18 M12 3a14 14 0 0 0 0 18" /></>,
  kapal: <path d="M12 3v13 M12 4c4 2 6 6 6 11h-6 M12 8c-3 1.5-4.5 4-4.5 7H12 M4 18h16l-2 3H6z" />,
  bintangsalju: <path d="M12 3v18 M4.2 7.5l15.6 9 M19.8 7.5l-15.6 9" />,
  acak: <path d="M16 3h5v5 M4 20L21 3 M21 16v5h-5 M15 15l6 6 M4 4l5 5" />,
  bagikan: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4 M15.4 6.5l-6.8 4" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  surat: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  pinterest: <><circle cx="12" cy="12" r="9.5" /><path d="M10.6 19L12.3 11 M9.4 13.4C8.2 10 10.3 7.6 12.6 7.6c2.2 0 3.6 1.5 3.6 3.3 0 2.2-1.4 3.7-3 3.7-.9 0-1.6-.5-1.9-1.1" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  telepon: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />,
};

function Ikon({ nama, ukuran = 24, tebal = 1.6 }) {
  if (nama === "bintang") {
    return (
      <svg width={ukuran} height={ukuran} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12,2 15.1,8.6 22,9.3 16.8,14 18.4,21 12,17.4 5.6,21 7.2,14 2,9.3 8.9,8.6" />
      </svg>
    );
  }
  return (
    <svg
      width={ukuran}
      height={ukuran}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={tebal}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {garis[nama]}
    </svg>
  );
}

export default Ikon;
