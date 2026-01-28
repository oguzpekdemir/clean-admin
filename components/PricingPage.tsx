
import React, { useState } from 'react';
import { Check, Star, Shield, Zap } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
        name: 'Başlangıç',
        price: billingCycle === 'monthly' ? 0 : 0,
        desc: 'Bireysel kullanıcılar ve hobi projeleri için mükemmel.',
        features: ['5 Galeri', '1GB Depolama', 'Standart Destek', 'Reklamlı', 'Topluluk Erişimi'],
        cta: 'Ücretsiz Başla',
        popular: false
    },
    {
        name: 'Profesyonel',
        price: billingCycle === 'monthly' ? 299 : 249,
        desc: 'Büyüyen işler ve profesyonel fotoğrafçılar için.',
        features: ['Sınırsız Galeri', '1TB Depolama', 'Öncelikli Destek', 'Kendi Domainin', 'Logo Kaldırma', 'Gelişmiş Analitik'],
        cta: 'Hemen Yükselt',
        popular: true
    },
    {
        name: 'Ajans',
        price: billingCycle === 'monthly' ? 999 : 849,
        desc: 'Büyük ekipler ve yüksek hacimli işlemler için.',
        features: ['Sınırsız Depolama', '7/24 Canlı Destek', 'API Erişimi', 'Özel Entegrasyon', 'Çoklu Kullanıcı (10+)', 'SLA Garantisi'],
        cta: 'İletişime Geç',
        popular: false
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 space-y-12 animate-fade-in">
        
        <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Basit ve Şeffaf Fiyatlandırma</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                Gizli ücret yok. İhtiyacınıza en uygun planı seçin ve işinizi büyütmeye başlayın.
            </p>
            
            <div className="flex items-center justify-center mt-8">
                <div className="bg-gray-100 dark:bg-neutral-900 p-1 rounded-xl flex space-x-1">
                    <button 
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${billingCycle === 'monthly' ? 'bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white' : 'text-gray-500'}`}
                    >
                        Aylık
                    </button>
                    <button 
                         onClick={() => setBillingCycle('yearly')}
                         className={`px-6 py-2 rounded-lg text-sm font-bold transition-all flex items-center ${billingCycle === 'yearly' ? 'bg-white dark:bg-neutral-800 shadow-sm text-black dark:text-white' : 'text-gray-500'}`}
                    >
                        Yıllık <span className="ml-2 text-[10px] bg-emerald-100 text-emerald-600 px-1.5 py-0.5 rounded uppercase">-20%</span>
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
                <div 
                    key={idx} 
                    className={`relative p-8 rounded-3xl flex flex-col transition-transform hover:-translate-y-2 duration-300 ${
                        plan.popular 
                        ? 'bg-black dark:bg-white text-white dark:text-black shadow-2xl scale-105 z-10' 
                        : 'bg-white dark:bg-[#09090b] border border-gray-100 dark:border-neutral-800 text-gray-900 dark:text-white shadow-sm'
                    }`}
                >
                    {plan.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                            <Star className="w-3 h-3 mr-1 fill-current" /> EN POPÜLER
                        </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-gray-300 dark:text-gray-600' : 'text-gray-500 dark:text-gray-400'}`}>{plan.desc}</p>
                    
                    <div className="mb-8">
                        <span className="text-4xl font-bold">₺{plan.price}</span>
                        <span className={`text-sm ${plan.popular ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500'}`}>/ay</span>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feat, i) => (
                            <li key={i} className="flex items-center text-sm">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${plan.popular ? 'bg-white/20 dark:bg-black/10' : 'bg-green-100 dark:bg-green-900/30'}`}>
                                    <Check className={`w-3 h-3 ${plan.popular ? 'text-white dark:text-black' : 'text-green-600 dark:text-green-400'}`} />
                                </div>
                                {feat}
                            </li>
                        ))}
                    </ul>

                    <button className={`w-full py-3.5 rounded-xl font-bold text-sm transition-colors ${
                        plan.popular
                        ? 'bg-white dark:bg-black text-black dark:text-white hover:bg-gray-100 dark:hover:bg-neutral-800'
                        : 'bg-black dark:bg-white text-white dark:text-black hover:opacity-90'
                    }`}>
                        {plan.cta}
                    </button>
                </div>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">
            <div className="p-6 bg-white dark:bg-[#09090b] rounded-2xl border border-gray-100 dark:border-neutral-800 flex items-start space-x-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400"><Shield className="w-6 h-6" /></div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Güvenli Ödeme</h4>
                    <p className="text-sm text-gray-500 mt-1">Tüm işlemleriniz 256-bit SSL şifreleme ile korunmaktadır.</p>
                </div>
            </div>
            <div className="p-6 bg-white dark:bg-[#09090b] rounded-2xl border border-gray-100 dark:border-neutral-800 flex items-start space-x-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400"><Zap className="w-6 h-6" /></div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Hızlı Kurulum</h4>
                    <p className="text-sm text-gray-500 mt-1">Ödeme sonrası hesabınız anında aktif edilir ve kullanıma hazırdır.</p>
                </div>
            </div>
            <div className="p-6 bg-white dark:bg-[#09090b] rounded-2xl border border-gray-100 dark:border-neutral-800 flex items-start space-x-4">
                <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400"><Star className="w-6 h-6" /></div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">7/24 Destek</h4>
                    <p className="text-sm text-gray-500 mt-1">Profesyonel destek ekibimiz her zaman yanınızda.</p>
                </div>
            </div>
        </div>

    </div>
  );
};

export default PricingPage;
