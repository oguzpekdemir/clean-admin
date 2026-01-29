
import React, { useState } from 'react';
import { Search, Filter, FileText, User, Briefcase, ChevronRight, Download } from 'lucide-react';

const SearchResultsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const results = [
      { id: 1, type: 'user', title: 'Ahmet Yılmaz', subtitle: 'Product Designer @ Moda A.Ş.', date: 'Üye: 12 Eki 2023', img: 'https://picsum.photos/40/40?random=1' },
      { id: 2, type: 'file', title: 'Yıllık_Rapor_2026.pdf', subtitle: 'Finans / Raporlar', date: '2.4 MB • Dün', icon: FileText, color: 'text-red-500' },
      { id: 3, type: 'project', title: 'Web Sitesi Yenileme', subtitle: 'Devam Ediyor • %75 Tamamlandı', date: 'Teslim: 15 Kas', icon: Briefcase, color: 'text-purple-500' },
      { id: 4, type: 'user', title: 'Ayşe Demir', subtitle: 'Frontend Developer', date: 'Üye: 05 Eyl 2023', img: 'https://picsum.photos/40/40?random=2' },
      { id: 5, type: 'file', title: 'Logo_Pack_Final.zip', subtitle: 'Tasarım / Varlıklar', date: '54 MB • 20 Eki', icon: FileText, color: 'text-blue-500' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-20">
        
        {/* Search Header */}
        <div className="bg-white dark:bg-[#09090b] p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input 
                    type="text" 
                    defaultValue="Yıllık Rapor"
                    className="w-full pl-14 pr-4 py-4 text-lg bg-gray-50 dark:bg-neutral-900 border-none rounded-2xl focus:ring-2 focus:ring-black dark:focus:ring-white outline-none dark:text-white transition-all"
                />
            </div>
            
            <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar">
                <span className="text-sm font-bold text-gray-500 dark:text-gray-400 whitespace-nowrap">Filtrele:</span>
                {['Tümü', 'Kullanıcılar', 'Dosyalar', 'Projeler'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab === 'Tümü' ? 'all' : tab.toLowerCase())}
                        className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${
                            (tab === 'Tümü' && activeTab === 'all') || tab.toLowerCase().includes(activeTab)
                            ? 'bg-black dark:bg-white text-white dark:text-black'
                            : 'bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-800'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        <p className="text-sm text-gray-500 dark:text-neutral-400 px-2">"Yıllık Rapor" için yaklaşık <strong>5</strong> sonuç bulundu (0.24 saniye)</p>

        {/* Results List */}
        <div className="space-y-4">
            {results.map((item) => (
                <div key={item.id} className="bg-white dark:bg-[#09090b] p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-neutral-700 transition-all cursor-pointer group">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            {item.type === 'user' ? (
                                <img src={item.img} className="w-12 h-12 rounded-full border-2 border-gray-100 dark:border-neutral-800" alt={item.title} />
                            ) : (
                                <div className={`w-12 h-12 rounded-xl bg-gray-50 dark:bg-neutral-900 flex items-center justify-center ${item.color}`}>
                                    {item.icon && <item.icon className="w-6 h-6" />}
                                </div>
                            )}
                            <div>
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-sm text-gray-500 dark:text-neutral-400">
                                    {item.subtitle} <span className="mx-2 text-gray-300">•</span> <span className="text-xs">{item.date}</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            {item.type === 'file' && (
                                <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-400 hover:text-black dark:hover:text-white mr-2">
                                    <Download className="w-5 h-5" />
                                </button>
                            )}
                            <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-500" />
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center pt-8">
            <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-xl bg-black dark:bg-white text-white dark:text-black font-bold flex items-center justify-center shadow-lg">1</button>
                <button className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800">2</button>
                <button className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800">3</button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>
                <button className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-300 font-bold flex items-center justify-center hover:bg-gray-100 dark:hover:bg-neutral-800">Next</button>
            </div>
        </div>
    </div>
  );
};

export default SearchResultsPage;
