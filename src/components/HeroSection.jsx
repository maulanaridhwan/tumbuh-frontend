export const HeroSection = () => {
  return (
    <section className="hero-section" id="beranda">
      <div className="hero-bg-circle hero-bg-circle-1"></div>
      <div className="hero-bg-circle hero-bg-circle-2"></div>
      
      <div className="container hero-content">
        <div className="hero-text fade-in">
          <h1 className="hero-title">
            Teman UMKM<br/>
            <span className="hero-title-accent">Berwirausaha</span>
          </h1>
          <p className="hero-description">
            Tumbuh. adalah platform yang memberikan solusi teknologi digital bagi pengelolaan operasional UMKM. Ratusan Perusahaan menggunakan BERTHUB sebagai pasangan berharga TUMBUH.ID
          </p>
          <button className="btn-cta">
            Mulai Sekarang
          </button>
        </div>
        
        <div className="hero-image fade-in">
          <div className="hero-card-wrapper">
            <div className="hero-card-bg"></div>
            <img src="./man,guy,person,table,stool,chair,laptop,computer,conversation,chat.svg" alt="icon" className="hero-card-icon" />
            <div className="hero-card-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
