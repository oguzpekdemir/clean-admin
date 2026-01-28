
import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

const FaqPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
      { q: 'CleanAdmin Panel nasıl kurulur?', a: 'Panel kurulumu oldukça basittir. İndirdiğiniz dosyaları sunucunuza yükleyin ve config dosyasındaki veritabanı ayarlarını yapın.' },
      { q: 'Ödeme yöntemleri nelerdir?', a: 'Kredi kartı, banka havalesi ve kripto para ile ödeme kabul ediyoruz. Tüm ödemeler Stripe ve iyzico altyapısı ile güvence altındadır.' },
      { q: 'Faturamı nasıl alabilirim?', a: 'Ödeme işleminden hemen sonra faturanız e-posta adresinize gönderilir. Ayrıca panel üzerinden "Fatura" sayfasına giderek geçmiş faturalarınızı indirebilirsiniz.' },
      { q: 'Üyelik paketimi değiştirebilir miyim?', a: 'Evet, dilediğiniz zaman Profil > Ayarlar > Abonelik sekmesinden paketinizi yükseltebilir veya düşürebilirsiniz.' },
      { q: 'API desteği var mı?', a: 'Kurumsal (Ajans) paketlerimizde tam kapsamlı REST API desteği sunulmaktadır. Dokümantasyon sayfasından detaylara ulaşabilirsiniz.' },
  ];

  const filteredFaqs = faqs.filter(f => f.q.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in py-8">
        
        <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto text-blue-600 dark:text-blue-400 mb-6">
                <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Nasıl yardımcı olabiliriz?</h2>
            <p className="text-gray-500 dark:text-gray-400">Sık sorulan soruları aşağıda bulabilir veya destek ekibimize yazabilirsiniz.</p>
            
            <div className="relative max-w-lg mx-auto mt-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                    type="text" 
                    placeholder="Bir soru arayın..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-2xl shadow-sm text-sm focus:ring-2 focus:ring-black dark:focus:ring-white outline-none dark:text-white"
                />
            </div>
        </div>

        <div className="space-y-4 mt-8">
            {filteredFaqs.length > 0 ? filteredFaqs.map((faq, idx) => (
                <div 
                    key={idx} 
                    className="bg-white dark:bg-[#09090b] border border-gray-100 dark:border-neutral-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left"
                    >
                        <span className={`font-bold ${openIndex === idx ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                            {faq.q}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-5 pb-5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed transition-all duration-300 ${openIndex === idx ? 'block opacity-100' : 'hidden opacity-0'}`}>
                        {faq.a}
                    </div>
                </div>
            )) : (
                <div className="text-center text-gray-500 py-10">Aradığınız kriterde soru bulunamadı.</div>
            )}
        </div>

        <div className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-6 text-center mt-12">
            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Cevabı bulamadınız mı?</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.</p>
            <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">İletişime Geç</button>
        </div>

    </div>
  );
};

export default FaqPage;
