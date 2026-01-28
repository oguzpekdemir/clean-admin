
import React, { useState, useRef, useEffect } from 'react';
import { Menu, Moon, Sun, Bell, AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  onMenuClick: () => void;
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, title = 'Panel' }) => {
  const { theme, toggleTheme } = useTheme();
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const notifications = [
      { id: 1, title: 'Yeni Sipariş', desc: 'Ahmet Yılmaz yeni bir sipariş oluşturdu.', type: 'success', time: '2dk önce' },
      { id: 2, title: 'Sistem Uyarısı', desc: 'Depolama alanı %90 doldu.', type: 'warning', time: '1s önce' },
      { id: 3, title: 'Mesaj', desc: 'Canan K. bir yorum bıraktı.', type: 'info', time: '3s önce' },
  ];

  return (
    <header className="h-20 border-b border-gray-100 dark:border-neutral-800 bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-30 px-4 lg:px-8 flex items-center justify-between transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onMenuClick}
          aria-label="Menüyü Aç"
          className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl dark:text-gray-200"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex items-center text-gray-900 dark:text-white transition-colors">
          <span className="font-bold text-lg tracking-tight">{title}</span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:flex items-center space-x-3">
          <span className="text-sm text-gray-500 dark:text-neutral-400 font-medium">Son Aktiviteler</span>
          <div className="flex -space-x-2">
            {[3, 4, 5].map((i) => (
              <img 
                key={i}
                src={`https://picsum.photos/32/32?random=${i}`} 
                className="w-8 h-8 rounded-full border-2 border-white dark:border-black" 
                alt="User" 
              />
            ))}
          </div>
        </div>

        <div className="h-6 w-px bg-gray-200 dark:bg-neutral-800 hidden sm:block"></div>

        <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 transition-colors"
            title={theme === 'light' ? 'Karanlık Mod' : 'Aydınlık Mod'}
            aria-label="Tema Değiştir"
        >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationRef}>
            <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                aria-label="Bildirimler"
                className={`p-2 rounded-xl transition-colors relative ${isNotificationsOpen ? 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white' : 'text-gray-500 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800'}`}
            >
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-black"></span>
            </button>

            {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-[#09090b] rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden animate-fade-in-up origin-top-right">
                    <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm">Bildirimler</h3>
                        <span className="text-[10px] bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-full text-gray-600 dark:text-neutral-400">3 Yeni</span>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                        {notifications.map((item) => (
                            <div key={item.id} className="p-4 border-b border-gray-50 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer group">
                                <div className="flex items-start space-x-3">
                                    <div className={`mt-0.5 w-2 h-2 rounded-full flex-shrink-0 ${
                                        item.type === 'success' ? 'bg-emerald-500' : 
                                        item.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                                    }`}></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900 dark:text-white leading-none mb-1">{item.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-neutral-400 leading-snug">{item.desc}</p>
                                        <p className="text-[10px] text-gray-400 mt-2">{item.time}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-2 border-t border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/30">
                        <button className="w-full py-2 text-xs font-bold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                            Tümünü Temizle
                        </button>
                    </div>
                </div>
            )}
        </div>
      </div>
    </header>
  );
};

export default Header;
