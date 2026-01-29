
import React, { useState, useEffect } from 'react';
import { ShoppingBag, CreditCard, Package, MoreHorizontal, TrendingUp, AlertTriangle, Megaphone, Tag, Truck } from 'lucide-react';
import Drawer from './Drawer';
import { Skeleton, SkeletonStatCard, SkeletonWidget, SkeletonTable } from './Skeleton';

interface Order {
    id: number;
    items: string[];
    total: string;
    status: string;
}

const EcommerceDashboard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleOrderClick = (orderId: number) => {
        setSelectedOrder({ id: orderId, items: ['Düğün Albümü Pro', 'Ekstra Baskı'], total: '₺1,250', status: 'Hazırlanıyor' });
        setIsOrderDrawerOpen(true);
    };

    if (isLoading) {
       return (
         <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Skeleton className="h-40 rounded-3xl" />
                {[1,2,3].map(i => <SkeletonStatCard key={i} />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <SkeletonWidget height="h-80" />
                </div>
                <div className="space-y-6">
                    <Skeleton className="h-40 rounded-3xl" />
                    <Skeleton className="h-40 rounded-3xl" />
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                 <div className="xl:col-span-2">
                     <SkeletonTable rows={5} />
                 </div>
                 <Skeleton className="h-96 rounded-3xl" />
            </div>
         </div>
       );
    }

    return (
        <div className="space-y-6 animate-fade-in">
             {/* Header Stats */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                 <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                     <div className="flex items-center space-x-3 mb-4 relative z-10">
                         <div className="p-2 bg-white/20 rounded-lg">
                             <CreditCard className="w-6 h-6" />
                         </div>
                         <span className="font-medium text-white/80">Toplam Gelir</span>
                     </div>
                     <h3 className="text-3xl font-bold relative z-10">₺284,500</h3>
                     <p className="text-sm text-white/60 mt-2 relative z-10 flex items-center">
                         <TrendingUp className="w-4 h-4 mr-1" /> +12% geçen aya göre
                     </p>
                 </div>
                 
                 <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                     <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-neutral-400 font-medium">Siparişler</span>
                        <div className="p-1.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400">
                            <ShoppingBag className="w-4 h-4" />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">1,420</h3>
                        <span className="text-xs text-emerald-500 font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +5.2%</span>
                     </div>
                 </div>

                 <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                     <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-neutral-400 font-medium">Ort. Sepet</span>
                        <div className="p-1.5 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                            <Tag className="w-4 h-4" />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">₺425</h3>
                        <span className="text-xs text-emerald-500 font-bold flex items-center mt-1"><TrendingUp className="w-3 h-3 mr-1" /> +1.2%</span>
                     </div>
                 </div>

                 <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                     <div className="flex justify-between">
                        <span className="text-gray-500 dark:text-neutral-400 font-medium">İade Oranı</span>
                        <div className="p-1.5 bg-rose-50 dark:bg-rose-900/20 rounded-lg text-rose-600 dark:text-rose-400">
                            <TrendingUp className="w-4 h-4 rotate-180" />
                        </div>
                     </div>
                     <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2">2.4%</h3>
                        <span className="text-xs text-emerald-500 mt-1">-0.5% İyileşme</span>
                     </div>
                 </div>
             </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Advanced Revenue Chart */}
                <div className="lg:col-span-2 bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Gelir Analizi</h3>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">Yıllık satış performansı</p>
                        </div>
                        <button className="text-sm font-bold text-black dark:text-white bg-gray-100 dark:bg-neutral-800 px-4 py-2 rounded-xl">2026</button>
                    </div>
                    
                    {/* CSS Area Chart Simulation */}
                    <div className="overflow-x-auto no-scrollbar">
                        <div className="relative h-64 w-full min-w-[500px] flex items-end justify-between">
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-50/50 dark:from-blue-900/10 to-transparent z-0 rounded-xl pointer-events-none"></div>
                            
                            {/* Bars for volume */}
                            {[30, 45, 35, 60, 50, 75, 65, 85, 70, 60, 80, 95].map((h, i) => (
                                <div key={i} className="flex-1 px-1 h-full flex flex-col justify-end group cursor-pointer z-10">
                                    <div 
                                        className="w-full bg-blue-100 dark:bg-blue-900/30 rounded-t-sm group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors relative flex items-start justify-center pt-2" 
                                        style={{ height: `${h}%` }}
                                    >
                                        <span className="text-[10px] font-bold text-blue-700 dark:text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {h}%
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between text-xs text-gray-400 dark:text-neutral-500 mt-4 px-2 min-w-[500px]">
                            <span>Oca</span><span>Şub</span><span>Mar</span><span>Nis</span><span>May</span><span>Haz</span><span>Tem</span><span>Ağu</span><span>Eyl</span><span>Eki</span><span>Kas</span><span>Ara</span>
                        </div>
                    </div>
                </div>

                {/* Inventory Alerts & Marketing */}
                <div className="space-y-6">
                    {/* Inventory Alert */}
                    <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-3xl border border-amber-100 dark:border-amber-900/30">
                        <div className="flex items-center space-x-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-amber-600" />
                            <h3 className="font-bold text-amber-900 dark:text-amber-500">Stok Uyarıları</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white dark:bg-[#09090b] p-3 rounded-xl flex items-center justify-between shadow-sm">
                                <span className="text-sm font-medium text-gray-700 dark:text-neutral-200">Düğün Albümü (S)</span>
                                <span className="text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded">2 Adet Kaldı</span>
                            </div>
                            <div className="bg-white dark:bg-[#09090b] p-3 rounded-xl flex items-center justify-between shadow-sm">
                                <span className="text-sm font-medium text-gray-700 dark:text-neutral-200">Lens Kiti Pro</span>
                                <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/30 px-2 py-1 rounded">5 Adet Kaldı</span>
                            </div>
                        </div>
                        <button className="w-full mt-4 py-2 text-sm font-bold text-amber-700 hover:text-amber-900">
                            Stok Yönetimine Git
                        </button>
                    </div>

                    {/* Marketing Mini Stats */}
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div className="flex items-center space-x-3 mb-4">
                            <Megaphone className="w-5 h-5 text-gray-400" />
                            <h3 className="font-bold text-gray-900 dark:text-white">Pazarlama</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1 text-gray-500 dark:text-neutral-500">
                                    <span>Instagram Ads</span>
                                    <span className="text-emerald-500">ROI: 3.2x</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5">
                                    <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '75%' }}></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-medium mb-1 text-gray-500 dark:text-neutral-500">
                                    <span>Google Search</span>
                                    <span className="text-emerald-500">ROI: 4.5x</span>
                                </div>
                                <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-1.5">
                                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                 {/* Recent Orders Table */}
                 <div className="xl:col-span-2 bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                     <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                         <h3 className="text-lg font-bold text-gray-900 dark:text-white">Son Siparişler</h3>
                         <div className="flex space-x-2">
                             <button className="p-2 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg">
                                 <MoreHorizontal className="w-5 h-5 text-gray-400" />
                             </button>
                         </div>
                     </div>
                     <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-neutral-900 text-xs text-gray-500 dark:text-neutral-400 uppercase font-bold">
                                <tr>
                                    <th className="px-6 py-4 whitespace-nowrap">Sipariş ID</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Müşteri</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Ürünler</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Teslimat</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Tutar</th>
                                    <th className="px-6 py-4 whitespace-nowrap">Durum</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr 
                                        key={i} 
                                        className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer"
                                        onClick={() => handleOrderClick(202400 + i)}
                                    >
                                        <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-neutral-500">#ORD-{202400 + i}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center font-bold text-gray-600 dark:text-neutral-300 text-xs">
                                                    AY
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900 dark:text-white whitespace-nowrap">Ahmet Yılmaz</p>
                                                    <p className="text-xs text-gray-500 dark:text-neutral-500">ahmet@mail.com</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600 dark:text-neutral-300 whitespace-nowrap">Premium Fotoğraf Paketi (+2)</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center text-xs text-gray-500 dark:text-neutral-500 whitespace-nowrap">
                                                <Truck className="w-3 h-3 mr-1" /> Aras Kargo
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">₺1,250</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                                                i === 2 ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' : 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                            }`}>
                                                {i === 2 ? 'Hazırlanıyor' : 'Tamamlandı'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                     </div>
                 </div>

                 {/* Top Products List */}
                 <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm p-6">
                     <div className="flex justify-between items-center mb-6">
                         <h3 className="text-lg font-bold text-gray-900 dark:text-white">En Çok Satanlar</h3>
                         <button className="text-xs font-bold text-blue-600 dark:text-blue-400">Rapor</button>
                     </div>
                     <div className="space-y-6">
                         {[1, 2, 3, 4, 5].map((i) => (
                             <div key={i} className="flex items-start space-x-4">
                                 <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 rounded-xl overflow-hidden flex-shrink-0">
                                     <img src={`https://picsum.photos/200/200?random=${i+50}`} className="w-full h-full object-cover" alt="Product" />
                                 </div>
                                 <div className="flex-1 min-w-0">
                                     <h4 className="font-bold text-gray-900 dark:text-white text-sm truncate">Düğün Albümü Pro v2</h4>
                                     <div className="flex items-center text-xs text-gray-500 dark:text-neutral-500 mt-1">
                                         <span className="text-gray-900 dark:text-white font-bold mr-1">420</span> Satış
                                         <span className="mx-2">•</span>
                                         <span className="text-emerald-500 font-bold">Stokta</span>
                                     </div>
                                 </div>
                                 <div className="text-right">
                                    <span className="block font-bold text-sm text-gray-900 dark:text-white">₺850</span>
                                    <span className="text-xs text-emerald-500">+12%</span>
                                 </div>
                             </div>
                         ))}
                     </div>
                     <button className="w-full mt-6 py-3 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-gray-700 dark:text-neutral-200 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                         Tüm Ürünleri Yönet
                     </button>
                 </div>
             </div>

             {/* Order Details Drawer */}
             <Drawer
                isOpen={isOrderDrawerOpen}
                onClose={() => setIsOrderDrawerOpen(false)}
                title={`Sipariş Detayı #${selectedOrder?.id}`}
                footer={
                    <div className="flex justify-end space-x-3">
                        <button onClick={() => setIsOrderDrawerOpen(false)} className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 dark:text-white">Kapat</button>
                        <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">Fatura Yazdır</button>
                    </div>
                }
             >
                 {selectedOrder && (
                     <div className="space-y-6">
                         <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                             <div className="flex justify-between items-center mb-2">
                                 <span className="text-sm text-gray-500">Durum</span>
                                 <span className="text-sm font-bold text-black dark:text-white">{selectedOrder.status}</span>
                             </div>
                             <div className="flex justify-between items-center">
                                 <span className="text-sm text-gray-500">Toplam Tutar</span>
                                 <span className="text-xl font-bold text-black dark:text-white">{selectedOrder.total}</span>
                             </div>
                         </div>
                         
                         <div>
                             <h4 className="font-bold text-sm mb-3">Ürünler</h4>
                             <ul className="space-y-2">
                                 {selectedOrder.items.map((item: string, i: number) => (
                                     <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                                         <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mr-2"></div>
                                         {item}
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     </div>
                 )}
             </Drawer>
        </div>
    );
};

export default EcommerceDashboard;
