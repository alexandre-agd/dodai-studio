
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header, Footer } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy loading des pages pour réduire le bundle initial
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const PartenairesPage = lazy(() => import('./pages/PartenairesPage').then(module => ({ default: module.PartenairesPage })));

// Loader minimaliste pour le Suspense
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-dodai-cream">
    <div className="w-8 h-8 border-2 border-dodai-charcoal border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-dodai-red selection:text-white flex flex-col">
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[1000px] h-[1000px] bg-dodai-gray rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
        <div className="absolute top-[30%] right-[-10%] w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[900px] h-[900px] bg-gray-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
      </div>

      <ScrollToTop />
      <Header />
      
      <div className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partenaires" element={<PartenairesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;