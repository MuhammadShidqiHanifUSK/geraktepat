function LandingPage() {
  return (
    <main className="landing-page">
      <section className="landing-hero" id="beranda">
        <p className="eyebrow">SMART WORKOUT ASSISTANT</p>

        <h1>
          Bergerak Lebih Baik.
          <br />
          <span>Berlatih Lebih Tepat.</span>
        </h1>

        <p className="subtitle">
          Temukan cara berlatih yang lebih terarah melalui panduan latihan
          bodyweight dan evaluasi gerakan.
        </p>

        <div className="landing-actions">
          <button type="button">Mulai Latihan</button>
          <a href="#fitur">Jelajahi Fitur ↓</a>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
