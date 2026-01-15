import { ShoppingCart, Store, FileText, Package, Factory, TrendingUp, MessageSquare } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    { icon: <ShoppingCart className="w-8 h-8" />, title: 'Purchasing', desc: 'Kelola proses pembelian dengan efisien. Sistem terintegrasi untuk supplier dan purchase order.', color: 'bg-orange-500' },
    { icon: <Store className="w-8 h-8" />, title: 'Point Of Sales', desc: 'Sistem POS modern untuk transaksi cepat. Kelola penjualan dengan intuitif dan efisien.', color: 'bg-blue-500' },
    { icon: <FileText className="w-8 h-8" />, title: 'Accounting', desc: 'Pembukuan dan laporan keuangan otomatis. Lacak setiap transaksi dengan akurat.', color: 'bg-green-500' },
    { icon: <MessageSquare className="w-8 h-8" />, title: 'CRM', desc: 'Kelola data pelanggan untuk membangun relasi lebih baik dan tingkatkan customer experience.', color: 'bg-purple-500' },
    { icon: <Package className="w-8 h-8" />, title: 'Inventory', desc: 'Monitor stok real-time di berbagai gudang. Sistem notifikasi untuk stok minimum.', color: 'bg-yellow-500' },
    { icon: <TrendingUp className="w-8 h-8" />, title: 'Marketplace Tracking', desc: 'Pantau performa penjualan di berbagai marketplace dalam satu dashboard terpadu.', color: 'bg-pink-500' },
    { icon: <Factory className="w-8 h-8" />, title: 'Manufacturing', desc: 'Optimasi proses manufaktur untuk meningkatkan produktivitas dan efisiensi produksi.', color: 'bg-teal-600' }
  ];

  return (
    <section id="fitur" className="services-section">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-subtitle">What We Can Do For You</p>
          <h2 className="section-title">Services We Can Help You With</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="solution-badge-wrapper">
          <div className="solution-badge">
            <span className="solution-text">SOLUTION</span>
          </div>
        </div>
      </div>
    </section>
  );
};
