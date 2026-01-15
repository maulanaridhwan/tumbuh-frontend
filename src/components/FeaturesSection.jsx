export const FeaturesSection = () => {
  const features = [
    { title: 'Konsultasi Gratis', desc: 'Dapatkan konsultasi gratis untuk solusi terbaik sesuai kebutuhan bisnis Anda.' },
    { title: 'Implementasi Platform', desc: 'Tim expert kami siap membantu implementasi dan konfigurasi sistem dengan lancar.' },
    { title: 'Pendampingan & Pelatihan', desc: 'Pelatihan komprehensif dan pendampingan berkelanjutan untuk maksimalkan penggunaan sistem.' },
    { title: 'Call Centre', desc: 'Layanan support siap membantu Anda kapanpun melalui berbagai channel komunikasi.' }
  ];

  return (
    <section id="layanan" className="features-section">
      <div className="container features-content">
        <div className="features-image fade-in">
          <img src="./man,guy,person,desk,table,furniture,laptop,computer,sheld,speakers.svg" alt="icon" className="hero-card-icon" />
        </div>

        <div className="features-list">
          <div className="section-header-left fade-in">
            <p className="section-subtitle">Services</p>
            <h2 className="section-title">Layanan Yang Kami Sediakan</h2>
          </div>

          {features.map((feature, index) => (
            <div key={index} className="feature-item fade-in" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
              <div className="feature-number">
                {index + 1}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
