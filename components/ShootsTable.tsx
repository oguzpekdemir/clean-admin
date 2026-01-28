
import React from 'react';
import { Search, ChevronDown, Trash2, Share2, MoreHorizontal, ExternalLink } from 'lucide-react';

const ShootsTable: React.FC = () => {
  const shoots = Array(4).fill({
    name: 'Stüdyo Portreleri',
    files: '48 fotoğraf',
    shared: { name: 'John Doe', avatar: 'https://picsum.photos/24/24?random=50' },
    status: 'Gönderildi',
    lastActivity: 'Dün',
  });

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Son Çekimler</h2>
      </div>

      <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden transition-colors">
        {/* Table Filters */}
        <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="relative flex-1 w-full md:w-auto min-w-[240px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Çalışan ara..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white outline-none dark:text-white placeholder-gray-500"
            />
          </div>
          
          <div className="flex items-center space-x-1 text-sm font-medium border border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 rounded-xl px-1 py-1 overflow-x-auto w-full md:w-auto no-scrollbar">
            <button className="px-4 py-1.5 rounded-lg text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Gönderildi</button>
            <button className="px-4 py-1.5 rounded-lg text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors whitespace-nowrap">Başarısız</button>
            <button className="px-4 py-1.5 rounded-lg bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm transition-colors whitespace-nowrap">Beklemede</button>
            <ChevronDown className="w-4 h-4 text-gray-400 mx-1 hidden sm:block" />
          </div>

          <div className="ml-auto flex items-center space-x-2 w-full md:w-auto justify-end">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-900 text-gray-700 dark:text-neutral-300 transition-colors whitespace-nowrap">
              <span>Son Eklenen</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* The Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-50 dark:border-neutral-800 text-[10px] uppercase tracking-wider text-gray-400 dark:text-neutral-500 font-bold">
                <th className="px-6 py-4 w-12">
                   <input type="checkbox" className="rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                </th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Çekim Adı</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Dosyalar</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Paylaşılan</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Durum</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Son Aktivite</th>
                <th className="px-6 py-4 font-bold text-right whitespace-nowrap">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-neutral-800">
              {shoots.map((shoot, idx) => (
                <tr key={idx} className="group hover:bg-gray-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white text-sm whitespace-nowrap">{shoot.name}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-neutral-400 whitespace-nowrap">
                    <span className="bg-gray-100 dark:bg-neutral-900 px-3 py-1 rounded-full text-xs font-medium">{shoot.files}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <img src={shoot.shared.avatar} className="w-6 h-6 rounded-full" alt="" />
                      <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">{shoot.shared.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-emerald-500 font-semibold text-xs border border-emerald-100 dark:border-emerald-900/30 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded-lg">
                      {shoot.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-neutral-400 font-medium whitespace-nowrap">{shoot.lastActivity}</td>
                  <td className="px-6 py-4 text-right whitespace-nowrap">
                    <div className="flex items-center justify-end space-x-3 text-gray-300 dark:text-neutral-600">
                       <button className="hover:text-rose-500 dark:hover:text-rose-400 transition-colors">
                         <Trash2 className="w-4 h-4" />
                       </button>
                       <button className="hover:text-black dark:hover:text-white transition-colors">
                         <Share2 className="w-4 h-4" />
                       </button>
                       <button className="hover:text-black dark:hover:text-white transition-colors">
                         <ExternalLink className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ShootsTable;
