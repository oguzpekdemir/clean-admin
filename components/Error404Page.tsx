
import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';

interface Error404PageProps {
  onBack: () => void;
}

const Error404Page: React.FC<Error404PageProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
        <h1 className="text-9xl font-black text-gray-200 dark:text-gray-800 select-none">404</h1>
        <div className="-mt-12 relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sayfa Bulunamadı</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
                Aradığınız sayfa silinmiş, adı değiştirilmiş veya geçici olarak kullanılamıyor olabilir.
            </p>
            <div className="flex items-center justify-center space-x-4">
                <button 
                    onClick={onBack}
                    className="flex items-center px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Geri Dön
                </button>
                <button 
                    onClick={onBack}
                    className="flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
                >
                    <Home className="w-4 h-4 mr-2" />
                    Anasayfa
                </button>
            </div>
        </div>
    </div>
  );
};

export default Error404Page;
