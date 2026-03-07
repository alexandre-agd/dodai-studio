import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header, Footer } from './components/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Import direct
import { HomePage } from './pages/HomePage';
import { PartenairesPage } from './pages/PartenairesPage';
import { RunPage } from './pages/RunPage';
import { DiagnosticPage } from './pages/DiagnosticPage';
import { BuildPage } from './pages/BuildPage';
import { LegalPage } from './pages/LegalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AboutPage } from './pages/AboutPage';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { ArticlePage } from './pages/ArticlePage';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/partenaires" element={<PartenairesPage />} />
          <Route path="/run" element={<RunPage />} />
          <Route path="/diagnostic" element={<DiagnosticPage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/articles" element={<ArticlesListPage />} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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
