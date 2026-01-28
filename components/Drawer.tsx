
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  width?: string;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, title, children, footer, width = 'max-w-md' }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const content = (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Drawer Panel */}
      <div className={`relative w-full md:${width} h-full bg-white dark:bg-[#09090b] shadow-2xl border-l border-gray-100 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out flex flex-col animate-slide-in-right`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-neutral-800">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors text-gray-500 dark:text-gray-400"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Drawer;
