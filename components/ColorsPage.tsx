
import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ColorsPage: React.FC = () => {
  const { addToast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    addToast(`${text} kopyalandı!`, 'success');
  };

  const ColorSwatch = ({ name, hex, bgClass, textClass = "text-gray-500" }: { name: string, hex: string, bgClass: string, textClass?: string }) => (
    <div 
        className="group cursor-pointer flex flex-col"
        onClick={() => copyToClipboard(hex)}
    >
        <div className={`h-24 w-full rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 mb-3 relative ${bgClass} flex items-center justify-center transition-transform group-hover:scale-105`}>
            <div className="opacity-0 group-hover:opacity-100 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white transition-opacity">
                <Copy className="w-5 h-5" />
            </div>
        </div>
        <div className="flex justify-between items-center px-1">
            <span className="font-bold text-sm text-gray-900 dark:text-white">{name}</span>
            <span className={`text-xs font-mono ${textClass}`}>{hex}</span>
        </div>
    </div>
  );

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Renk Sistemi</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                CleanAdmin, Tailwind CSS varsayılan renk paletini genişleterek oluşturulmuş tutarlı bir renk sistemine sahiptir.
            </p>
        </div>

        {/* Brand Colors */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Marka Renkleri (Brand)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ColorSwatch name="Primary (Black)" hex="#000000" bgClass="bg-black" textClass="text-gray-500" />
                <ColorSwatch name="White" hex="#FFFFFF" bgClass="bg-white" textClass="text-gray-400" />
                <ColorSwatch name="Background" hex="#F9FAFB" bgClass="bg-[#F9FAFB]" textClass="text-gray-400" />
                <ColorSwatch name="Dark Bg" hex="#000000" bgClass="bg-[#000000]" textClass="text-gray-500" />
            </div>
        </div>

        {/* Neutral Scale */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nötr Renkler (Gray / Slate)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-4">
                <ColorSwatch name="50" hex="#F9FAFB" bgClass="bg-gray-50" />
                <ColorSwatch name="100" hex="#F3F4F6" bgClass="bg-gray-100" />
                <ColorSwatch name="200" hex="#E5E7EB" bgClass="bg-gray-200" />
                <ColorSwatch name="300" hex="#D1D5DB" bgClass="bg-gray-300" />
                <ColorSwatch name="400" hex="#9CA3AF" bgClass="bg-gray-400" />
                <ColorSwatch name="500" hex="#6B7280" bgClass="bg-gray-500" />
                <ColorSwatch name="600" hex="#4B5563" bgClass="bg-gray-600" />
                <ColorSwatch name="700" hex="#374151" bgClass="bg-gray-700" />
                <ColorSwatch name="800" hex="#1F2937" bgClass="bg-gray-800" />
                <ColorSwatch name="900" hex="#111827" bgClass="bg-gray-900" />
            </div>
        </div>

        {/* Semantic Colors */}
        <div className="space-y-6">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Durum Renkleri (Semantics)</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                
                {/* Success */}
                <div className="space-y-3">
                    <span className="text-xs font-bold text-emerald-500">BAŞARILI (SUCCESS)</span>
                    <div className="grid grid-cols-1 gap-3">
                        <ColorSwatch name="Emerald 500" hex="#10B981" bgClass="bg-emerald-500" />
                        <ColorSwatch name="Emerald 50" hex="#ECFDF5" bgClass="bg-emerald-50" />
                    </div>
                </div>

                {/* Error */}
                <div className="space-y-3">
                    <span className="text-xs font-bold text-rose-500">HATA (ERROR)</span>
                    <div className="grid grid-cols-1 gap-3">
                        <ColorSwatch name="Rose 500" hex="#F43F5E" bgClass="bg-rose-500" />
                        <ColorSwatch name="Rose 50" hex="#FFF1F2" bgClass="bg-rose-50" />
                    </div>
                </div>

                {/* Warning */}
                <div className="space-y-3">
                    <span className="text-xs font-bold text-amber-500">UYARI (WARNING)</span>
                    <div className="grid grid-cols-1 gap-3">
                        <ColorSwatch name="Amber 500" hex="#F59E0B" bgClass="bg-amber-500" />
                        <ColorSwatch name="Amber 50" hex="#FFFBEB" bgClass="bg-amber-50" />
                    </div>
                </div>

                {/* Info */}
                <div className="space-y-3">
                    <span className="text-xs font-bold text-blue-500">BİLGİ (INFO)</span>
                    <div className="grid grid-cols-1 gap-3">
                        <ColorSwatch name="Blue 500" hex="#3B82F6" bgClass="bg-blue-500" />
                        <ColorSwatch name="Blue 50" hex="#EFF6FF" bgClass="bg-blue-50" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ColorsPage;
