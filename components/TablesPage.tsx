
import React from 'react';
import { MoreHorizontal, Edit, Trash2, Eye, Filter, ArrowUp, ArrowDown, Download } from 'lucide-react';

const TablesPage: React.FC = () => {
  const users = [
    { id: 1, name: 'Oğuz Pekdemir', email: 'oguz@cleanadmin.online', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Ayşe Demir', email: 'ayse@test.com', role: 'Editör', status: 'Beklemede' },
    { id: 3, name: 'Mehmet Can', email: 'mehmet@test.com', role: 'Kullanıcı', status: 'Pasif' },
    { id: 4, name: 'Zeynep Kaya', email: 'zeynep@test.com', role: 'Kullanıcı', status: 'Aktif' },
  ];

  const transactions = [
      { id: 'TRX-9871', date: '20 Eki 2026', name: 'Spotify Abonelik', amount: '-₺39.99', status: 'Success', method: 'Visa •••• 4242' },
      { id: 'TRX-9872', date: '19 Eki 2026', name: 'Freelance Ödemesi', amount: '+₺4,250.00', status: 'Success', method: 'Havale' },
      { id: 'TRX-9873', date: '18 Eki 2026', name: 'AWS Fatura', amount: '-₺124.50', status: 'Pending', method: 'Mastercard •••• 8821' },
      { id: 'TRX-9874', date: '15 Eki 2026', name: 'Adobe CC', amount: '-₺350.00', status: 'Failed', method: 'Visa •••• 4242' },
  ];

  const advancedProjects = [
      { name: 'Web Sitesi Yenileme', client: 'Moda A.Ş.', budget: '₺45,000', deadline: '12 Kas', team: [1,2,3], progress: 75, status: 'Active' },
      { name: 'Mobil Uygulama', client: 'Tech Start', budget: '₺120,000', deadline: '30 Ara', team: [4,5], progress: 30, status: 'Risk' },
      { name: 'SEO Çalışması', client: 'Global Lojistik', budget: '₺8,500', deadline: 'Bitmiş', team: [1], progress: 100, status: 'Completed' },
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 animate-fade-in">
        
        {/* 1. Advanced Project Table */}
        <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Proje Durumları</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Aktif projelerin detaylı takibi.</p>
                </div>
                <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                        <Filter className="w-4 h-4 mr-2" /> Filtrele
                    </button>
                    <button className="flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 transition-colors">
                        <Download className="w-4 h-4 mr-2" /> Dışa Aktar
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[800px]">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-neutral-900 text-xs uppercase text-gray-500 dark:text-gray-400 font-bold border-b border-gray-100 dark:border-neutral-800">
                            <th className="px-6 py-4">Proje Adı</th>
                            <th className="px-6 py-4">Müşteri</th>
                            <th className="px-6 py-4">Takım</th>
                            <th className="px-6 py-4">Bütçe & Tarih</th>
                            <th className="px-6 py-4">İlerleme</th>
                            <th className="px-6 py-4 text-right">Durum</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {advancedProjects.map((proj, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-sm text-gray-900 dark:text-white">{proj.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{proj.client}</td>
                                <td className="px-6 py-4">
                                    <div className="flex -space-x-2">
                                        {proj.team.map((m) => (
                                            <img key={m} src={`https://picsum.photos/30/30?random=${m+20}`} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#09090b]" alt="" />
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">{proj.budget}</div>
                                    <div className="text-xs text-gray-500">{proj.deadline}</div>
                                </td>
                                <td className="px-6 py-4 w-48">
                                    <div className="flex items-center justify-between text-xs mb-1">
                                        <span className="font-bold text-gray-700 dark:text-gray-300">{proj.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                                        <div className={`h-full rounded-full ${
                                            proj.status === 'Completed' ? 'bg-emerald-500' :
                                            proj.status === 'Risk' ? 'bg-rose-500' : 'bg-blue-500'
                                        }`} style={{width: `${proj.progress}%`}}></div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        proj.status === 'Active' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                                        proj.status === 'Risk' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' :
                                        'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                                    }`}>
                                        {proj.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* 2. Financial Transactions Table */}
        <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Finansal İşlemler</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Son harcama ve gelir hareketleri.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[700px]">
                    <thead>
                        <tr className="bg-gray-50 dark:bg-neutral-900 text-xs uppercase text-gray-500 dark:text-gray-400 font-bold">
                            <th className="px-6 py-4">İşlem ID</th>
                            <th className="px-6 py-4">Tarih</th>
                            <th className="px-6 py-4">Açıklama</th>
                            <th className="px-6 py-4">Ödeme Yöntemi</th>
                            <th className="px-6 py-4 text-right">Tutar</th>
                            <th className="px-6 py-4 text-right">Durum</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                        {transactions.map((trx, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-gray-500 dark:text-gray-400">{trx.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{trx.date}</td>
                                <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">{trx.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{trx.method}</td>
                                <td className={`px-6 py-4 text-right text-sm font-bold ${trx.amount.startsWith('+') ? 'text-emerald-500' : 'text-gray-900 dark:text-white'}`}>
                                    {trx.amount}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                        trx.status === 'Success' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400' :
                                        trx.status === 'Pending' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' :
                                        'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-400'
                                    }`}>
                                        {trx.status === 'Success' ? <ArrowDown className="w-3 h-3 mr-1 rotate-180" /> : null}
                                        {trx.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

        {/* 3. Basic Users Table */}
        <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Kullanıcı Yönetimi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Sistem kullanıcıları ve yetkileri.</p>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left min-w-[600px]">
                    <thead>
                        <tr className="border-b border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900">
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">Ad Soyad</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">E-posta</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400">Rol</th>
                            <th className="px-6 py-4 text-sm font-bold text-gray-500 dark:text-gray-400 text-right">İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="border-b border-gray-50 dark:border-neutral-800 last:border-0 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{user.email}</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 text-xs font-bold text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-neutral-700">{user.role}</span>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-gray-400 hover:text-black dark:hover:text-white p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors">
                                        <MoreHorizontal className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default TablesPage;
