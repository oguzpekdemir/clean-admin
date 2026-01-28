
import React, { useState } from 'react';
import { Save, Bell, Lock, Globe, CreditCard, Shield, Mail, Smartphone, Monitor } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const SettingsPage: React.FC = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('general');

  const handleSave = () => {
      addToast('Ayarlar başarıyla güncellendi.', 'success');
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Uygulama Ayarları</h1>
                <p className="text-gray-500 dark:text-neutral-400 text-sm mt-1">Sistem yapılandırmasını ve tercihlerinizi yönetin.</p>
            </div>
            <button onClick={handleSave} className="px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 shadow-lg flex items-center">
                <Save className="w-4 h-4 mr-2" /> Değişiklikleri Kaydet
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 space-y-1">
                <button 
                    onClick={() => setActiveTab('general')}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'general' ? 'bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm border border-gray-100 dark:border-neutral-800' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                >
                    <Globe className="w-4 h-4 mr-3" /> Genel
                </button>
                <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'notifications' ? 'bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm border border-gray-100 dark:border-neutral-800' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                >
                    <Bell className="w-4 h-4 mr-3" /> Bildirimler
                </button>
                <button 
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm border border-gray-100 dark:border-neutral-800' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                >
                    <Lock className="w-4 h-4 mr-3" /> Güvenlik
                </button>
                <button 
                    onClick={() => setActiveTab('billing')}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'billing' ? 'bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm border border-gray-100 dark:border-neutral-800' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                >
                    <CreditCard className="w-4 h-4 mr-3" /> Faturalandırma
                </button>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 space-y-6">
                
                {/* General Tab */}
                {activeTab === 'general' && (
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Site Bilgileri</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Site Başlığı</label>
                                    <input type="text" defaultValue="CleanAdmin" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Destek E-postası</label>
                                    <input type="email" defaultValue="support@cleanadmin.online" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                                </div>
                            </div>
                        </div>
                        <hr className="border-gray-100 dark:border-neutral-800" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Bölgesel Ayarlar</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Dil</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white">
                                        <option>Türkçe (TR)</option>
                                        <option>English (US)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Saat Dilimi</label>
                                    <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white">
                                        <option>(GMT+03:00) Istanbul</option>
                                        <option>(GMT+00:00) London</option>
                                        <option>(GMT-05:00) New York</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Notifications Tab */}
                {activeTab === 'notifications' && (
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">E-posta Bildirimleri</h4>
                                    <p className="text-xs text-gray-500 dark:text-neutral-400">Yeni siparişler ve mesajlar için e-posta al.</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
                            </label>
                        </div>
                        
                        <hr className="border-gray-100 dark:border-neutral-800" />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">Push Bildirimleri</h4>
                                    <p className="text-xs text-gray-500 dark:text-neutral-400">Mobil cihazına anlık bildirimler gönder.</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
                            </label>
                        </div>

                        <hr className="border-gray-100 dark:border-neutral-800" />

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400">
                                    <Monitor className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 dark:text-white">Masaüstü Uyarıları</h4>
                                    <p className="text-xs text-gray-500 dark:text-neutral-400">Tarayıcı açıkken sağ alt köşede uyarı göster.</p>
                                </div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-white"></div>
                            </label>
                        </div>
                    </div>
                )}

                {/* Security Tab */}
                {activeTab === 'security' && (
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30 flex items-start space-x-3">
                            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                            <div>
                                <h4 className="text-sm font-bold text-blue-900 dark:text-blue-300">2 Faktörlü Doğrulama (2FA)</h4>
                                <p className="text-xs text-blue-700 dark:text-blue-400 mt-1">Hesabınız şu anda güvende. 2FA aktif edildi.</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Şifre Değiştir</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Mevcut Şifre</label>
                                    <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Yeni Şifre</label>
                                        <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Yeni Şifre (Tekrar)</label>
                                        <input type="password" placeholder="••••••••" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Billing Tab */}
                {activeTab === 'billing' && (
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ödeme Yöntemleri</h3>
                                <p className="text-sm text-gray-500 dark:text-neutral-400">Varsayılan kartınız bir sonraki fatura döneminde kullanılacak.</p>
                            </div>
                            <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">+ Kart Ekle</button>
                        </div>

                        <div className="p-4 border border-gray-200 dark:border-neutral-800 rounded-xl flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-white dark:text-black">VISA</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Visa biten 4242</p>
                                    <p className="text-xs text-gray-500">Son Kullanma: 12/2028</p>
                                </div>
                            </div>
                            <span className="text-xs bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded font-bold">Varsayılan</span>
                        </div>

                        <div className="p-4 border border-gray-200 dark:border-neutral-800 rounded-xl flex items-center justify-between opacity-60">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-8 bg-gray-300 dark:bg-neutral-700 rounded-md flex items-center justify-center">
                                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300">MC</span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Mastercard biten 8821</p>
                                    <p className="text-xs text-gray-500">Son Kullanma: 08/2026</p>
                                </div>
                            </div>
                            <button className="text-xs font-bold text-gray-500 hover:text-black dark:hover:text-white">Kaldır</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    </div>
  );
};

export default SettingsPage;
