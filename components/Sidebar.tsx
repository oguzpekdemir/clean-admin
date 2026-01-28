
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, BarChart2, ShoppingCart, Users, Briefcase, 
  MessageSquare, Mail, Folder, Calendar, FileText, CheckSquare, 
  Settings, Search, X, Layers, Lock, Shield, AlertOctagon, 
  HelpCircle, CreditCard, PieChart, Grid, Type, Box, Table, 
  LayoutTemplate, LogOut, ChevronDown, Circle, Globe, Map,
  UserPlus, Sliders, ChevronRight, Component, AppWindow, HardDrive
} from 'lucide-react';
import { ViewType } from '../App';
import { useLayout } from '../context/LayoutContext';

interface SidebarProps {
  onClose?: () => void;
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
  onOpenCommandPalette?: () => void;
}

type MenuItem = {
    icon: React.ElementType;
    label: string;
    id?: ViewType;
    children?: { label: string; id: ViewType }[];
};

type MenuSection = {
    title: string;
    items: MenuItem[];
};

// Moved outside component to prevent re-creation on every render
const MENU_SECTIONS: MenuSection[] = [
    {
      title: 'Yönetim',
      items: [
        { 
            icon: LayoutDashboard, 
            label: 'Dashboardlar', 
            children: [
                { label: 'Ana Panel', id: 'dashboard' as ViewType },
                { label: 'E-Ticaret', id: 'ecommerce' as ViewType },
                { label: 'Analitik', id: 'analytics' as ViewType },
                { label: 'CRM', id: 'crm' as ViewType },
                { label: 'Proje Yönetimi', id: 'project' as ViewType },
            ]
        },
      ]
    },
    {
      title: 'Uygulamalar',
      items: [
        { 
            icon: AppWindow, 
            label: 'Araçlar', 
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
            icon: Users, 
            label: 'Hesap & Ekip',
            children: [
                { label: 'Profilim', id: 'profile' as ViewType },
                { label: 'Ayarlar', id: 'settings' as ViewType },
                { label: 'Ekip & İzinler', id: 'team' as ViewType },
                { label: 'Plan & Fatura', id: 'pricing' as ViewType },
            ]
        },
        { 
            icon: Lock, 
            label: 'Kimlik Doğrulama',
            children: [
                { label: 'Giriş Yap', id: 'login' as ViewType },
                { label: 'Kayıt Ol', id: 'register' as ViewType },
                { label: 'Şifre Sıfırla', id: 'forgot-password' as ViewType },
            ]
        },
        { 
            icon: Globe, 
            label: 'Sistem',
            children: [
                { label: 'Entegrasyonlar', id: 'integrations' as ViewType },
                { label: 'S.S.S.', id: 'faq' as ViewType },
                { label: 'Bakım Modu', id: 'maintenance' as ViewType },
                { label: '404 Hatası', id: '404' as ViewType },
                { label: '500 Hatası', id: '500' as ViewType },
                { label: 'Boş Sayfa', id: 'blank' as ViewType },
            ]
        },
      ]
    },
    {
      title: 'Arayüz Kütüphanesi',
      items: [
        { 
            icon: Component, 
            label: 'Bileşenler',
            children: [
                { label: 'UI Elementleri', id: 'ui-elements' as ViewType },
                { label: 'Widget Kütüphanesi', id: 'widgets' as ViewType },
                { label: 'Form Elemanları', id: 'forms' as ViewType },
                { label: 'Veri Tabloları', id: 'tables' as ViewType },
                { label: 'Grafikler', id: 'charts' as ViewType },
                { label: 'Yerleşim Düzeni', id: 'layouts' as ViewType },
            ]
        }
      ]
    }
];

const Sidebar: React.FC<SidebarProps> = ({ onClose, currentView, onNavigate, onOpenCommandPalette }) => {
  const { themeClasses, colorTheme } = useLayout();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (label: string) => {
      setExpandedMenus(prev => ({
          ...prev,
          [label]: !prev[label]
      }));
  };

  // Auto-expand parent menu if child is active
  useEffect(() => {
      MENU_SECTIONS.forEach(section => {
          section.items.forEach(item => {
              if (item.children) {
                  const hasActiveChild = item.children.some(child => child.id === currentView);
                  if (hasActiveChild) {
                      setExpandedMenus(prev => ({ ...prev, [item.label]: true }));
                  }
              }
          });
      });
  }, [currentView]);

  return (
    <div className="h-full flex flex-col bg-white dark:bg-black transition-colors duration-200">
      {/* Brand */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white dark:text-black font-bold italic ${colorTheme === 'black' ? 'bg-black dark:bg-white' : themeClasses.activeBg}`}>
              C
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">CleanAdmin</span>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-lg dark:text-gray-300">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search */}
      <div className="px-6 mb-6">
        <div 
            className="relative cursor-pointer group"
            onClick={onOpenCommandPalette}
        >
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Hızlı komut için Ctrl + K" 
            readOnly
            className={`w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm outline-none transition-all dark:text-gray-200 dark:placeholder-neutral-600 cursor-pointer pointer-events-none ${themeClasses.ring.replace('focus:', 'group-hover:')}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-6 custom-scrollbar">
        {MENU_SECTIONS.map((section, idx) => (
          <div key={idx}>
            <h3 className="px-4 text-[10px] font-extrabold text-gray-400 dark:text-neutral-500 uppercase tracking-widest mb-3">{section.title}</h3>
            <div className="space-y-1">
              {section.items.map((item, itemIdx) => {
                
                // Logic for items WITH children (Submenus)
                if (item.children) {
                    const isExpanded = expandedMenus[item.label];
                    const hasActiveChild = item.children.some(c => c.id === currentView);
                    const parentActiveClass = hasActiveChild ? 'text-black dark:text-white bg-gray-50 dark:bg-neutral-900' : 'text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white';

                    return (
                        <div key={itemIdx} className="mb-1">
                            <button
                                onClick={() => toggleSubmenu(item.label)}
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 group ${parentActiveClass}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <item.icon className={`w-5 h-5 ${hasActiveChild ? themeClasses.activeText : 'text-gray-400 group-hover:text-current'}`} />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </div>
                                <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                            </button>
                            
                            {/* Submenu Items */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="ml-4 mt-1 pl-4 border-l border-gray-100 dark:border-neutral-800 space-y-1 py-1">
                                    {item.children.map((child) => {
                                        const isChildActive = currentView === child.id;
                                        return (
                                            <button
                                                key={child.id}
                                                onClick={() => onNavigate(child.id)}
                                                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm transition-colors ${
                                                    isChildActive 
                                                        ? 'bg-gray-50 dark:bg-neutral-900 font-bold ' + themeClasses.activeText 
                                                        : 'text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
                                                }`}
                                            >
                                                <div className={`w-1.5 h-1.5 rounded-full ${isChildActive ? 'bg-current' : 'bg-gray-300 dark:bg-neutral-700'}`}></div>
                                                <span>{child.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                }

                // Logic for items WITHOUT children (Flat links)
                const isActive = currentView === item.id;
                let activeStyle = '';
                if (isActive) {
                    if (colorTheme === 'black') {
                        activeStyle = 'bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-white/10';
                    } else {
                        activeStyle = `${themeClasses.activeBg} text-white shadow-lg`;
                    }
                } else {
                    activeStyle = 'text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white';
                }

                return (
                    <button
                      key={itemIdx}
                      onClick={() => item.id && onNavigate(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-xl transition-all duration-200 group ${activeStyle}`}
                    >
                      <item.icon className={`w-5 h-5 ${isActive ? 'text-current' : 'text-gray-400 group-hover:text-current'}`} />
                      <span className="font-medium text-sm">{item.label}</span>
                    </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Disk Usage Widget */}
        <div className="mt-8 mx-2 p-4 bg-gray-50 dark:bg-neutral-900/50 rounded-2xl border border-gray-100 dark:border-neutral-800">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <HardDrive className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-200">Depolama</span>
                </div>
                <span className="text-xs font-bold text-gray-900 dark:text-white">75%</span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-neutral-800 rounded-full h-1.5 mb-2 overflow-hidden">
                <div className={`h-1.5 rounded-full ${colorTheme === 'black' ? 'bg-black dark:bg-white' : themeClasses.activeBg}`} style={{ width: '75%' }}></div>
            </div>
            
            <div className="flex justify-between text-[10px] text-gray-500 dark:text-neutral-500 font-medium">
                <span>1.5 GB</span>
                <span>2.0 GB</span>
            </div>
        </div>
      </div>

      {/* User Footer */}
      <div className="p-4 border-t border-gray-100 dark:border-neutral-800">
        <button onClick={() => onNavigate('profile')} className="flex items-center space-x-3 w-full p-2 hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-xl transition-colors text-left group">
            <div className="relative">
                <img src="https://picsum.photos/40/40?random=2" className="w-9 h-9 rounded-full border border-gray-200 dark:border-neutral-700 group-hover:border-gray-300 dark:group-hover:border-neutral-600 transition-colors" alt="User" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-black rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold truncate text-gray-900 dark:text-white">Oğuz Pekdemir</p>
              <p className="text-xs text-gray-400 truncate">Admin</p>
            </div>
            <Settings className="w-4 h-4 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
