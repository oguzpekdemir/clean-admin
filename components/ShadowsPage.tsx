
import React from 'react';

const ShadowsPage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Gölgeler & Yuvarlaklık</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Derinlik algısı (elevation) ve bileşenlerin köşe yapıları için standartlar.
            </p>
        </div>

        {/* Shadows */}
        <div className="space-y-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Gölgeler (Shadows)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow-sm border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">SM</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow-sm</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">Base</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow-md border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">MD</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow-md</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow-lg border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">LG</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow-lg</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow-xl border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">XL</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow-xl</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-white dark:bg-[#09090b] rounded-xl flex items-center justify-center mb-4 shadow-2xl border border-gray-100 dark:border-neutral-800">
                        <span className="text-xs text-gray-400">2XL</span>
                    </div>
                    <code className="text-xs bg-gray-100 dark:bg-neutral-900 px-2 py-1 rounded text-gray-600 dark:text-gray-300">shadow-2xl</code>
                </div>

            </div>
        </div>

        {/* Colored Shadows */}
        <div className="space-y-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Renkli Gölgeler</h3>
            <div className="flex flex-wrap gap-8">
                <div className="w-32 h-32 bg-blue-500 rounded-3xl shadow-lg shadow-blue-500/50 flex items-center justify-center text-white font-bold text-xs">
                    Blue Glow
                </div>
                <div className="w-32 h-32 bg-purple-500 rounded-3xl shadow-lg shadow-purple-500/50 flex items-center justify-center text-white font-bold text-xs">
                    Purple Glow
                </div>
                <div className="w-32 h-32 bg-rose-500 rounded-3xl shadow-lg shadow-rose-500/50 flex items-center justify-center text-white font-bold text-xs">
                    Rose Glow
                </div>
                <div className="w-32 h-32 bg-emerald-500 rounded-3xl shadow-lg shadow-emerald-500/50 flex items-center justify-center text-white font-bold text-xs">
                    Emerald Glow
                </div>
            </div>
        </div>

        {/* Border Radius */}
        <div className="space-y-8">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Köşe Yuvarlaklığı (Border Radius)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                
                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-sm border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded-sm</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-md border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded-md</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded-lg</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-xl border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded-xl</code>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-24 h-24 bg-gray-100 dark:bg-neutral-900 rounded-3xl border border-gray-300 dark:border-neutral-700 mb-4"></div>
                    <code className="text-xs text-gray-500">rounded-3xl</code>
                </div>

            </div>
        </div>
    </div>
  );
};

export default ShadowsPage;
