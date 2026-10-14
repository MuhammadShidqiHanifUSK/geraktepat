import { useState } from "react";
import "./App.css";

function App() {
  const [latihan, setLatihan] = useState("Squat");
  const [mulai, setMulai] = useState(false);

  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">
          <span>G</span> GerakTepat
        </div>
        <div className="nav-label">SMART WORKOUT ASSISTANT</div>
      </nav>

      <section className="hero">
        <p className="eyebrow">LATIHAN LEBIH CERDAS</p>
        <h1>
          Perbaiki Gerakanmu.
          <br />
          <span>Capai Targetmu.</span>
        </h1>
        <p className="subtitle">
          Latihan bodyweight dengan panduan dan evaluasi gerakan untuk
          membantumu berlatih dengan lebih tepat.
        </p>
      </section>

      <section className="workspace">
        <div className="panel camera-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">AREA LATIHAN</p>
              <h2>Analisis Gerakan</h2>
            </div>
            <span className="status">{mulai ? "● DEMO AKTIF" : "● SIAP"}</span>
          </div>

          <div className="camera">
            <div className="person">🧍</div>
            <div className="camera-message">
              <strong>
                {mulai ? "Mode demo sedang berjalan" : "Siap untuk bergerak?"}
              </strong>
              <p>
                {mulai
                  ? `Latihan ${latihan} dipilih. Ikuti gerakan dengan posisi tubuh yang nyaman.`
                  : "Pilih latihan, lalu tekan tombol mulai untuk mencoba demo."}
              </p>
            </div>
            <span className="camera-tag">DEMO MODE</span>
          </div>

          <div className="controls">
            <label htmlFor="exercise">Pilih jenis latihan</label>
            <select
              id="exercise"
              value={latihan}
              onChange={(e) => {
                setLatihan(e.target.value);
                setMulai(false);
              }}
            >
              <option>Squat</option>
              <option>Push-up</option>
              <option>Lunges</option>
              <option>Plank</option>
            </select>
            <button onClick={() => setMulai(!mulai)}>
              {mulai ? "Hentikan Demo" : "▶  Mulai Latihan"}
            </button>
          </div>
        </div>

        <aside className="panel results-panel">
          <p className="eyebrow">RINGKASAN</p>
          <h2>Hasil Analisis</h2>
          <p className="muted">
            Hasil akan ditampilkan di sini saat fitur analisis gerakan
            diimplementasikan.
          </p>

          <div className="metric">
            <span>Jenis latihan</span>
            <strong>{latihan}</strong>
          </div>
          <div className="metric">
            <span>Status sesi</span>
            <strong>{mulai ? "Demo aktif" : "Belum dimulai"}</strong>
          </div>
          <div className="metric">
            <span>Jumlah repetisi</span>
            <strong>—</strong>
          </div>

          <div className="tip">
            <span>✦</span>
            <div>
              <strong>Tips latihan</strong>
              <p>
                Utamakan teknik dan posisi tubuh yang nyaman sebelum menambah
                intensitas.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <footer>GerakTepat · Prototype UTS POPL · Frontend Demo</footer>
    </main>
  );
}

export default App;
