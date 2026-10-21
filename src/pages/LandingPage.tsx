type LandingPageProps = {
  onStart: () => void;
};

function LandingPage({ onStart }: LandingPageProps) {
  return (
    <main className="app landing-page">
      <nav className="navbar">
        <div className="brand">
          <span>G</span> GerakTepat
        </div>
        <div className="nav-label">SMART WORKOUT ASSISTANT</div>
      </nav>

      <section className="landing-hero" id="beranda">
        <p className="eyebrow">SMART WORKOUT ASSISTANT</p>

        <h1>
          Bergerak Lebih Baik.
          <br />
          <span>Berlatih Lebih Tepat.</span>
        </h1>

        <p className="landing-description">
          Latihan bodyweight dengan panduan yang lebih terarah. Kenali gerakan,
          perbaiki teknik, dan bangun kebiasaan berolahraga dari rumah.
        </p>

        <div className="landing-actions">
          <button type="button" onClick={onStart}>
            Mulai Latihan <span>→</span>
          </button>

          <a href="#fitur">
            Jelajahi Fitur <span>↓</span>
          </a>
        </div>

        <div className="landing-note">
          <span className="note-dot" />
          Mulai dari gerakan sederhana, berkembang selangkah demi selangkah.
        </div>
      </section>

      <section className="features-section" id="fitur">
        <div className="section-heading">
          <p className="eyebrow">FITUR UNGGULAN</p>
          <h2>
            Latihan lebih terarah, <span>lebih bermakna.</span>
          </h2>
          <p>
            Semua yang kamu butuhkan untuk memulai latihan bodyweight dalam satu
            tempat.
          </p>
        </div>

        <div className="features-grid">
          <article className="feature-card">
            <div className="feature-icon">01</div>
            <h3>Panduan Latihan</h3>
            <p>
              Pilih latihan seperti squat, push-up, lunges, dan plank sesuai
              kebutuhanmu.
            </p>
            <span className="feature-tag">PILIH LATIHAN</span>
          </article>

          <article className="feature-card">
            <div className="feature-icon">02</div>
            <h3>Evaluasi Gerakan</h3>
            <p>
              Kenali pentingnya posisi tubuh dan teknik yang tepat saat
              melakukan latihan.
            </p>
            <span className="feature-tag">TEKNIK LATIHAN</span>
          </article>

          <article className="feature-card">
            <div className="feature-icon">03</div>
            <h3>Pantau Progres</h3>
            <p>
              Siapkan kebiasaan latihan yang konsisten dan jadikan setiap sesi
              sebagai langkah maju.
            </p>
            <span className="feature-tag">PROGRES LATIHAN</span>
          </article>
        </div>
      </section>

      <section className="how-section">
        <div>
          <p className="eyebrow">CARA KERJA</p>
          <h2>
            Tiga langkah untuk <span>mulai bergerak.</span>
          </h2>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span>01</span>
            <div>
              <h3>Pilih latihanmu</h3>
              <p>Tentukan jenis latihan bodyweight yang ingin dicoba.</p>
            </div>
          </div>

          <div className="step-item">
            <span>02</span>
            <div>
              <h3>Ikuti panduan</h3>
              <p>Lakukan gerakan dengan teknik yang nyaman dan terkontrol.</p>
            </div>
          </div>

          <div className="step-item">
            <span>03</span>
            <div>
              <h3>Evaluasi sesi</h3>
              <p>
                Tinjau informasi latihan dan bangun konsistensi secara bertahap.
              </p>
            </div>
          </div>
        </div>

        <button className="final-cta" type="button" onClick={onStart}>
          Siap Mulai Latihan? <span>→</span>
        </button>
      </section>

      <footer>GerakTepat · Prototype UTS POPL · Frontend Demo</footer>
    </main>
  );
}

export default LandingPage;
