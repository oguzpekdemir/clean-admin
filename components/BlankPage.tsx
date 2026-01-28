
import React from 'react';
import { FilePlus } from 'lucide-react';

const BlankPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Boş Sayfa</h1>
                <p className="text-sm text-gray-500 dark:text-neutral-400">Yeni projeniz için temiz bir başlangıç.</p>
            </div>
            <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold shadow-lg hover:opacity-90 transition-opacity">
                İşlem Yap
            </button>
        </div>

        <div className="bg-white dark:bg-[#09090b] border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl h-96 flex flex-col items-center justify-center text-gray-400 dark:text-neutral-500">
            <div className="w-16 h-16 bg-gray-50 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4">
                <FilePlus className="w-8 h-8 opacity-50" />
            </div>
            <p className="text-sm font-medium">İçerik buraya gelecek.</p>
        </div>
    </div>
  );
};

export default BlankPage;
