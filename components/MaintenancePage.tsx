
import React from 'react';
import { Hammer, Clock, Bell } from 'lucide-react';

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 animate-fade-in">
        <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-full mb-8 border border-amber-100 dark:border-amber-900/50">
            <Hammer className="w-16 h-16 text-amber-500" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bakım Modundayız</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto mb-8 leading-relaxed">
            Size daha iyi hizmet verebilmek için sistemlerimizi güncelliyoruz. Lütfen kısa bir süre sonra tekrar deneyin. Anlayışınız için teşekkürler.
        </p>

        <div className="bg-white dark:bg-[#09090b] border border-gray-100 dark:border-neutral-800 rounded-2xl p-6 w-full max-w-sm shadow-sm">
            <div className="flex items-center justify-center space-x-2 text-sm font-bold text-gray-900 dark:text-white mb-4">
                <Clock className="w-4 h-4 text-blue-500" />
                <span>Tahmini Bitiş Süresi</span>
            </div>
            <div className="flex justify-between space-x-2">
                {['02', '45', '12'].map((val, i) => (
                    <div key={i} className="flex-1 bg-gray-50 dark:bg-neutral-900 rounded-xl py-3 border border-gray-100 dark:border-neutral-800">
                        <span className="block text-2xl font-bold text-gray-900 dark:text-white">{val}</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">{['Saat', 'Dakika', 'Saniye'][i]}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
            <div className="bg-white dark:bg-neutral-900 px-4 py-2 rounded-xl border border-gray-200 dark:border-neutral-800 flex items-center shadow-sm">
                <input type="email" placeholder="E-posta adresiniz" className="bg-transparent border-none outline-none text-sm w-48 dark:text-white" />
                <button className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline ml-2">Bana Haber Ver</button>
            </div>
        </div>
    </div>
  );
};

export default MaintenancePage;
