
import React from 'react';
import { 
    Plus, Trash2, Edit, Save, Download, Share2, Settings, 
    ChevronRight, Loader2, ArrowRight, Bell, Github, Twitter, Linkedin
} from 'lucide-react';

const ButtonsPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Butonlar</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Uygulama genelinde kullanılan etkileşim bileşenleri. Farklı boyut, durum ve stilleri içerir.
            </p>
        </div>

        {/* 1. Variants */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Varyasyonlar</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-wrap gap-4 items-center">
                
                {/* Primary */}
                <button className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-black/20 dark:shadow-white/10">
                    Primary
                </button>

                {/* Secondary */}
                <button className="px-6 py-2.5 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white rounded-xl text-sm font-bold hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
                    Secondary
                </button>

                {/* Outline */}
                <button className="px-6 py-2.5 border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                    Outline
                </button>

                {/* Ghost */}
                <button className="px-6 py-2.5 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-900 rounded-xl text-sm font-bold transition-colors">
                    Ghost
                </button>

                {/* Destructive */}
                <button className="px-6 py-2.5 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border border-rose-100 dark:border-rose-900/30 rounded-xl text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors">
                    Destructive
                </button>

                {/* Success */}
                <button className="px-6 py-2.5 bg-emerald-500 text-white rounded-xl text-sm font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">
                    Success
                </button>
            </div>
        </div>

        {/* 2. Sizes */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Boyutlar</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-wrap items-center gap-4">
                <button className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-lg text-xs font-bold">
                    Mini (XS)
                </button>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg text-sm font-bold">
                    Small (SM)
                </button>
                <button className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold">
                    Default (MD)
                </button>
                <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-base font-bold">
                    Large (LG)
                </button>
                <button className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl text-lg font-bold">
                    Extra (XL)
                </button>
            </div>
        </div>

        {/* 3. With Icons */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">İkonlu Butonlar</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-wrap gap-4">
                
                <button className="flex items-center px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold">
                    <Plus className="w-4 h-4 mr-2" /> Yeni Ekle
                </button>

                <button className="flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-600/20">
                    <Download className="w-4 h-4 mr-2" /> İndir
                </button>

                <button className="flex items-center px-5 py-2.5 border border-gray-200 dark:border-neutral-700 text-gray-700 dark:text-gray-300 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-900">
                    Ayarlar <Settings className="w-4 h-4 ml-2" />
                </button>

                <button className="flex items-center px-5 py-2.5 bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-white rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-all">
                    Devam Et <ArrowRight className="w-4 h-4 ml-2" />
                </button>

                {/* Only Icon */}
                <button className="p-2.5 bg-gray-100 dark:bg-neutral-800 text-black dark:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
                    <Bell className="w-5 h-5" />
                </button>
                <button className="p-2.5 bg-rose-50 dark:bg-rose-900/20 text-rose-600 rounded-xl hover:bg-rose-100 dark:hover:bg-rose-900/30 transition-colors">
                    <Trash2 className="w-5 h-5" />
                </button>
            </div>
        </div>

        {/* 4. States */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Durumlar (Loading & Disabled)</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-wrap gap-4">
                
                <button disabled className="px-6 py-2.5 bg-gray-200 dark:bg-neutral-800 text-gray-400 dark:text-gray-600 rounded-xl text-sm font-bold cursor-not-allowed">
                    Disabled
                </button>

                <button disabled className="px-6 py-2.5 border border-gray-200 dark:border-neutral-800 text-gray-300 dark:text-neutral-700 rounded-xl text-sm font-bold cursor-not-allowed">
                    Disabled Outline
                </button>

                <button className="flex items-center px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold opacity-80 cursor-wait">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Yükleniyor
                </button>

                <button className="flex items-center px-6 py-2.5 bg-blue-600/80 text-white rounded-xl text-sm font-bold cursor-wait">
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> İşleniyor
                </button>
            </div>
        </div>

        {/* 5. Social & Special */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Sosyal & Özel</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 flex flex-wrap gap-4">
                
                <button className="flex items-center px-5 py-2.5 bg-[#24292F] text-white rounded-xl text-sm font-bold hover:opacity-90">
                    <Github className="w-4 h-4 mr-2" /> GitHub ile Giriş
                </button>

                <button className="flex items-center px-5 py-2.5 bg-[#1DA1F2] text-white rounded-xl text-sm font-bold hover:opacity-90">
                    <Twitter className="w-4 h-4 mr-2" /> Twitter
                </button>

                <button className="flex items-center px-5 py-2.5 bg-[#0A66C2] text-white rounded-xl text-sm font-bold hover:opacity-90">
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </button>

                {/* Gradient Button */}
                <button className="px-6 py-2.5 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-xl text-sm font-bold hover:opacity-90 shadow-lg shadow-purple-500/30 transition-opacity">
                    Gradient Action
                </button>
            </div>
        </div>
    </div>
  );
};

export default ButtonsPage;
