import { lazy, Suspense, type ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Skeleton } from '../components/common/Skeleton';
import { MainLayout } from '../layouts/MainLayout';

const HomePage = lazy(() => import('../pages/HomePage').then((module) => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('../pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const EquipmentPage = lazy(() => import('../pages/EquipmentPage').then((module) => ({ default: module.EquipmentPage })));
const EquipmentDetailPage = lazy(() => import('../pages/EquipmentDetailPage').then((module) => ({ default: module.EquipmentDetailPage })));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage').then((module) => ({ default: module.ProjectsPage })));
const GalleryPage = lazy(() => import('../pages/GalleryPage').then((module) => ({ default: module.GalleryPage })));
const ContactPage = lazy(() => import('../pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const QuotePage = lazy(() => import('../pages/QuotePage').then((module) => ({ default: module.QuotePage })));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<RouteFallback><HomePage /></RouteFallback>} />
        <Route path="about" element={<RouteFallback><AboutPage /></RouteFallback>} />
        <Route path="equipment" element={<RouteFallback><EquipmentPage /></RouteFallback>} />
        <Route path="equipment/:id" element={<RouteFallback><EquipmentDetailPage /></RouteFallback>} />
        <Route path="projects" element={<RouteFallback><ProjectsPage /></RouteFallback>} />
        <Route path="gallery" element={<RouteFallback><GalleryPage /></RouteFallback>} />
        <Route path="contact" element={<RouteFallback><ContactPage /></RouteFallback>} />
        <Route path="quote" element={<RouteFallback><QuotePage /></RouteFallback>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

function RouteFallback({ children }: { children: ReactNode }) {
  return (
    <Suspense
      fallback={
        <section className="min-h-screen bg-white pt-32 dark:bg-brand-dark">
          <div className="container-page space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-16 max-w-3xl" />
            <Skeleton className="h-96 w-full" />
          </div>
        </section>
      }
    >
      {children}
    </Suspense>
  );
}
