
import React from 'react';
import { TrendingUp, PieChart as PieIcon, BarChart as BarIcon, Activity, Hexagon, Layers, ArrowRight } from 'lucide-react';

const ChartsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-20">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Grafik Bileşenleri</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Bar Chart */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <BarIcon className="w-5 h-5 mr-2 text-blue-500" /> Satış Grafiği
                    </h3>
                </div>
                
                <div className="overflow-x-auto no-scrollbar">
                    <div className="h-64 flex items-end justify-between space-x-2 sm:space-x-4 px-2 pt-8 min-w-[300px]">
                        {[45, 70, 35, 60, 90, 55, 75].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center justify-end group cursor-pointer h-full relative">
                                {/* Track */}
                                <div className="w-full h-full bg-gray-100 dark:bg-neutral-900 rounded-xl relative overflow-hidden flex items-end">
                                    {/* Bar */}
                                    <div 
                                        className="w-full bg-blue-500 group-hover:bg-blue-600 transition-all duration-500 rounded-xl relative" 
                                        style={{ height: `${h}%` }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-20">
                                            {h} Adet
                                        </div>
                                    </div>
                                </div>
                                <span className="text-center text-xs text-gray-500 mt-2 font-medium">Gün {i+1}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Line Chart (SVG) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-emerald-500" /> Performans Eğrisi
                    </h3>
                </div>
                
                <div className="overflow-x-auto no-scrollbar">
                    <div className="h-64 relative min-w-[300px]">
                        <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                             {/* Grid Lines */}
                             <line x1="0" y1="10" x2="100" y2="10" stroke="#e5e7eb" strokeWidth="0.1" className="dark:stroke-neutral-800" />
                             <line x1="0" y1="30" x2="100" y2="30" stroke="#e5e7eb" strokeWidth="0.1" className="dark:stroke-neutral-800" />
                             
                             {/* Path */}
                             <path 
                                d="M0,45 Q10,35 20,40 T40,20 T60,25 T80,10 T100,5" 
                                fill="none" 
                                stroke="#10b981" 
                                strokeWidth="1" 
                                strokeLinecap="round"
                                className="drop-shadow-lg"
                             />
                             {/* Area fill (optional opacity) */}
                             <path 
                                d="M0,45 Q10,35 20,40 T40,20 T60,25 T80,10 T100,5 V50 H0 Z" 
                                fill="url(#gradient)" 
                                opacity="0.2"
                             />
                             <defs>
                                 <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                     <stop offset="0%" stopColor="#10b981" />
                                     <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                                 </linearGradient>
                             </defs>

                             {/* Points - Fixed Hover Effect */}
                             {[ [0,45], [20,40], [40,20], [60,25], [80,10], [100,5] ].map((p, i) => (
                                 <g key={i} className="group cursor-pointer">
                                     {/* Invisible larger hit area for easier hovering */}
                                     <circle cx={p[0]} cy={p[1]} r="4" fill="transparent" />
                                     {/* Glow effect on hover */}
                                     <circle cx={p[0]} cy={p[1]} r="3" className="fill-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                     {/* Actual Point */}
                                     <circle cx={p[0]} cy={p[1]} r="1.5" fill="white" stroke="#10b981" strokeWidth="0.5" />
                                 </g>
                             ))}
                        </svg>
                    </div>
                </div>
            </div>

            {/* Heatmap (NEW) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm md:col-span-2">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Layers className="w-5 h-5 mr-2 text-indigo-500" /> Aktivite Haritası (Heatmap)
                    </h3>
                </div>
                <div className="overflow-x-auto pb-2">
                    <div className="flex flex-wrap gap-1 justify-center min-w-[500px]">
                        {Array.from({ length: 52 * 7 }).map((_, i) => {
                            const level = Math.random();
                            let color = 'bg-gray-100 dark:bg-neutral-900';
                            if (level > 0.9) color = 'bg-indigo-600';
                            else if (level > 0.7) color = 'bg-indigo-500';
                            else if (level > 0.5) color = 'bg-indigo-400';
                            else if (level > 0.3) color = 'bg-indigo-300';
                            
                            return (
                                <div 
                                    key={i} 
                                    className={`w-3 h-3 rounded-sm ${color} hover:ring-1 hover:ring-indigo-300 transition-all cursor-pointer`}
                                    title={`Activity Level: ${Math.floor(level * 100)}%`}
                                ></div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-end items-center mt-4 space-x-2 text-xs text-gray-500">
                    <span>Az</span>
                    <div className="w-3 h-3 bg-gray-100 dark:bg-neutral-900 rounded-sm"></div>
                    <div className="w-3 h-3 bg-indigo-300 rounded-sm"></div>
                    <div className="w-3 h-3 bg-indigo-500 rounded-sm"></div>
                    <div className="w-3 h-3 bg-indigo-600 rounded-sm"></div>
                    <span>Çok</span>
                </div>
            </div>

            {/* Donut Chart (CSS Conic) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <PieIcon className="w-5 h-5 mr-2 text-purple-500" /> Kullanıcı Cihazları
                    </h3>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full relative" style={{ background: 'conic-gradient(#3B82F6 0% 45%, #A855F7 45% 75%, #F59E0B 75% 100%)' }}>
                        <div className="absolute inset-8 bg-white dark:bg-[#09090b] rounded-full flex flex-col items-center justify-center">
                             <span className="text-3xl font-bold text-gray-900 dark:text-white">100%</span>
                             <span className="text-xs text-gray-500">Dağılım</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-8 space-x-6">
                    <div className="flex items-center text-sm"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span> Desktop (45%)</div>
                    <div className="flex items-center text-sm"><span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span> Mobile (30%)</div>
                    <div className="flex items-center text-sm"><span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span> Tablet (25%)</div>
                </div>
            </div>

            {/* Funnel Chart (NEW) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-center">
                <div className="flex items-center justify-between mb-8 w-full">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <ArrowRight className="w-5 h-5 mr-2 text-rose-500 rotate-90" /> Satış Hunisi (Funnel)
                    </h3>
                </div>
                <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
                    <div className="w-full bg-rose-500 h-10 rounded-lg flex items-center justify-between px-4 text-white font-bold shadow-lg shadow-rose-500/30">
                        <span>Ziyaretçi</span>
                        <span>100%</span>
                    </div>
                    <div className="w-[80%] bg-rose-400 h-10 rounded-lg flex items-center justify-between px-4 text-white font-bold">
                        <span>Üye</span>
                        <span>80%</span>
                    </div>
                    <div className="w-[60%] bg-rose-300 h-10 rounded-lg flex items-center justify-between px-4 text-white font-bold">
                        <span>Sepet</span>
                        <span>60%</span>
                    </div>
                    <div className="w-[40%] bg-rose-200 dark:text-rose-900 h-10 rounded-lg flex items-center justify-between px-4 text-white font-bold">
                        <span>Ödeme</span>
                        <span>40%</span>
                    </div>
                    <div className="w-[20%] bg-emerald-500 h-10 rounded-lg flex items-center justify-between px-4 text-white font-bold shadow-lg shadow-emerald-500/30">
                        <span>Satış</span>
                        <span>20%</span>
                    </div>
                </div>
            </div>

            {/* Radial Bar (NEW) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-center">
                <div className="flex items-center justify-between mb-4 w-full">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-amber-500" /> Hedef İzleme
                    </h3>
                </div>
                <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Ring 1 */}
                    <div className="absolute inset-0 rounded-full border-[12px] border-gray-100 dark:border-neutral-900"></div>
                    <div className="absolute inset-0 rounded-full border-[12px] border-amber-500 border-l-transparent border-b-transparent rotate-45"></div>
                    
                    {/* Ring 2 */}
                    <div className="absolute inset-6 rounded-full border-[12px] border-gray-100 dark:border-neutral-900"></div>
                    <div className="absolute inset-6 rounded-full border-[12px] border-blue-500 border-r-transparent border-t-transparent -rotate-45"></div>

                    {/* Ring 3 */}
                    <div className="absolute inset-12 rounded-full border-[12px] border-gray-100 dark:border-neutral-900"></div>
                    <div className="absolute inset-12 rounded-full border-[12px] border-purple-500 border-l-transparent border-t-transparent rotate-12"></div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-black text-gray-900 dark:text-white">3</span>
                        <span className="text-xs font-bold text-gray-500 uppercase">Aktif Hedef</span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <span className="flex items-center text-xs font-bold"><div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div> Gelir</span>
                    <span className="flex items-center text-xs font-bold"><div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div> Müşteri</span>
                    <span className="flex items-center text-xs font-bold"><div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div> Proje</span>
                </div>
            </div>

            {/* Radar Chart (SVG Simulation) */}
            <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col items-center">
                <div className="flex items-center justify-between mb-4 w-full">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Hexagon className="w-5 h-5 mr-2 text-indigo-500" /> Yetenek Analizi
                    </h3>
                </div>
                <div className="relative w-64 h-64">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        {/* Background Polygons */}
                        {[20, 40, 60, 80, 100].map((r, i) => (
                            <polygon 
                                key={i}
                                points="50,0 93,25 93,75 50,100 7,75 7,25" 
                                fill="none" 
                                stroke="#e5e7eb" 
                                strokeWidth="0.5"
                                className="dark:stroke-neutral-800"
                                transform={`scale(${r/100})`}
                                transform-origin="50 50"
                            />
                        ))}
                        
                        {/* Data Shape */}
                        <polygon 
                            points="50,10 85,30 80,70 50,90 20,60 15,35" 
                            fill="rgba(99, 102, 241, 0.2)" 
                            stroke="#6366f1" 
                            strokeWidth="2"
                        />
                        
                        {/* Points */}
                        {[ [50,10], [85,30], [80,70], [50,90], [20,60], [15,35] ].map((p, i) => (
                            <circle key={i} cx={p[0]} cy={p[1]} r="2" fill="#6366f1" />
                        ))}
                    </svg>
                    {/* Labels (Absolute positioned manually for demo) */}
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 text-[10px] font-bold dark:text-white">Kodlama</span>
                    <span className="absolute top-1/4 right-0 text-[10px] font-bold dark:text-white">Tasarım</span>
                    <span className="absolute bottom-1/4 right-0 text-[10px] font-bold dark:text-white">Analiz</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10px] font-bold dark:text-white">Test</span>
                    <span className="absolute bottom-1/4 left-0 text-[10px] font-bold dark:text-white">Yönetim</span>
                    <span className="absolute top-1/4 left-0 text-[10px] font-bold dark:text-white">İletişim</span>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ChartsPage;
