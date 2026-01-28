
import React from 'react';
import { Layout, Sidebar, Monitor, Smartphone, Moon, Sun, CheckCircle } from 'lucide-react';
import { useLayout } from '../context/LayoutContext';
import { useTheme } from '../context/ThemeContext';

const LayoutsPage: React.FC = () => {
  const { 
      layoutType, setLayoutType, 
      widthType, setWidthType, 
      headerType, setHeaderType,
      colorTheme, setColorTheme
  } = useLayout();
  
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="space-y-8 animate-fade-in max-w-5xl mx-auto">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Yerleşim Ayarları</h2>
            <p className="text-gray-500 dark:text-neutral-400">CleanAdmin panelinizi ihtiyaçlarınıza göre anlık olarak özelleştirin.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. Navigation Type */}
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Sidebar className="w-5 h-5 mr-2" /> Navigasyon Tipi
                </h3>
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        onClick={() => setLayoutType('vertical')}
                        className={`p-4 rounded-xl border-2 text-center transition-all relative ${layoutType === 'vertical' ? 'border-black dark:border-white bg-gray-50 dark:bg-neutral-900' : 'border-gray-100 dark:border-neutral-800 hover:border-gray-300'}`}
                    >
                         <div className="h-20 bg-gray-200 dark:bg-neutral-800 rounded-lg mb-3 flex overflow-hidden">
                             <div className="w-1/4 h-full bg-gray-400 dark:bg-neutral-600"></div>
                             <div className="flex-1 h-full bg-white dark:bg-black border-l border-gray-300 dark:border-neutral-700 p-1">
                                 <div className="w-full h-2 bg-gray-200 dark:bg-neutral-800 rounded mb-1"></div>
                                 <div className="w-2/3 h-2 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                             </div>
                         </div>
                         <span className="font-bold text-sm text-gray-900 dark:text-white">Dikey (Sidebar)</span>
                         {layoutType === 'vertical' && <div className="absolute top-2 right-2 text-emerald-500"><CheckCircle className="w-5 h-5 fill-current" /></div>}
                    </button>

                    <button 
                        onClick={() => setLayoutType('horizontal')}
                        className={`p-4 rounded-xl border-2 text-center transition-all relative ${layoutType === 'horizontal' ? 'border-black dark:border-white bg-gray-50 dark:bg-neutral-900' : 'border-gray-100 dark:border-neutral-800 hover:border-gray-300'}`}
                    >
                         <div className="h-20 bg-gray-200 dark:bg-neutral-800 rounded-lg mb-3 flex flex-col overflow-hidden">
                             <div className="w-full h-1/4 bg-gray-400 dark:bg-neutral-600"></div>
                             <div className="flex-1 w-full bg-white dark:bg-black p-1">
                                 <div className="w-full h-2 bg-gray-200 dark:bg-neutral-800 rounded mb-1"></div>
                                 <div className="w-2/3 h-2 bg-gray-200 dark:bg-neutral-800 rounded"></div>
                             </div>
                         </div>
                         <span className="font-bold text-sm text-gray-900 dark:text-white">Yatay (Topbar)</span>
                         {layoutType === 'horizontal' && <div className="absolute top-2 right-2 text-emerald-500"><CheckCircle className="w-5 h-5 fill-current" /></div>}
                    </button>
                </div>
            </div>

            {/* 2. Content Width */}
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Layout className="w-5 h-5 mr-2" /> İçerik Genişliği
                </h3>
                <div className="space-y-4">
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-neutral-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                        <div className="flex items-center">
                            <Monitor className="w-5 h-5 mr-3 text-gray-500" />
                            <span className="font-medium text-gray-900 dark:text-white">Tam Genişlik (Fluid)</span>
                        </div>
                        <input type="radio" name="width" checked={widthType === 'fluid'} onChange={() => setWidthType('fluid')} className="w-5 h-5 text-black focus:ring-black" />
                    </label>
                    <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 dark:border-neutral-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                        <div className="flex items-center">
                            <Smartphone className="w-5 h-5 mr-3 text-gray-500" />
                            <span className="font-medium text-gray-900 dark:text-white">Kutulu (Boxed)</span>
                        </div>
                        <input type="radio" name="width" checked={widthType === 'boxed'} onChange={() => setWidthType('boxed')} className="w-5 h-5 text-black focus:ring-black" />
                    </label>
                </div>
            </div>

            {/* 3. Theme & Colors */}
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm md:col-span-2">
                 <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                    <Sun className="w-5 h-5 mr-2" /> Görünüm & Tema
                </h3>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1">
                        <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 block mb-3">Vurgu Rengi</label>
                        <div className="flex space-x-3">
                            <button onClick={() => setColorTheme('black')} className={`w-10 h-10 rounded-full bg-black border-2 ${colorTheme === 'black' ? 'border-gray-400' : 'border-transparent'} shadow-sm hover:scale-110 transition-transform`}></button>
                            <button onClick={() => setColorTheme('blue')} className={`w-10 h-10 rounded-full bg-blue-600 border-2 ${colorTheme === 'blue' ? 'border-gray-400' : 'border-transparent'} shadow-sm hover:scale-110 transition-transform`}></button>
                            <button onClick={() => setColorTheme('purple')} className={`w-10 h-10 rounded-full bg-purple-600 border-2 ${colorTheme === 'purple' ? 'border-gray-400' : 'border-transparent'} shadow-sm hover:scale-110 transition-transform`}></button>
                            <button onClick={() => setColorTheme('emerald')} className={`w-10 h-10 rounded-full bg-emerald-500 border-2 ${colorTheme === 'emerald' ? 'border-gray-400' : 'border-transparent'} shadow-sm hover:scale-110 transition-transform`}></button>
                            <button onClick={() => setColorTheme('rose')} className={`w-10 h-10 rounded-full bg-rose-500 border-2 ${colorTheme === 'rose' ? 'border-gray-400' : 'border-transparent'} shadow-sm hover:scale-110 transition-transform`}></button>
                        </div>
                    </div>
                    <div className="flex-1">
                         <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 block mb-3">Header Pozisyonu</label>
                         <div className="flex items-center space-x-6">
                             <label className="flex items-center space-x-2 cursor-pointer">
                                 <input type="radio" name="header" checked={headerType === 'fixed'} onChange={() => setHeaderType('fixed')} className="text-black focus:ring-black" />
                                 <span className="text-sm font-medium dark:text-white">Sabit (Fixed)</span>
                             </label>
                             <label className="flex items-center space-x-2 cursor-pointer">
                                 <input type="radio" name="header" checked={headerType === 'scroll'} onChange={() => setHeaderType('scroll')} className="text-black focus:ring-black" />
                                 <span className="text-sm font-medium dark:text-white">Kaydırılabilir (Scroll)</span>
                             </label>
                         </div>
                    </div>
                    <div className="flex-1">
                        <label className="text-sm font-bold text-gray-500 dark:text-neutral-400 block mb-3">Mod</label>
                        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-neutral-900 rounded-xl p-1 w-fit">
                            <button 
                                onClick={() => theme === 'dark' && toggleTheme()} 
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${theme === 'light' ? 'bg-white shadow text-black' : 'text-gray-500'}`}
                            >
                                Light
                            </button>
                            <button 
                                onClick={() => theme === 'light' && toggleTheme()} 
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${theme === 'dark' ? 'bg-neutral-800 shadow text-white' : 'text-gray-500'}`}
                            >
                                Dark
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LayoutsPage;
