export const DemoSection = () => {
  return (
    <section id="kontak" className="demo-section">
      <div className="container demo-container">
        <div className="section-header fade-in">
          <p className="section-subtitle">Booking</p>
          <h2 className="section-title">Konsultasikan Usahamu<br/>Dengan Kami:)</h2>
        </div>

        <div className="demo-form fade-in">
          <input 
            type="text" 
            placeholder="Nama Lengkap" 
            className="form-input"
          />
          <input 
            type="text" 
            placeholder="Nama Perusahaan" 
            className="form-input"
          />
          <input 
            type="email" 
            placeholder="E-mail Anda" 
            className="form-input"
          />
          <input 
            type="tel" 
            placeholder="No Handphone" 
            className="form-input"
          />
          <textarea 
            placeholder="Pesan Anda (optional)" 
            rows="5"
            className="form-textarea"
          ></textarea>
          
          <div className="form-button-wrapper">
            <button 
              onClick={() => alert('Demo request submitted!')}
              className="btn-submit"
            >
              Kirim
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
