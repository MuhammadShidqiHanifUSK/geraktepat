function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-logo">
        Gerak<span>Tepat.</span>
      </a>

      <div className="navbar-links">
        <a href="#beranda">Beranda</a>
        <a href="#fitur">Fitur</a>
        <a href="#tentang">Tentang</a>
      </div>

      <a href="#mulai" className="navbar-button">
        Mulai Sekarang
      </a>
    </nav>
  );
}

export default Navbar;
