
import React from 'react';
import { Search, Inbox, WifiOff, FileX, ShoppingCart, Plus } from 'lucide-react';

const EmptyStatesPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Boş Durumlar (Empty States)</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Veri olmadığında veya hatalı durumlarda kullanıcıyı yönlendiren ekranlar.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. No Search Results */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 flex flex-col items-center justify-center text-center h-80">
                <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sonuç Bulunamadı</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mb-6">
                    Aradığınız kriterlere uygun kayıt bulamadık. Lütfen farklı kelimeler deneyin.
                </p>
                <button className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900">
                    Filtreleri Temizle
                </button>
            </div>

            {/* 2. No Messages */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 flex flex-col items-center justify-center text-center h-80">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 text-blue-500">
                    <Inbox className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Gelen Kutusu Boş</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[220px] mb-6">
                    Harika! Okunmamış mesajınız kalmadı. Günü yakaladınız.
                </p>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/20">
                    Yeni Mesaj Yaz
                </button>
            </div>

            {/* 3. Connection Error */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 flex flex-col items-center justify-center text-center h-80">
                <div className="w-16 h-16 bg-rose-50 dark:bg-rose-900/20 rounded-full flex items-center justify-center mb-4 text-rose-500">
                    <WifiOff className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bağlantı Hatası</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mb-6">
                    Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edin.
                </p>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">
                    Tekrar Dene
                </button>
            </div>

            {/* 4. No Files */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 flex flex-col items-center justify-center text-center h-80 border-dashed border-2">
                <div className="w-16 h-16 bg-gray-50 dark:bg-neutral-900 rounded-2xl flex items-center justify-center mb-4">
                    <FileX className="w-8 h-8 text-gray-300 dark:text-neutral-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Dosya Yok</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mb-6">
                    Bu klasörde henüz hiç dosya bulunmuyor.
                </p>
                <button className="flex items-center px-4 py-2 bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-neutral-800">
                    <Plus className="w-4 h-4 mr-2" /> Dosya Yükle
                </button>
            </div>

            {/* 5. Empty Cart */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 p-8 flex flex-col items-center justify-center text-center h-80">
                <div className="relative mb-4">
                    <div className="w-16 h-16 bg-amber-50 dark:bg-amber-900/20 rounded-full flex items-center justify-center text-amber-500">
                        <ShoppingCart className="w-8 h-8" />
                    </div>
                    <span className="absolute top-0 right-0 w-5 h-5 bg-white dark:bg-[#09090b] rounded-full flex items-center justify-center text-xs font-bold border border-gray-100 dark:border-neutral-800">0</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Sepetiniz Boş</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px] mb-6">
                    Henüz bir ürün eklemediniz. Alışverişe başlamak için ürünleri inceleyin.
                </p>
                <button className="px-4 py-2 text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline">
                    Ürünlere Git
                </button>
            </div>

            {/* 6. Coming Soon */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 flex flex-col items-center justify-center text-center h-80 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Yakında!</h3>
                <p className="text-indigo-100 max-w-[200px] mb-6 relative z-10 text-sm">
                    Bu özellik şu anda geliştirme aşamasında. Takipte kalın.
                </p>
                <div className="relative z-10 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/30">
                    Sürüm 3.0 ile Geliyor
                </div>
            </div>

        </div>
    </div>
  );
};

export default EmptyStatesPage;
