import { Outlet } from 'react-router-dom';
import { BackToTop } from '../components/common/BackToTop';
import { PageTransition } from '../components/common/PageTransition';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { ScrollToTop } from '../components/common/ScrollToTop';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';

export function MainLayout() {
  return (
    <>
      <ScrollToTop />
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
