
import React from 'react';
import { Printer, Download, Share2, Mail } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const InvoicePage: React.FC = () => {
  const { addToast } = useToast();

  const handlePrint = () => {
      window.print();
  };

  const handleAction = (action: string) => {
      addToast(`${action} işlemi başlatıldı...`, 'info');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        
        {/* Actions Bar */}
        <div className="flex justify-end space-x-3 print:hidden">
            <button onClick={handlePrint} className="flex items-center px-4 py-2 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-900 dark:text-white transition-colors">
                <Printer className="w-4 h-4 mr-2" /> Yazdır
            </button>
            <button onClick={() => handleAction('PDF İndirme')} className="flex items-center px-4 py-2 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-900 dark:text-white transition-colors">
                <Download className="w-4 h-4 mr-2" /> PDF
            </button>
            <button onClick={() => handleAction('E-posta Gönderme')} className="flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 transition-colors">
                <Mail className="w-4 h-4 mr-2" /> Gönder
            </button>
        </div>

        {/* Invoice Paper */}
        <div className="bg-white dark:bg-[#09090b] p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-neutral-800 print:shadow-none print:border-none" id="invoice-content">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between md:items-start mb-12">
                <div>
                     <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black font-bold italic">C</div>
                        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">CleanAdmin</span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Maslak Mah. Büyükdere Cad.<br />
                        No: 123, Şişli<br />
                        İstanbul, 34398
                    </p>
                </div>
                <div className="mt-6 md:mt-0 text-right">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">FATURA</h1>
                    <p className="text-gray-500 dark:text-gray-400 font-mono">#INV-2026-001</p>
                    <div className="mt-4 text-sm">
                        <p><span className="text-gray-400">Tarih:</span> <span className="font-bold dark:text-white">20 Eki 2026</span></p>
                        <p><span className="text-gray-400">Vade:</span> <span className="font-bold dark:text-white">30 Eki 2026</span></p>
                    </div>
                </div>
            </div>

            <hr className="border-gray-100 dark:border-neutral-800 mb-12" />

            {/* Client Info */}
            <div className="mb-12">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Sayın</h3>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Ahmet Yılmaz</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Moda A.Ş.<br />
                    Nişantaşı, İstanbul<br />
                    ahmet@moda.com
                </p>
            </div>

            {/* Items Table */}
            <div className="overflow-x-auto mb-12">
                <table className="w-full text-left min-w-[500px]">
                    <thead>
                        <tr className="border-b border-gray-100 dark:border-neutral-800 text-xs uppercase text-gray-400 font-bold">
                            <th className="py-3">Hizmet / Ürün</th>
                            <th className="py-3 text-center">Miktar</th>
                            <th className="py-3 text-right">Birim Fiyat</th>
                            <th className="py-3 text-right">Toplam</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-neutral-900">
                        {[
                            { item: 'Düğün Fotoğraf Çekimi (Tam Gün)', qty: 1, price: 12500 },
                            { item: 'Drone Çekimi (4K Video)', qty: 1, price: 3500 },
                            { item: 'Panoramik Albüm Baskı', qty: 2, price: 1200 },
                            { item: 'Ekstra Düzenleme Saati', qty: 4, price: 500 },
                        ].map((row, i) => (
                            <tr key={i}>
                                <td className="py-4 text-sm font-bold text-gray-900 dark:text-white">{row.item}</td>
                                <td className="py-4 text-center text-sm text-gray-600 dark:text-gray-300">{row.qty}</td>
                                <td className="py-4 text-right text-sm text-gray-600 dark:text-gray-300">₺{row.price}</td>
                                <td className="py-4 text-right text-sm font-bold text-gray-900 dark:text-white">₺{row.qty * row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Total */}
            <div className="flex justify-end">
                <div className="w-full md:w-1/3 space-y-3">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>Ara Toplam</span>
                        <span>₺20,400</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>KDV (20%)</span>
                        <span>₺4,080</span>
                    </div>
                    <hr className="border-gray-100 dark:border-neutral-800" />
                    <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-2">
                        <span>Genel Toplam</span>
                        <span>₺24,480</span>
                    </div>
                </div>
            </div>

            {/* Footer Note */}
            <div className="mt-16 text-center text-xs text-gray-400">
                <p>Ödemeyi lütfen 30 gün içinde yukarıdaki banka hesaplarına yapınız.</p>
                <p className="mt-1">İşbirliğiniz için teşekkür ederiz.</p>
            </div>
        </div>
    </div>
  );
};

export default InvoicePage;
