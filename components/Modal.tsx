
import React, { ReactNode, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, footer }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const content = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-[#09090b] dark:border dark:border-neutral-800 rounded-3xl w-full max-w-lg shadow-2xl transform transition-all animate-fade-in-up m-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors"
            aria-label="Kapat"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
        {footer && (
          <div className="p-6 border-t border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 rounded-b-3xl flex justify-end space-x-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;
