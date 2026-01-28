
import React, { useState } from 'react';
import { 
    Search, Plus, Key, Webhook, Check, Copy, Trash2, ExternalLink, 
    Shield, RefreshCw, Zap, LayoutGrid, List, Eye, EyeOff, Terminal
} from 'lucide-react';
import { useToast } from '../context/ToastContext';

type TabType = 'apps' | 'api' | 'webhooks';

const IntegrationsPage: React.FC = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState<TabType>('apps');
  const [showKey, setShowKey] = useState<Record<string, boolean>>({});

  // --- MOCK DATA ---
  
  const apps = [
      { id: 1, name: 'Google Drive', cat: 'Depolama', desc: 'Dosyaları otomatik yedekle ve senkronize et.', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg', connected: true },
      { id: 2, name: 'Slack', cat: 'İletişim', desc: 'Takım bildirimlerini kanallara gönder.', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', connected: true },
      { id: 3, name: 'Stripe', cat: 'Finans', desc: 'Ödemeleri yönet ve fatura oluştur.', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg', connected: false },
      { id: 4, name: 'Mailchimp', cat: 'Pazarlama', desc: 'Müşteri listelerini e-posta kampanyalarına aktar.', logo: 'https://cdn.worldvectorlogo.com/logos/mailchimp-freddie-icon.svg', connected: false },
      { id: 5, name: 'Zapier', cat: 'Otomasyon', desc: '3000+ uygulama ile iş akışları oluştur.', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Zapier_logo.svg', connected: false },
      { id: 6, name: 'Shopify', cat: 'E-Ticaret', desc: 'Ürün ve sipariş verilerini eşle.', logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg', connected: true },
  ];

  const apiKeys = [
      { id: 'key_1', name: 'Mobil Uygulama', key: 'sk_live_51Mz...Xy92', created: '12 Eki 2023', lastUsed: '2 dk önce', status: 'Aktif' },
      { id: 'key_2', name: 'Test Sunucusu', key: 'sk_test_42Kb...Mq81', created: '05 Eyl 2023', lastUsed: '5 gün önce', status: 'Pasif' },
  ];

  const webhooks = [
      { id: 'wh_1', url: 'https://api.mysite.com/hooks/orders', event: 'order.created', status: 200, success: true },
      { id: 'wh_2', url: 'https://crm.external.com/sync', event: 'user.signup', status: 500, success: false },
  ];

  // --- ACTIONS ---

  const toggleKeyVisibility = (id: string) => {
      setShowKey(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (text: string) => {
      navigator.clipboard.writeText(text);
      addToast('Kopyalandı!', 'success');
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-20">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-neutral-900 dark:to-neutral-950 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-3xl font-bold mb-2 flex items-center">
                        <Zap className="w-8 h-8 mr-3 text-yellow-400" />
                        Entegrasyon Merkezi
                    </h1>
                    <p className="text-blue-100 max-w-lg text-sm leading-relaxed">
                        Uygulamalarınızı bağlayın, API anahtarlarınızı yönetin ve webhook'lar ile gerçek zamanlı veri akışı sağlayın. Burası sisteminizin kontrol odasıdır.
                    </p>
                </div>
                <div className="flex bg-white/10 backdrop-blur-md p-1 rounded-xl overflow-x-auto no-scrollbar w-full md:w-auto">
                    {(['apps', 'api', 'webhooks'] as TabType[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap flex-1 md:flex-none ${
                                activeTab === tab 
                                ? 'bg-white text-black shadow-lg' 
                                : 'text-white/70 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            {tab === 'apps' && 'Uygulamalar'}
                            {tab === 'api' && 'API Anahtarları'}
                            {tab === 'webhooks' && 'Webhooks'}
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* --- APPS TAB --- */}
        {activeTab === 'apps' && (
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="relative w-full sm:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Uygulama ara..." 
                            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-xl text-sm outline-none focus:border-black dark:focus:border-white transition-colors dark:text-white"
                        />
                    </div>
                    <div className="flex space-x-2 w-full sm:w-auto justify-end">
                        <button className="px-4 py-2 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900">
                            Filtrele
                        </button>
                        <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">
                            Önerilenler
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {apps.map((app) => (
                        <div key={app.id} className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all group relative">
                            {app.connected && (
                                <div className="absolute top-4 right-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 p-1.5 rounded-full">
                                    <Check className="w-4 h-4" />
                                </div>
                            )}
                            <div className="w-16 h-16 bg-gray-50 dark:bg-neutral-900 rounded-2xl flex items-center justify-center mb-4 p-3">
                                <img src={app.logo} alt={app.name} className="w-full h-full object-contain" />
                            </div>
                            <div className="mb-4">
                                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">{app.cat}</span>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{app.name}</h3>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed h-8 line-clamp-2">
                                    {app.desc}
                                </p>
                            </div>
                            <button 
                                className={`w-full py-2.5 rounded-xl text-sm font-bold transition-colors ${
                                    app.connected 
                                    ? 'bg-gray-100 dark:bg-neutral-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-neutral-800' 
                                    : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                                }`}
                            >
                                {app.connected ? 'Yönet' : 'Bağla'}
                            </button>
                        </div>
                    ))}
                    
                    {/* Coming Soon Card */}
                    <div className="bg-gray-50 dark:bg-neutral-900/30 p-6 rounded-3xl border border-dashed border-gray-200 dark:border-neutral-800 flex flex-col items-center justify-center text-center">
                        <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-3">
                            <Plus className="w-6 h-6 text-gray-400" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white">Yeni Bir Şey mi Lazım?</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 mb-4">Geliştirici ekibimize istek gönderin.</p>
                        <button className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">İstek Oluştur</button>
                    </div>
                </div>
            </div>
        )}

        {/* --- API KEYS TAB --- */}
        {activeTab === 'api' && (
            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between md:items-center gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">API Anahtarları</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Bu anahtarlar uygulamanızın API'ye tam erişimini sağlar. Kimseyle paylaşmayın.</p>
                    </div>
                    <button className="flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 shadow-lg w-fit">
                        <Plus className="w-4 h-4 mr-2" /> Yeni Anahtar
                    </button>
                </div>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-gray-50 dark:bg-neutral-900 text-xs uppercase text-gray-500 dark:text-gray-400 font-bold">
                            <tr>
                                <th className="px-6 py-4 whitespace-nowrap">İsim</th>
                                <th className="px-6 py-4 whitespace-nowrap">Secret Key</th>
                                <th className="px-6 py-4 whitespace-nowrap">Oluşturulma</th>
                                <th className="px-6 py-4 whitespace-nowrap">Son Erişim</th>
                                <th className="px-6 py-4 whitespace-nowrap">Durum</th>
                                <th className="px-6 py-4 text-right whitespace-nowrap">İşlem</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                            {apiKeys.map((key) => (
                                <tr key={key.id} className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="font-bold text-gray-900 dark:text-white text-sm">{key.name}</div>
                                        <div className="text-xs text-gray-400 font-mono mt-0.5">{key.id}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg w-fit">
                                            <code className="text-xs font-mono text-gray-600 dark:text-gray-300">
                                                {showKey[key.id] ? key.key : 'sk_live_•••••••••••••••••'}
                                            </code>
                                            <button onClick={() => toggleKeyVisibility(key.id)} className="text-gray-400 hover:text-black dark:hover:text-white">
                                                {showKey[key.id] ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                            </button>
                                            <button onClick={() => copyToClipboard(key.key)} className="text-gray-400 hover:text-black dark:hover:text-white">
                                                <Copy className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{key.created}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">{key.lastUsed}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${key.status === 'Aktif' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-gray-100 dark:bg-neutral-800 text-gray-500'}`}>
                                            {key.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <button className="p-2 text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-colors">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )}

        {/* --- WEBHOOKS TAB --- */}
        {activeTab === 'webhooks' && (
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                            <Webhook className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100">Webhook Entegrasyonu</h3>
                            <p className="text-sm text-blue-700 dark:text-blue-300 mt-1 max-w-2xl">
                                Olayları (sipariş, üyelik vb.) gerçekleştiği anda kendi sunucunuza iletin. Başarısız gönderimler otomatik olarak 3 kez tekrar denenir.
                            </p>
                        </div>
                    </div>
                    <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-blue-500/30 transition-colors whitespace-nowrap">
                        Endpoint Ekle
                    </button>
                </div>

                <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-100 dark:border-neutral-800">
                        <h3 className="font-bold text-gray-900 dark:text-white">Aktif Endpointler</h3>
                    </div>
                    <div className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {webhooks.map((hook) => (
                            <div key={hook.id} className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors group">
                                <div className="flex items-start space-x-4 mb-4 md:mb-0 w-full md:w-auto">
                                    <div className={`mt-1 p-2 rounded-lg ${hook.success ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400'}`}>
                                        <Terminal className="w-5 h-5" />
                                    </div>
                                    <div className="min-w-0">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <span className="font-mono text-sm font-bold text-gray-900 dark:text-white truncate max-w-[200px] md:max-w-md block">{hook.url}</span>
                                            <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 cursor-pointer" />
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs">
                                            <span className="bg-gray-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-300 font-mono">
                                                {hook.event}
                                            </span>
                                            <span className="text-gray-400">Last Status: {hook.status}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
                                    <button className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-xs font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center">
                                        <RefreshCw className="w-3 h-3 mr-2" /> Test Et
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-black dark:hover:text-white rounded-lg border border-transparent hover:border-gray-200 dark:hover:border-neutral-700 transition-all">
                                        <Shield className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}

    </div>
  );
};

export default IntegrationsPage;
