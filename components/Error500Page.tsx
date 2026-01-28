
import React from 'react';
import { RefreshCw, Home, AlertTriangle } from 'lucide-react';
import { ViewType } from '../App';

interface Error500PageProps {
  onNavigate: (view: ViewType) => void;
}

const Error500Page: React.FC<Error500PageProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
        <div className="relative mb-8">
            <div className="absolute inset-0 bg-rose-500 blur-3xl opacity-20 rounded-full"></div>
            <AlertTriangle className="w-32 h-32 text-rose-500 relative z-10" />
        </div>
        
        <h1 className="text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-2">500</h1>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Sunucu Hatası</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 leading-relaxed">
            Üzgünüz, sunucu tarafında beklenmedik bir hata oluştu. Mühendislerimiz durumdan haberdar edildi ve üzerinde çalışıyorlar.
        </p>
        
        <div className="flex items-center justify-center space-x-4">
            <button 
                onClick={() => window.location.reload()}
                className="flex items-center px-6 py-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors"
            >
                <RefreshCw className="w-4 h-4 mr-2" />
                Sayfayı Yenile
            </button>
            <button 
                onClick={() => onNavigate('dashboard')}
                className="flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
                <Home className="w-4 h-4 mr-2" />
                Ana Sayfa
            </button>
        </div>
    </div>
  );
};

export default Error500Page;
