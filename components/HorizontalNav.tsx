
import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  LayoutDashboard, BarChart2, ShoppingCart, Users, Briefcase, 
  MessageSquare, Mail, Folder, Calendar, CheckSquare, 
  Settings, Grid, Box, Globe, ChevronDown, LayoutTemplate, 
  FileText, HelpCircle, User, CreditCard, AlertOctagon
} from 'lucide-react';
import { ViewType } from '../App';
import { useLayout } from '../context/LayoutContext';

interface HorizontalNavProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const HorizontalNav: React.FC<HorizontalNavProps> = ({ currentView, onNavigate }) => {
  const { themeClasses, colorTheme } = useLayout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const [mounted, setMounted] = useState(false);
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
      if (!isDropdownOpen && buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          setDropdownPos({
              top: rect.bottom + 8,
              right: window.innerWidth - rect.right 
          });
      }
      setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (view: ViewType) => {
      onNavigate(view);
      setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
          return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScroll = () => {
        if (isDropdownOpen) setIsDropdownOpen(false);
    };

    if (isDropdownOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleScroll, true);
        window.addEventListener('resize', handleScroll);
    }
    
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScroll, true);
        window.removeEventListener('resize', handleScroll);
    };
  }, [isDropdownOpen]);

  // Main high-level items for horizontal bar
  const menuItems = [
    { icon: LayoutDashboard, label: 'Panel', id: 'dashboard' as ViewType },
    { icon: BarChart2, label: 'Analitik', id: 'analytics' as ViewType },
    { icon: ShoppingCart, label: 'E-Ticaret', id: 'ecommerce' as ViewType },
    { icon: Users, label: 'CRM', id: 'crm' as ViewType },
    { icon: Briefcase, label: 'Proje', id: 'project' as ViewType },
    { icon: MessageSquare, label: 'Sohbet', id: 'chat' as ViewType },
    { icon: Mail, label: 'E-posta', id: 'email' as ViewType },
    { icon: Folder, label: 'Dosyalar', id: 'file-manager' as ViewType },
  ];

  // Items tucked inside "Other" dropdown
  const dropdownItems = [
    { label: 'Takvim', id: 'calendar' as ViewType, icon: Calendar },
    { label: 'Kanban', id: 'kanban' as ViewType, icon: CheckSquare },
    { label: 'Fatura', id: 'invoice' as ViewType, icon: FileText },
    { label: 'Widgetlar', id: 'widgets' as ViewType, icon: Grid },
    { label: 'UI Kit', id: 'ui-elements' as ViewType, icon: Box },
    { label: 'Yerleşim', id: 'layouts' as ViewType, icon: LayoutTemplate },
    { label: 'Profil', id: 'profile' as ViewType, icon: User },
    { label: 'Fiyatlandırma', id: 'pricing' as ViewType, icon: CreditCard },
    { label: 'S.S.S.', id: 'faq' as ViewType, icon: HelpCircle },
    { label: 'Bakım Modu', id: 'maintenance' as ViewType, icon: AlertOctagon },
  ];

  return (
    <div className="bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-neutral-800 px-4 lg:px-8 py-2 overflow-x-auto custom-scrollbar">
      <div className="flex items-center space-x-1 min-w-max">
        {menuItems.map((item) => {
            const isActive = currentView === item.id;
            let activeStyle = '';
            
            if (isActive) {
                if (colorTheme === 'black') {
                    activeStyle = 'bg-black dark:bg-white text-white dark:text-black shadow-md';
                } else {
                    activeStyle = `${themeClasses.activeBg} text-white shadow-md`;
                }
            } else {
                activeStyle = 'text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white';
            }

            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${activeStyle}`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
        })}
        
        {/* Toggle Button */}
        <button 
            ref={buttonRef}
            onClick={handleToggle}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${isDropdownOpen ? 'bg-gray-100 dark:bg-neutral-900 text-black dark:text-white' : 'text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white'}`}
        >
            <span>Diğer</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
            
        {/* Portal for Dropdown Content */}
        {isDropdownOpen && mounted && createPortal(
            <div 
                ref={menuRef}
                className="fixed z-[100] w-56 bg-white dark:bg-[#09090b] rounded-xl shadow-xl border border-gray-100 dark:border-neutral-800 p-1 animate-fade-in-up origin-top-right max-h-96 overflow-y-auto custom-scrollbar"
                style={{ top: dropdownPos.top, right: dropdownPos.right }}
            >
                {dropdownItems.map((subItem) => {
                    const isSubActive = currentView === subItem.id;
                    let subActiveStyle = '';
                    if (isSubActive) {
                            if (colorTheme === 'black') {
                            subActiveStyle = 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white font-bold';
                        } else {
                            subActiveStyle = `${themeClasses.badgeBg} ${themeClasses.badgeText} font-bold`;
                        }
                    } else {
                        subActiveStyle = 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900';
                    }

                    return (
                        <button
                            key={subItem.id}
                            onClick={() => handleDropdownItemClick(subItem.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm transition-colors ${subActiveStyle}`}
                        >
                            <subItem.icon className={`w-4 h-4 ${isSubActive ? '' : 'text-gray-400'}`} />
                            <span>{subItem.label}</span>
                        </button>
                    );
                })}
            </div>,
            document.body
        )}
      </div>
    </div>
  );
};

export default HorizontalNav;
