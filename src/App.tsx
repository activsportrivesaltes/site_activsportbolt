import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useHashRoute } from '@/lib/useHashRoute';
import HomePage from '@/pages/HomePage';
import ClubPage from '@/pages/ClubPage';
import ActivitiesPage from '@/pages/ActivitiesPage';
import ActivityDetailPage from '@/pages/ActivityDetailPage';
import PlanningPage from '@/pages/PlanningPage';
import PricingPage from '@/pages/PricingPage';
import TeamPage from '@/pages/TeamPage';
import InscriptionPage from '@/pages/InscriptionPage';
import NewsPage from '@/pages/NewsPage';
import GalleryPage from '@/pages/GalleryPage';
import ContactPage from '@/pages/ContactPage';
import LegalPage from '@/pages/LegalPage';

export default function App() {
  const path = useHashRoute();

  let page;
  if (path === '/' || path === '') {
    page = <HomePage />;
  } else if (path === '/le-club') {
    page = <ClubPage />;
  } else if (path === '/activites') {
    page = <ActivitiesPage />;
  } else if (path.startsWith('/activites/')) {
    const slug = path.replace('/activites/', '');
    page = <ActivityDetailPage slug={slug} />;
  } else if (path === '/planning') {
    page = <PlanningPage />;
  } else if (path === '/tarifs') {
    page = <PricingPage />;
  } else if (path === '/equipe') {
    page = <TeamPage />;
  } else if (path === '/inscription') {
    page = <InscriptionPage />;
  } else if (path === '/actualites') {
    page = <NewsPage />;
  } else if (path === '/galerie') {
    page = <GalleryPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else if (path === '/mentions-legales') {
    page = <LegalPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header currentPath={path} />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  );
}
