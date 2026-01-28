
import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, Users, Globe, Smartphone, Monitor, Tablet, Clock, MapPin, Eye } from 'lucide-react';
import { Skeleton, SkeletonWidget } from './Skeleton';

const AnalyticsDashboard: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="space-y-6 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Skeleton className="h-64 rounded-3xl" />
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[1,2,3,4].map(i => <Skeleton className="h-32 rounded-3xl" key={i} />)}
                    </div>
                </div>
                <SkeletonWidget height="h-72" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Skeleton className="lg:col-span-2 h-96 rounded-3xl" />
                    <Skeleton className="h-96 rounded-3xl" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <SkeletonWidget height="h-64" />
                    <SkeletonWidget height="h-64" />
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Realtime & Top Stats Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Realtime Counter */}
                <div className="bg-black dark:bg-white text-white dark:text-black p-6 rounded-3xl shadow-xl flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="font-bold text-sm tracking-wide uppercase opacity-80">Gerçek Zamanlı</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold">428</h2>
                        <p className="text-sm opacity-70 mt-2">Şu an sitede aktif kullanıcı</p>
                    </div>
                    <div className="mt-8 space-y-2">
                        <div className="flex justify-between text-xs font-medium opacity-80">
                            <span>Masaüstü</span>
                            <span>65%</span>
                        </div>
                        <div className="w-full bg-white/20 dark:bg-black/10 rounded-full h-1.5">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                        </div>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                 <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                             </div>
                             <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                                +14%
                             </span>
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">124.5K</h3>
                             <p className="text-sm text-gray-500 dark:text-neutral-400">Toplam Ziyaretçi</p>
                         </div>
                    </div>

                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                 <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                             </div>
                             <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                                +2m
                             </span>
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">4m 32s</h3>
                             <p className="text-sm text-gray-500 dark:text-neutral-400">Ort. Oturum Süresi</p>
                         </div>
                    </div>

                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl">
                                 <Eye className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                             </div>
                             <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                                +8.2%
                             </span>
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">892.1K</h3>
                             <p className="text-sm text-gray-500 dark:text-neutral-400">Sayfa Görüntüleme</p>
                         </div>
                    </div>

                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                             <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-xl">
                                 <ArrowDownRight className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                             </div>
                             <span className="flex items-center text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded-lg">
                                -1.4%
                             </span>
                         </div>
                         <div>
                             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">42.8%</h3>
                             <p className="text-sm text-gray-500 dark:text-neutral-400">Hemen Çıkma Oranı</p>
                         </div>
                    </div>
                </div>
            </div>

            {/* Main Chart Section */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ziyaretçi Trafiği</h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400">Benzersiz ziyaretçiler vs Toplam görüntülenme</p>
                    </div>
                    <div className="flex space-x-2">
                        <span className="flex items-center text-xs text-gray-500 dark:text-neutral-500"><span className="w-2 h-2 rounded-full bg-blue-500 mr-1"></span> Tekil</span>
                        <span className="flex items-center text-xs text-gray-500 dark:text-neutral-500"><span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-700 mr-1"></span> Çoğul</span>
                    </div>
                </div>
                
                {/* Advanced CSS Chart Simulation */}
                <div className="overflow-x-auto no-scrollbar">
                    <div className="h-72 w-full min-w-[600px] flex items-end justify-between space-x-2 relative">
                        {/* Background Grid */}
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                             {[1,2,3,4,5].map(i => <div key={i} className="w-full h-px bg-gray-100 dark:bg-neutral-800 dashed"></div>)}
                        </div>
                        
                        {/* Bars */}
                        {[45, 72, 58, 85, 60, 92, 68, 75, 50, 65, 80, 95].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end group relative z-10 h-full">
                                {/* Hover Tooltip */}
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                    {h * 100} Ziyaret
                                </div>
                                {/* Bar 1 */}
                                <div className="w-2 mx-auto bg-gray-200 dark:bg-neutral-800 rounded-t-sm relative" style={{ height: `${h * 0.6}%` }}></div>
                                {/* Bar 2 (Overlay) */}
                                <div className="w-2 mx-auto bg-blue-600 dark:bg-blue-500 rounded-t-sm -mt-20 shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors" style={{ height: `${h}%` }}></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 dark:text-neutral-500 mt-4 px-2 min-w-[600px]">
                        <span>Oca</span><span>Şub</span><span>Mar</span><span>Nis</span><span>May</span><span>Haz</span>
                        <span>Tem</span><span>Ağu</span><span>Eyl</span><span>Eki</span><span>Kas</span><span>Ara</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* World Map Simulation */}
                <div className="lg:col-span-2 bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Coğrafi Dağılım</h3>
                    <div className="flex-1 bg-blue-50 dark:bg-black rounded-2xl relative overflow-hidden flex items-center justify-center min-h-[300px]">
                        {/* Abstract Map SVG */}
                        <svg viewBox="0 0 1000 500" className="w-full h-full opacity-40 dark:opacity-20 text-blue-900 dark:text-white fill-current">
                             <path d="M148,349 Q120,320 150,290 T200,250 T280,300 T300,380 T200,420 Z" /> {/* South America ish */}
                             <path d="M100,150 Q120,100 200,100 T350,150 T300,250 T150,250 Z" /> {/* North America ish */}
                             <path d="M420,120 Q450,80 550,100 T600,200 T550,300 T450,250 Z" /> {/* Europe/Africa ish */}
                             <path d="M650,100 Q700,80 850,100 T900,200 T800,300 T650,250 Z" /> {/* Asia ish */}
                             <path d="M750,350 Q800,320 850,350 T820,420 T750,400 Z" /> {/* Australia ish */}
                        </svg>
                        
                        {/* Hotspots */}
                        <div className="absolute top-[30%] left-[20%] w-4 h-4 bg-blue-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-blue-600 rounded-full border border-white shadow-md"></div>
                        
                        <div className="absolute top-[25%] right-[25%] w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute top-[25%] right-[25%] w-2 h-2 bg-purple-600 rounded-full border border-white shadow-md"></div>

                        <div className="absolute top-[40%] right-[40%] w-6 h-6 bg-amber-500 rounded-full animate-ping opacity-50"></div>
                        <div className="absolute top-[40%] right-[40%] w-3 h-3 bg-amber-600 rounded-full border border-white shadow-md"></div>
                    </div>
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { country: 'Türkiye', users: '45%', color: 'bg-blue-500' },
                            { country: 'ABD', users: '25%', color: 'bg-purple-500' },
                            { country: 'Almanya', users: '15%', color: 'bg-amber-500' },
                            { country: 'Diğer', users: '15%', color: 'bg-gray-400' },
                        ].map((c, i) => (
                            <div key={i} className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${c.color}`}></div>
                                <span className="text-sm font-medium text-gray-600 dark:text-neutral-300">{c.country}</span>
                                <span className="text-xs font-bold text-gray-900 dark:text-white ml-auto">{c.users}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Pages */}
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">En Çok Gezilen Sayfalar</h3>
                    <div className="flex-1 overflow-x-auto">
                        <table className="w-full min-w-[250px]">
                            <thead className="text-xs text-gray-400 uppercase font-bold border-b border-gray-100 dark:border-neutral-800">
                                <tr>
                                    <th className="py-2 text-left">Sayfa</th>
                                    <th className="py-2 text-right">Ziyaret</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {[
                                    { path: '/anasayfa', visits: '45,231', trend: 'up' },
                                    { path: '/galeri/dugun-2023', visits: '12,500', trend: 'up' },
                                    { path: '/iletisim', visits: '8,400', trend: 'down' },
                                    { path: '/blog/fotograf-ipuclari', visits: '6,200', trend: 'up' },
                                    { path: '/fiyatlandirma', visits: '4,100', trend: 'neutral' },
                                ].map((p, i) => (
                                    <tr key={i}>
                                        <td className="py-4 text-sm font-medium text-gray-700 dark:text-neutral-300 truncate max-w-[120px]">{p.path}</td>
                                        <td className="py-4 text-right">
                                            <div className="flex items-center justify-end space-x-2">
                                                <span className="font-bold text-gray-900 dark:text-white">{p.visits}</span>
                                                {p.trend === 'up' && <ArrowUpRight className="w-3 h-3 text-emerald-500" />}
                                                {p.trend === 'down' && <ArrowDownRight className="w-3 h-3 text-rose-500" />}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-bold border border-blue-100 rounded-xl hover:bg-blue-50 dark:border-neutral-800 dark:hover:bg-neutral-800 dark:text-blue-400 transition-colors">
                        Tüm Raporu Gör
                    </button>
                </div>
            </div>
            
            {/* Demographics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Yaş Dağılımı</h3>
                    <div className="space-y-4">
                        {[
                            { label: '18-24', val: 15, color: 'bg-blue-400' },
                            { label: '25-34', val: 45, color: 'bg-blue-600' },
                            { label: '35-44', val: 25, color: 'bg-blue-500' },
                            { label: '45+', val: 15, color: 'bg-blue-300' },
                        ].map((d, i) => (
                            <div key={i} className="flex items-center">
                                <span className="w-12 text-xs font-bold text-gray-500 dark:text-neutral-400">{d.label}</span>
                                <div className="flex-1 h-3 bg-gray-100 dark:bg-neutral-800 rounded-full mx-3 overflow-hidden">
                                    <div className={`h-full rounded-full ${d.color}`} style={{width: `${d.val}%`}}></div>
                                </div>
                                <span className="w-8 text-xs font-bold text-gray-900 dark:text-white text-right">{d.val}%</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                 <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Cihaz Dağılımı</h3>
                    <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-8">
                         <div className="text-center">
                             <div className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-2xl mb-2 text-gray-600 dark:text-neutral-300">
                                 <Monitor className="w-6 h-6 md:w-8 md:h-8" />
                             </div>
                             <span className="block font-bold text-lg md:text-xl text-gray-900 dark:text-white">52%</span>
                             <span className="text-xs text-gray-500 dark:text-neutral-500">Masaüstü</span>
                         </div>
                         <div className="text-center">
                             <div className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-2xl mb-2 text-gray-600 dark:text-neutral-300">
                                 <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
                             </div>
                             <span className="block font-bold text-lg md:text-xl text-gray-900 dark:text-white">35%</span>
                             <span className="text-xs text-gray-500 dark:text-neutral-500">Mobil</span>
                         </div>
                         <div className="text-center">
                             <div className="p-4 bg-gray-100 dark:bg-neutral-900 rounded-2xl mb-2 text-gray-600 dark:text-neutral-300">
                                 <Tablet className="w-6 h-6 md:w-8 md:h-8" />
                             </div>
                             <span className="block font-bold text-lg md:text-xl text-gray-900 dark:text-white">13%</span>
                             <span className="text-xs text-gray-500 dark:text-neutral-500">Tablet</span>
                         </div>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-3 flex overflow-hidden">
                        <div className="bg-gray-800 dark:bg-neutral-400 h-full" style={{width: '52%'}}></div>
                        <div className="bg-gray-600 dark:bg-neutral-500 h-full" style={{width: '35%'}}></div>
                        <div className="bg-gray-400 dark:bg-neutral-600 h-full" style={{width: '13%'}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
