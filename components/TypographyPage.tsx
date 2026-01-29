
import React from 'react';

const TypographyPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-5xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Tipografi</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                CleanAdmin, okunabilirlik ve modern estetik için <span className="font-bold text-black dark:text-white">Inter</span> font ailesini kullanır.
            </p>
        </div>

        {/* Headings */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Başlıklar (Headings)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800">
                <div className="space-y-6">
                    <div>
                        <h1 className="text-5xl font-black text-gray-900 dark:text-white">H1. Başlık</h1>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-5xl font-black</span>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">H2. Başlık</h2>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-4xl font-bold</span>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">H3. Başlık</h3>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-3xl font-bold</span>
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">H4. Başlık</h4>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-2xl font-bold</span>
                    </div>
                    <div>
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white">H5. Başlık</h5>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-xl font-bold</span>
                    </div>
                    <div>
                        <h6 className="text-lg font-semibold text-gray-900 dark:text-white">H6. Başlık</h6>
                        <span className="text-xs text-gray-400 font-mono mt-1 block">text-lg font-semibold</span>
                    </div>
                </div>
                <div className="bg-gray-50 dark:bg-neutral-900/50 p-6 rounded-2xl">
                    <p className="text-sm text-gray-500 mb-4">Örnek Kullanım:</p>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Panel Genel Bakış</h2>
                            <p className="text-gray-500">Hoşgeldin Oğuz, bugün işler yolunda görünüyor.</p>
                        </div>
                        <div className="border-l-4 border-black dark:border-white pl-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alıntı Başlığı</h3>
                            <p className="text-gray-500 italic">"Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Font Weights */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Font Ağırlıkları</h3>
            <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <p className="font-thin text-3xl text-gray-900 dark:text-white">Thin</p>
                    <span className="text-xs text-gray-400 font-mono">font-thin (100)</span>
                </div>
                <div>
                    <p className="font-light text-3xl text-gray-900 dark:text-white">Light</p>
                    <span className="text-xs text-gray-400 font-mono">font-light (300)</span>
                </div>
                <div>
                    <p className="font-normal text-3xl text-gray-900 dark:text-white">Normal</p>
                    <span className="text-xs text-gray-400 font-mono">font-normal (400)</span>
                </div>
                <div>
                    <p className="font-medium text-3xl text-gray-900 dark:text-white">Medium</p>
                    <span className="text-xs text-gray-400 font-mono">font-medium (500)</span>
                </div>
                <div>
                    <p className="font-bold text-3xl text-gray-900 dark:text-white">Bold</p>
                    <span className="text-xs text-gray-400 font-mono">font-bold (700)</span>
                </div>
                <div>
                    <p className="font-black text-3xl text-gray-900 dark:text-white">Black</p>
                    <span className="text-xs text-gray-400 font-mono">font-black (900)</span>
                </div>
            </div>
        </div>

        {/* Body Text & Colors */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Paragraf ve Renkler</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800">
                    <p className="text-base text-gray-900 dark:text-white mb-4 leading-relaxed">
                        <strong className="block mb-1">Varsayılan Metin (Base)</strong>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        <strong className="block mb-1 text-gray-900 dark:text-white">Küçük Metin (Small)</strong>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                        <strong className="block mb-1 text-gray-900 dark:text-white">Ekstra Küçük (XS)</strong>
                        Sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900 dark:text-white font-medium">Primary Text</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-gray-900 / dark:text-white</code>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-300 font-medium">Secondary Text</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-gray-600 / dark:text-gray-300</code>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-400 dark:text-gray-500 font-medium">Muted / Placeholder</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-gray-400 / dark:text-gray-500</code>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">Link / Accent</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-blue-600 / dark:text-blue-400</code>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-rose-500 font-medium">Error / Danger</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-rose-500</code>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-emerald-500 font-medium">Success</span>
                        <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded">text-emerald-500</code>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TypographyPage;
