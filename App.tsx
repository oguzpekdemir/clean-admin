
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HorizontalNav from './components/HorizontalNav'; 
import { ToastProvider, useToast } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { LayoutProvider, useLayout } from './context/LayoutContext';
import { Loader2 } from 'lucide-react';

// Lazy Load Pages for Performance Optimization
const DashboardPage = React.lazy(() => import('./components/DashboardPage'));
const AnalyticsDashboard = React.lazy(() => import('./components/AnalyticsDashboard'));
const EcommerceDashboard = React.lazy(() => import('./components/EcommerceDashboard'));
const CrmDashboard = React.lazy(() => import('./components/CrmDashboard'));
const ProjectDashboard = React.lazy(() => import('./components/ProjectDashboard'));
const ShootsPage = React.lazy(() => import('./components/ShootsPage'));
const GalleriesPage = React.lazy(() => import('./components/GalleriesPage'));
const ActivitiesPage = React.lazy(() => import('./components/ActivitiesPage'));
const IntegrationsPage = React.lazy(() => import('./components/IntegrationsPage'));
const FormsPage = React.lazy(() => import('./components/FormsPage'));
const UiElementsPage = React.lazy(() => import('./components/UiElementsPage'));
const TablesPage = React.lazy(() => import('./components/TablesPage'));
const ProfilePage = React.lazy(() => import('./components/ProfilePage'));
const LoginPage = React.lazy(() => import('./components/LoginPage'));
const RegisterPage = React.lazy(() => import('./components/RegisterPage'));
const ForgotPasswordPage = React.lazy(() => import('./components/ForgotPasswordPage'));
const KanbanPage = React.lazy(() => import('./components/KanbanPage'));
const CalendarPage = React.lazy(() => import('./components/CalendarPage'));
const Error404Page = React.lazy(() => import('./components/Error404Page'));
const Error500Page = React.lazy(() => import('./components/Error500Page'));
const MaintenancePage = React.lazy(() => import('./components/MaintenancePage'));
const BlankPage = React.lazy(() => import('./components/BlankPage'));
const CommandPalette = React.lazy(() => import('./components/CommandPalette'));
const WidgetsPage = React.lazy(() => import('./components/WidgetsPage'));
const LayoutsPage = React.lazy(() => import('./components/LayoutsPage'));
const ChartsPage = React.lazy(() => import('./components/ChartsPage'));
const InvoicePage = React.lazy(() => import('./components/InvoicePage'));
const FaqPage = React.lazy(() => import('./components/FaqPage'));
const ChatPage = React.lazy(() => import('./components/ChatPage'));
const EmailPage = React.lazy(() => import('./components/EmailPage'));
const FileManagerPage = React.lazy(() => import('./components/FileManagerPage'));
const PricingPage = React.lazy(() => import('./components/PricingPage'));
const SettingsPage = React.lazy(() => import('./components/SettingsPage'));
const TeamPage = React.lazy(() => import('./components/TeamPage'));

export type ViewType = 
  | 'dashboard' | 'analytics' | 'ecommerce' | 'crm' | 'project'
  | 'shoots' | 'galleries' | 'activities' | 'integrations' 
  | 'forms' | 'ui-elements' | 'tables' | 'profile' | 'login' | 'register' | 'forgot-password'
  | 'kanban' | 'calendar' | 'widgets' | 'layouts' | 'charts' 
  | 'invoice' | 'faq' | '404' | '500' | 'maintenance' | 'blank'
  | 'chat' | 'email' | 'file-manager' | 'pricing' | 'settings' | 'team';

// Improved Global Loading Spinner
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-white dark:bg-black">
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black font-bold italic text-xl mb-4 animate-pulse">C</div>
        <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { addToast } = useToast();
  
  // Consume Layout Context for real-time engine changes
  const { layoutType, widthType, headerType } = useLayout();

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    setIsSidebarOpen(false);
  };

  // Reset scroll position when view changes
  useEffect(() => {
    if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
    }
  }, [currentView]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderContent = () => {
    return (
      <Suspense fallback={<div className="h-96 flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-gray-300" /></div>}>
        {(() => {
          switch (currentView) {
            // Dashboards
            case 'dashboard': return <DashboardPage onNavigate={handleNavigate} />;
            case 'analytics': return <AnalyticsDashboard />;
            case 'ecommerce': return <EcommerceDashboard />;
            case 'crm': return <CrmDashboard />;
            case 'project': return <ProjectDashboard />;
            
            // Apps
            case 'chat': return <ChatPage />;
            case 'email': return <EmailPage />;
            case 'file-manager': return <FileManagerPage />;
            case 'kanban': return <KanbanPage />;
            case 'calendar': return <CalendarPage />;
            case 'invoice': return <InvoicePage />;

            // Pages
            case 'shoots': return <ShootsPage />;
            case 'galleries': return <GalleriesPage />;
            case 'profile': return <ProfilePage />;
            case 'settings': return <SettingsPage />;
            case 'team': return <TeamPage />;
            case 'pricing': return <PricingPage />;
            case 'faq': return <FaqPage />;
            case 'activities': return <ActivitiesPage />;
            case 'integrations': return <IntegrationsPage />;
            case 'blank': return <BlankPage />;

            // UI Components
            case 'widgets': return <WidgetsPage />;
            case 'layouts': return <LayoutsPage />;
            case 'charts': return <ChartsPage />;
            case 'forms': return <FormsPage />;
            case 'ui-elements': return <UiElementsPage />;
            case 'tables': return <TablesPage />;

            // Errors & Maintenance
            case '404': return <Error404Page onBack={() => setCurrentView('dashboard')} />;
            case '500': return <Error500Page onNavigate={handleNavigate} />;
            case 'maintenance': return <MaintenancePage />;

            default: return <DashboardPage onNavigate={handleNavigate} />;
          }
        })()}
      </Suspense>
    );
  };

  // Full Screen Pages (No Layout)
  if (currentView === 'login' || currentView === 'register' || currentView === 'forgot-password') {
    return (
      <Suspense fallback={<PageLoader />}>
        {currentView === 'login' && <LoginPage onLogin={() => { addToast('Başarıyla giriş yapıldı', 'success'); setCurrentView('dashboard'); }} onNavigate={handleNavigate} />}
        {currentView === 'register' && <RegisterPage onNavigate={handleNavigate} />}
        {currentView === 'forgot-password' && <ForgotPasswordPage onNavigate={handleNavigate} />}
      </Suspense>
    );
  }

  // --- Layout Engine Logic ---
  
  // 1. Boxed Layout Wrapper Class
  const containerClass = widthType === 'boxed' 
    ? 'max-w-[1440px] mx-auto my-4 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-neutral-800' 
    : 'w-full';

  // 2. Background for Boxed Mode (gives effect of floating app)
  const bodyBackgroundClass = widthType === 'boxed' 
    ? 'bg-gray-200 dark:bg-[#111] p-4 min-h-screen' 
    : 'bg-[#F3F4F6] dark:bg-black min-h-screen';

  return (
    <div className={`${bodyBackgroundClass} transition-colors duration-200 font-inter`}>
      
      {/* The App Container (Fluid or Boxed) */}
      <div className={`flex h-full ${widthType === 'boxed' ? 'h-[calc(100vh-2rem)]' : 'min-h-screen'} bg-[#F3F4F6] dark:bg-black ${containerClass}`}>
          
          <Suspense fallback={null}>
            <CommandPalette 
              isOpen={isCommandPaletteOpen} 
              onClose={() => setIsCommandPaletteOpen(false)}
              onNavigate={handleNavigate}
            />
          </Suspense>

          {/* Mobile Overlay */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Sidebar - Render if Vertical Layout */}
          {layoutType === 'vertical' && (
            <aside className={`
              ${widthType === 'boxed' ? 'absolute lg:relative h-full' : 'fixed lg:relative inset-y-0'} 
              left-0 z-50 w-72 bg-white dark:bg-black border-r border-gray-100 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <Sidebar 
                onClose={() => setIsSidebarOpen(false)} 
                currentView={currentView}
                onNavigate={handleNavigate}
                onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
              />
            </aside>
          )}

          {/* Main Content Wrapper */}
          <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
            
            {/* Header with Dynamic Positioning */}
            <div className={`
                bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-neutral-800 z-30 transition-all
                ${headerType === 'fixed' ? 'sticky top-0' : 'relative'}
            `}>
                <Header 
                    onMenuClick={() => setIsSidebarOpen(true)} 
                    title="CleanAdmin"
                />
                
                {/* Horizontal Nav - Render if Horizontal Layout */}
                {layoutType === 'horizontal' && (
                    <HorizontalNav currentView={currentView} onNavigate={handleNavigate} />
                )}
            </div>

            {/* Scrollable Content Area */}
            <div 
                ref={scrollContainerRef}
                className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8 scroll-smooth"
            >
               {/* Inner Content Width logic is handled by the main container wrapper for Boxed mode */}
               <div className="max-w-full mx-auto transition-all duration-300">
                   {renderContent()}
               </div>
            </div>
          </main>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
        <LayoutProvider>
          <ToastProvider>
            <AppContent />
          </ToastProvider>
        </LayoutProvider>
    </ThemeProvider>
  );
};

export default App;
