
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { 
    Search, ArrowRight, LayoutDashboard, BarChart2, ShoppingCart, Users, Briefcase, 
    Camera, Image, Settings, Sun, Moon, LogOut, MessageSquare, Mail, Folder, 
    Calendar, CheckSquare, FileText, CreditCard, HelpCircle, Activity, Zap, 
    FilePlus, Component, LayoutTemplate, PieChart, Table, Box, FormInput,
    Palette, Sticker, CreditCard as CardIcon, Loader, MousePointerClick, CloudOff,
    PaintBucket, Layers, Lock, ShieldCheck, FileSearch, BookOpen
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ViewType } from '../App';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewType) => void;
}

type CommandItem = {
    id: string;
    label: string;
    group: string;
    icon: React.ElementType;
    action: () => void;
};

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to handle navigation and close
  const navTo = (view: ViewType) => {
      onNavigate(view);
      onClose();
  };

  // Comprehensive list of all actions and pages in the app
  const allCommands: CommandItem[] = useMemo(() => [
    // --- Paneller (Dashboards) ---
    { id: 'dash-main', label: 'Ana Panel', group: 'Paneller', icon: LayoutDashboard, action: () => navTo('dashboard') },
    { id: 'dash-analytics', label: 'Analitik Paneli', group: 'Paneller', icon: BarChart2, action: () => navTo('analytics') },
    { id: 'dash-ecommerce', label: 'E-Ticaret Paneli', group: 'Paneller', icon: ShoppingCart, action: () => navTo('ecommerce') },
    { id: 'dash-crm', label: 'CRM Yönetimi', group: 'Paneller', icon: Users, action: () => navTo('crm') },
    { id: 'dash-project', label: 'Proje Yönetimi', group: 'Paneller', icon: Briefcase, action: () => navTo('project') },

    // --- Uygulamalar (Apps) ---
    { id: 'app-chat', label: 'Sohbet / Mesajlar', group: 'Uygulamalar', icon: MessageSquare, action: () => navTo('chat') },
    { id: 'app-email', label: 'E-posta', group: 'Uygulamalar', icon: Mail, action: () => navTo('email') },
    { id: 'app-files', label: 'Dosya Yöneticisi', group: 'Uygulamalar', icon: Folder, action: () => navTo('file-manager') },
    { id: 'app-calendar', label: 'Takvim & Ajanda', group: 'Uygulamalar', icon: Calendar, action: () => navTo('calendar') },
    { id: 'app-kanban', label: 'Kanban Panosu', group: 'Uygulamalar', icon: CheckSquare, action: () => navTo('kanban') },
    { id: 'app-invoice', label: 'Faturalar', group: 'Uygulamalar', icon: FileText, action: () => navTo('invoice') },

    // --- Sayfalar (Pages) ---
    { id: 'page-shoots', label: 'Çekim Listesi', group: 'Sayfalar', icon: Camera, action: () => navTo('shoots') },
    { id: 'page-gallery', label: 'Galeriler', group: 'Sayfalar', icon: Image, action: () => navTo('galleries') },
    { id: 'page-profile', label: 'Profilim', group: 'Sayfalar', icon: Users, action: () => navTo('profile') },
    { id: 'page-team', label: 'Ekip Yönetimi', group: 'Sayfalar', icon: Users, action: () => navTo('team') },
    { id: 'page-pricing', label: 'Fiyatlandırma & Planlar', group: 'Sayfalar', icon: CreditCard, action: () => navTo('pricing') },
    { id: 'page-faq', label: 'Sıkça Sorulan Sorular', group: 'Sayfalar', icon: HelpCircle, action: () => navTo('faq') },
    { id: 'page-activity', label: 'Aktivite Geçmişi', group: 'Sayfalar', icon: Activity, action: () => navTo('activities') },
    { id: 'page-integration', label: 'Entegrasyonlar', group: 'Sayfalar', icon: Zap, action: () => navTo('integrations') },
    { id: 'page-docs', label: 'Dokümantasyon', group: 'Sayfalar', icon: BookOpen, action: () => navTo('docs') },
    { id: 'page-search', label: 'Arama Sonuçları', group: 'Sayfalar', icon: FileSearch, action: () => navTo('search-results') },
    { id: 'page-terms', label: 'Şartlar & Gizlilik', group: 'Sayfalar', icon: FileText, action: () => navTo('terms') },
    { id: 'page-blank', label: 'Boş Sayfa', group: 'Sayfalar', icon: FilePlus, action: () => navTo('blank') },

    // --- Tasarım Sistemi (Design System) ---
    { id: 'ds-colors', label: 'Renk Paleti', group: 'Tasarım Sistemi', icon: PaintBucket, action: () => navTo('colors') },
    { id: 'ds-type', label: 'Tipografi & Fontlar', group: 'Tasarım Sistemi', icon: Palette, action: () => navTo('typography') },
    { id: 'ds-shadows', label: 'Gölgeler & Sınırlar', group: 'Tasarım Sistemi', icon: Layers, action: () => navTo('shadows') },
    { id: 'ds-icons', label: 'İkon Seti', group: 'Tasarım Sistemi', icon: Sticker, action: () => navTo('icons') },
    { id: 'ds-buttons', label: 'Butonlar', group: 'Tasarım Sistemi', icon: MousePointerClick, action: () => navTo('buttons') },
    { id: 'ds-cards', label: 'Kart Tasarımları', group: 'Tasarım Sistemi', icon: CardIcon, action: () => navTo('cards') },
    { id: 'ds-empty', label: 'Boş Durumlar (Empty States)', group: 'Tasarım Sistemi', icon: CloudOff, action: () => navTo('empty-states') },
    { id: 'ds-skeletons', label: 'İskelet (Loading) Yapılar', group: 'Tasarım Sistemi', icon: Loader, action: () => navTo('skeletons') },

    // --- Arayüz & Bileşenler (UI) ---
    { id: 'ui-widgets', label: 'Widget Kütüphanesi', group: 'Arayüz', icon: Box, action: () => navTo('widgets') },
    { id: 'ui-elements', label: 'UI Elementleri', group: 'Arayüz', icon: Component, action: () => navTo('ui-elements') },
    { id: 'ui-forms', label: 'Form Elemanları', group: 'Arayüz', icon: FormInput, action: () => navTo('forms') },
    { id: 'ui-tables', label: 'Veri Tabloları', group: 'Arayüz', icon: Table, action: () => navTo('tables') },
    { id: 'ui-charts', label: 'Grafikler', group: 'Arayüz', icon: PieChart, action: () => navTo('charts') },
    { id: 'ui-layouts', label: 'Yerleşim Ayarları', group: 'Arayüz', icon: LayoutTemplate, action: () => navTo('layouts') },

    // --- Sistem (System) ---
    { id: 'sys-theme', label: theme === 'light' ? 'Karanlık Moda Geç' : 'Aydınlık Moda Geç', group: 'Sistem', icon: theme === 'light' ? Moon : Sun, action: () => toggleTheme() },
    { id: 'sys-settings', label: 'Uygulama Ayarları', group: 'Sistem', icon: Settings, action: () => navTo('settings') },
    { id: 'sys-lock', label: 'Ekranı Kilitle', group: 'Sistem', icon: Lock, action: () => navTo('lock-screen') },
    { id: 'sys-2fa', label: '2FA Doğrulama (Demo)', group: 'Sistem', icon: ShieldCheck, action: () => navTo('2fa') },
    { id: 'sys-logout', label: 'Çıkış Yap', group: 'Sistem', icon: LogOut, action: () => navTo('login') },
  ], [theme, onNavigate, onClose, toggleTheme]);

  // Filter items based on query
  const filteredItems = useMemo(() => {
      if (!query) return allCommands.slice(0, 8); // Show recent/popular items if empty
      return allCommands.filter(item => 
          item.label.toLowerCase().includes(query.toLowerCase()) || 
          item.group.toLowerCase().includes(query.toLowerCase())
      );
  }, [query, allCommands]);

  // Group items for display
  const groupedItems = useMemo(() => {
      const groups: Record<string, CommandItem[]> = {};
      filteredItems.forEach(item => {
          if (!groups[item.group]) groups[item.group] = [];
          groups[item.group].push(item);
      });
      return groups;
  }, [filteredItems]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setActiveIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % filteredItems.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = filteredItems[activeIndex];
        if (item) {
          item.action();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, activeIndex, onClose]);

  if (!isOpen || !mounted) return null;

  let currentIndexTracker = 0;

  const content = (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-xl bg-white dark:bg-[#09090b] rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden animate-fade-in-up">
        {/* Search Input */}
        <div className="flex items-center px-4 py-4 border-b border-gray-100 dark:border-neutral-800">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Ara... (Sayfalar, Uygulamalar, Ayarlar)"
            className="flex-1 bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 text-lg h-7"
            value={query}
            onChange={(e) => { setQuery(e.target.value); setActiveIndex(0); }}
          />
          <div className="hidden sm:flex items-center gap-1">
             <kbd className="bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-neutral-700">ESC</kbd>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto p-2 scroll-smooth custom-scrollbar">
          {filteredItems.length > 0 ? (
            Object.entries(groupedItems).map(([group, items]) => (
                <div key={group} className="mb-2">
                    <h4 className="px-3 py-2 text-xs font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">{group}</h4>
                    {(items as CommandItem[]).map((item) => {
                        const isSelected = activeIndex === currentIndexTracker;
                        const myIndex = currentIndexTracker;
                        currentIndexTracker++; // Increment global index counter

                        return (
                            <button
                                key={item.id}
                                onClick={() => item.action()}
                                onMouseEnter={() => setActiveIndex(myIndex)}
                                className={`w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm transition-all duration-200 ${
                                isSelected 
                                    ? 'bg-black dark:bg-white text-white dark:text-black shadow-md transform scale-[1.01]' 
                                    : 'text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon className={`w-4 h-4 ${isSelected ? 'text-current' : 'text-gray-400'}`} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {isSelected && <ArrowRight className="w-4 h-4 opacity-70" />}
                            </button>
                        );
                    })}
                </div>
            ))
          ) : (
            <div className="py-16 text-center text-gray-400 dark:text-neutral-500 text-sm">
                <p>"{query}" için sonuç bulunamadı.</p>
                <button onClick={() => setQuery('')} className="mt-2 text-blue-500 hover:underline">Listeyi Temizle</button>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="px-4 py-3 bg-gray-50 dark:bg-neutral-900/80 border-t border-gray-100 dark:border-neutral-800 text-[10px] text-gray-400 flex justify-between items-center backdrop-blur-sm">
            <div className="flex gap-4">
                <span className="flex items-center"><strong className="bg-gray-200 dark:bg-neutral-700 px-1 rounded mr-1">↑↓</strong> gezin</span>
                <span className="flex items-center"><strong className="bg-gray-200 dark:bg-neutral-700 px-1 rounded mr-1">↵</strong> seç</span>
            </div>
            <span><strong>{filteredItems.length}</strong> sonuç</span>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default CommandPalette;
