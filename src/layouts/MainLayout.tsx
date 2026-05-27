import { Outlet } from 'react-router-dom';
import { BackToTop } from '../components/common/BackToTop';
import { PageTransition } from '../components/common/PageTransition';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

export function MainLayout() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      <BackToTop />
    </>
  );
}
