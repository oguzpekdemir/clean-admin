
import React from 'react';
import { MoreHorizontal, Heart, MessageCircle, Share2, ArrowRight, Star, Clock, CheckCircle } from 'lucide-react';

const CardsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Kart Tasarımları</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Farklı içerik tipleri için hazırlanmış esnek kart bileşenleri.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1 */}
            <div className="space-y-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">İçerik Kartları</h3>
                
                {/* Basic Card */}
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Temel Kart</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        Bu, en temel kart yapısıdır. Başlık, açıklama metni ve opsiyonel bir aksiyon butonu içerir.
                    </p>
                    <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Detaylar</button>
                </div>

                {/* Image Card */}
                <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 object-cover" alt="Card" />
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">Doğa</span>
                            <span className="text-xs text-gray-400 flex items-center"><Clock className="w-3 h-3 mr-1" /> 5 dk</span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Manzara Fotoğrafçılığı</h4>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                            Doğru ışığı yakalamak ve kompozisyon oluşturmak için ipuçları.
                        </p>
                        <div className="flex items-center justify-between border-t border-gray-100 dark:border-neutral-800 pt-4 mt-4">
                            <div className="flex items-center space-x-2">
                                <img src="https://picsum.photos/32/32?random=1" className="w-6 h-6 rounded-full" alt="Author" />
                                <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Ali V.</span>
                            </div>
                            <button className="text-gray-400 hover:text-rose-500"><Heart className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Kullanıcı & Ürün</h3>

                {/* Profile Card */}
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm text-center relative">
                    <button className="absolute top-4 right-4 text-gray-400 hover:text-black dark:hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                    <div className="w-24 h-24 mx-auto bg-gray-100 dark:bg-neutral-900 rounded-full p-1 mb-4">
                        <img src="https://picsum.photos/150/150?random=2" className="w-full h-full rounded-full object-cover" alt="Profile" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">Zeynep Yılmaz</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Product Designer @ Tech</p>
                    <div className="flex justify-center space-x-8 mb-6">
                        <div>
                            <span className="block text-lg font-bold text-gray-900 dark:text-white">124</span>
                            <span className="text-xs text-gray-500">Proje</span>
                        </div>
                        <div>
                            <span className="block text-lg font-bold text-gray-900 dark:text-white">8.5k</span>
                            <span className="text-xs text-gray-500">Takipçi</span>
                        </div>
                        <div>
                            <span className="block text-lg font-bold text-gray-900 dark:text-white">4.9</span>
                            <span className="text-xs text-gray-500">Puan</span>
                        </div>
                    </div>
                    <button className="w-full py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:opacity-90 transition-opacity">Takip Et</button>
                </div>

                {/* Horizontal Product Card */}
                <div className="bg-white dark:bg-[#09090b] p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-xl flex-shrink-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Product" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">Premium Kulaklık</h4>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">Yeni</span>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Gürültü engelleme özellikli, 30 saat pil ömrü.</p>
                        <div className="flex justify-between items-center mt-3">
                            <span className="font-bold text-gray-900 dark:text-white">₺3,499</span>
                            <button className="p-1.5 bg-black dark:bg-white text-white dark:text-black rounded-lg"><ArrowRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-8">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Durum & Bildirim</h3>

                {/* Status Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                            <Star className="w-6 h-6 text-yellow-300 fill-current" />
                        </div>
                        <h4 className="text-xl font-bold mb-1">Pro Üyelik</h4>
                        <p className="text-sm text-indigo-100 mb-6">Tüm özelliklere sınırsız erişim.</p>
                        <div className="flex items-center space-x-2 text-xs font-medium bg-black/20 p-2 rounded-lg w-fit">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>28 gün kaldı</span>
                        </div>
                    </div>
                </div>

                {/* Simple Stats Card */}
                <div className="bg-white dark:bg-[#09090b] p-5 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider">Toplam Satış</p>
                        <h4 className="text-2xl font-black text-gray-900 dark:text-white mt-1">₺124.5K</h4>
                        <span className="text-xs text-emerald-500 font-bold">+12% artış</span>
                    </div>
                    <div className="h-12 w-20 flex items-end space-x-1">
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-t-sm h-[40%]"></div>
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-t-sm h-[70%]"></div>
                        <div className="w-full bg-emerald-500 rounded-t-sm h-[100%]"></div>
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-t-sm h-[60%]"></div>
                    </div>
                </div>

                {/* Notification Card */}
                <div className="bg-white dark:bg-[#09090b] p-4 rounded-2xl border-l-4 border-blue-500 shadow-sm flex items-start space-x-3">
                    <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 flex-shrink-0">
                        <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">Yeni Mesaj</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ahmet Yılmaz sana bir dosya gönderdi.</p>
                        <div className="flex space-x-3 mt-3">
                            <button className="text-xs font-bold text-blue-600 dark:text-blue-400">Yanıtla</button>
                            <button className="text-xs font-bold text-gray-400 hover:text-gray-600">Yoksay</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardsPage;
