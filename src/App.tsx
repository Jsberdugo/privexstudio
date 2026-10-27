import { useState } from 'react';
import { SERVICES } from './data';
import { usePath } from './router';
import { useSeo } from './seo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import ManageBookingModal from './components/modals/ManageBookingModal';
import ServiceDetail from './components/service/ServiceDetail';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import PoliciesPage from './pages/PoliciesPage';
import FaqPage from './pages/FaqPage';
import AboutPage from './pages/AboutPage';
import AddOnsPage from './pages/AddOnsPage';
import BridalPage from './pages/BridalPage';

export default function App() {
  const path = usePath();
  useSeo(path);
  const [showManageBooking, setShowManageBooking] = useState(false);
  const openManageBooking = () => setShowManageBooking(true);

  const renderPage = () => {
    const serviceMatch = path.match(/^\/services\/([A-Za-z])\/?$/);
    if (serviceMatch) {
      const service = SERVICES.find((s) => s.id === serviceMatch[1].toUpperCase());
      if (service) return <ServiceDetail service={service} onManageBooking={openManageBooking} />;
    }
    switch (path.replace(/\/$/, '') || '/') {
      case '/manicures':
        return <ServicesPage category="manicure" />;
      case '/pedicures':
        return <ServicesPage category="pedicure" />;
      case '/add-ons':
        return <AddOnsPage />;
      case '/bridal':
        return <BridalPage />;
      case '/policies':
        return <PoliciesPage />;
      case '/faq':
        return <FaqPage />;
      case '/about':
        return <AboutPage />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2D2424] flex flex-col selection:bg-[#4A0D1A] selection:text-white">
      <PageLoader />

      <div className="bg-[#4A0D1A] text-white text-center py-2.5 px-4 label text-[10px] sm:text-[11px]">
        By appointment only<span className="hidden sm:inline"> · Deposit on select services</span>
      </div>

      <Navbar path={path} onManageBooking={openManageBooking} />
      {renderPage()}
      <Footer />

      {showManageBooking && <ManageBookingModal onClose={() => setShowManageBooking(false)} />}
    </div>
  );
}
