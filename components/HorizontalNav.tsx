
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { 
  LayoutDashboard, AppWindow, FileText, Palette, ChevronDown, 
  Users, Lock, Globe, Component
} from 'lucide-react';
import { ViewType } from '../App';
import { useLayout } from '../context/LayoutContext';

interface HorizontalNavProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

// Full structure mirroring Sidebar content exactly
const HORIZONTAL_MENU = [
    {
      title: 'Dashboardlar',
      icon: LayoutDashboard,
      id: 'dashboards',
      children: [
          { label: 'Ana Panel', id: 'dashboard' as ViewType },
          { label: 'E-Ticaret', id: 'ecommerce' as ViewType },
          { label: 'Analitik', id: 'analytics' as ViewType },
          { label: 'CRM', id: 'crm' as ViewType },
          { label: 'Proje Yönetimi', id: 'project' as ViewType },
      ]
    },
    {
      title: 'Araçlar',
      icon: AppWindow,
      id: 'apps',
      children: [
          { label: 'Sohbet', id: 'chat' as ViewType },
          { label: 'E-posta', id: 'email' as ViewType },
          { label: 'Dosya Yöneticisi', id: 'file-manager' as ViewType },
          { label: 'Takvim', id: 'calendar' as ViewType },
          { label: 'Kanban', id: 'kanban' as ViewType },
          { label: 'Faturalar', id: 'invoice' as ViewType },
      ]
    },
    {
        title: 'Hesap',
        icon: Users,
        id: 'account',
        children: [
            { label: 'Profilim', id: 'profile' as ViewType },
            { label: 'Ayarlar', id: 'settings' as ViewType },
            { label: 'Ekip & İzinler', id: 'team' as ViewType },
            { label: 'Plan & Fatura', id: 'pricing' as ViewType },
        ]
    },
    {
        title: 'Auth',
        icon: Lock,
        id: 'auth',
        children: [
            { label: 'Giriş Yap', id: 'login' as ViewType },
            { label: 'Kayıt Ol', id: 'register' as ViewType },
            { label: 'Şifre Sıfırla', id: 'forgot-password' as ViewType },
            { label: 'Kilit Ekranı', id: 'lock-screen' as ViewType },
            { label: '2FA Doğrulama', id: '2fa' as ViewType },
        ]
    },
    {
        title: 'Sistem',
        icon: Globe,
        id: 'system',
        children: [
            { label: 'Dokümantasyon', id: 'docs' as ViewType },
            { label: 'Entegrasyonlar', id: 'integrations' as ViewType },
            { label: 'Arama Sonuçları', id: 'search-results' as ViewType },
            { label: 'Şartlar & Gizlilik', id: 'terms' as ViewType },
            { label: 'S.S.S.', id: 'faq' as ViewType },
            { label: 'Bakım Modu', id: 'maintenance' as ViewType },
            { label: '404 Hatası', id: '404' as ViewType },
            { label: '500 Hatası', id: '500' as ViewType },
            { label: 'Boş Sayfa', id: 'blank' as ViewType },
        ]
    },
    {
        title: 'Tasarım',
        icon: Palette,
        id: 'design',
        children: [
            { label: 'Renk Paleti', id: 'colors' as ViewType },
            { label: 'Tipografi', id: 'typography' as ViewType },
            { label: 'Gölgeler & Sınırlar', id: 'shadows' as ViewType },
            { label: 'İkon Seti', id: 'icons' as ViewType },
        ]
    },
    {
        title: 'Bileşenler',
        icon: Component,
        id: 'components',
        children: [
            { label: 'Butonlar', id: 'buttons' as ViewType },
            { label: 'Kart Tasarımları', id: 'cards' as ViewType },
            { label: 'Boş Durumlar', id: 'empty-states' as ViewType },
            { label: 'İskelet Yapılar', id: 'skeletons' as ViewType },
            { label: 'UI Elementleri', id: 'ui-elements' as ViewType },
            { label: 'Widget Kütüphanesi', id: 'widgets' as ViewType },
            { label: 'Form Elemanları', id: 'forms' as ViewType },
            { label: 'Veri Tabloları', id: 'tables' as ViewType },
            { label: 'Grafikler', id: 'charts' as ViewType },
            { label: 'Yerleşim Düzeni', id: 'layouts' as ViewType },
        ]
    }
];

const HorizontalNav: React.FC<HorizontalNavProps> = ({ currentView, onNavigate }) => {
  const { themeClasses, colorTheme } = useLayout();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = (id: string, e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      
      if (activeDropdown === id) {
          setActiveDropdown(null);
      } else {
          const rect = e.currentTarget.getBoundingClientRect();
          // Calculate position - ensure it doesn't go off screen right
          const left = Math.min(rect.left, window.innerWidth - 240); // 240 is approx dropdown width
          
          setDropdownPos({
              top: rect.bottom + 8,
              left: left
          });
          setActiveDropdown(id);
      }
  };

  // Close on click outside
  useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
          const target = event.target as HTMLElement;
          // Check if click is inside a dropdown content
          const isDropdownContent = target.closest('.portal-dropdown-content');
          
          if (!isDropdownContent) {
              setActiveDropdown(null);
          }
      };

      if (activeDropdown) {
          window.addEventListener('click', handleClickOutside);
          window.addEventListener('resize', () => setActiveDropdown(null));
      }
      return () => {
          window.removeEventListener('click', handleClickOutside);
          window.removeEventListener('resize', () => setActiveDropdown(null));
      };
  }, [activeDropdown]);

  const activeMenu = HORIZONTAL_MENU.find(m => m.id === activeDropdown);

  return (
    <div className="bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-neutral-800 px-4 lg:px-8 py-2 relative z-40">
      <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
        {HORIZONTAL_MENU.map((item) => {
            const isDropdownActive = activeDropdown === item.id;
            const hasActiveChild = item.children.some(child => child.id === currentView);
            
            let buttonStyle = 'text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white';
            
            if (hasActiveChild || isDropdownActive) {
                if (colorTheme === 'black') {
                    buttonStyle = 'bg-black dark:bg-white text-white dark:text-black shadow-md';
                } else {
                    buttonStyle = `${themeClasses.activeBg} text-white shadow-md`;
                }
            }

            return (
              <button
                key={item.id}
                onClick={(e) => handleToggle(item.id, e)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${buttonStyle}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownActive ? 'rotate-180' : ''}`} />
              </button>
            );
        })}
      </div>

      {/* Portal for Dropdown */}
      {mounted && activeDropdown && activeMenu && createPortal(
          <div 
              className="portal-dropdown-content fixed z-[100] w-56 bg-white dark:bg-[#09090b] rounded-xl shadow-xl border border-gray-100 dark:border-neutral-800 p-1 animate-fade-in-up max-h-[60vh] overflow-y-auto custom-scrollbar"
              style={{ top: dropdownPos.top, left: dropdownPos.left }}
          >
              {activeMenu.children.map((child) => {
                  const isChildActive = currentView === child.id;
                  return (
                      <button
                          key={child.id}
                          onClick={() => { onNavigate(child.id); setActiveDropdown(null); }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                              isChildActive 
                              ? 'bg-gray-100 dark:bg-neutral-800 font-bold text-black dark:text-white' 
                              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900'
                          }`}
                      >
                          <span>{child.label}</span>
                          {isChildActive && <div className={`w-1.5 h-1.5 rounded-full ${colorTheme === 'black' ? 'bg-black dark:bg-white' : themeClasses.activeBg.split(' ')[0]}`}></div>}
                      </button>
                  );
              })}
          </div>,
          document.body
      )}
    </div>
  );
};

export default HorizontalNav;
    