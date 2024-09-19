import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';
const Custom404 = dynamic(() => import('@/pages/404'));


export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Custom404 />
      <Footer />
    </div>
  );
}
