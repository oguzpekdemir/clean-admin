
import React, { useState, useEffect } from 'react';
import { Search, Filter, Download, Trash2, Share2, Calendar, MapPin, Plus } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import Modal from './Modal';
import { Skeleton, SkeletonTable } from './Skeleton';

interface ShootData {
    id: number;
    name: string;
    client: string;
    date: string;
    location: string;
    count: number;
    status: 'Gönderildi' | 'Beklemede' | 'Düzenleniyor' | 'Başarısız';
    type: string;
}

const ShootsPage: React.FC = () => {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Tümü');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shoots, setShoots] = useState<ShootData[]>([
    { id: 1, name: 'Stüdyo Portreleri', client: 'John Doe', date: '20 Eki, 2026', location: 'İstanbul Stüdyo', count: 48, status: 'Gönderildi', type: 'Portre' },
    { id: 2, name: 'Yaz Koleksiyonu', client: 'Moda A.Ş.', date: '18 Eki, 2026', location: 'Çeşme Sahil', count: 124, status: 'Beklemede', type: 'Moda' },
    { id: 3, name: 'Düğün Hikayesi', client: 'Ahmet & Ayşe', date: '15 Eki, 2026', location: 'Swissotel', count: 450, status: 'Düzenleniyor', type: 'Düğün' },
    { id: 4, name: 'Ürün Çekimi v2', client: 'Tech Start', date: '12 Eki, 2026', location: 'Ofis', count: 32, status: 'Gönderildi', type: 'Ürün' },
    { id: 5, name: 'Kurumsal Başlıklar', client: 'Holding A.Ş', date: '10 Eki, 2026', location: 'Maslak', count: 15, status: 'Başarısız', type: 'Kurumsal' },
    { id: 6, name: 'Sonbahar Kataloğu', client: 'Giyim Markası', date: '05 Eki, 2026', location: 'Belgrad Ormanı', count: 210, status: 'Gönderildi', type: 'Moda' },
  ]);

  useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 800);
      return () => clearTimeout(timer);
  }, []);

  const handleDelete = (id: number) => {
      if(window.confirm('Bu çekimi silmek istediğinize emin misiniz?')) {
          setShoots(shoots.filter(s => s.id !== id));
          addToast('Çekim silindi.', 'error');
      }
  };

  const handleCreate = () => {
      const newShoot: ShootData = {
          id: Date.now(),
          name: 'Yeni Çekim Taslağı',
          client: 'Yeni Müşteri',
          date: 'Bugün',
          location: 'Belirlenmedi',
          count: 0,
          status: 'Beklemede',
          type: 'Genel'
      };
      setShoots([newShoot, ...shoots]);
      setIsModalOpen(false);
      addToast('Yeni çekim oluşturuldu', 'success');
  };

  const handleAction = (action: string) => {
      addToast(`${action} işlemi başlatıldı...`, 'info');
  };

  const filteredShoots = shoots.filter(shoot => {
      const matchesSearch = shoot.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            shoot.client.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterType === 'Tümü' || shoot.type === filterType;
      return matchesSearch && matchesFilter;
  });

  if (isLoading) {
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                  <Skeleton className="w-96 h-12 rounded-2xl" />
                  <div className="flex space-x-2">
                      <Skeleton className="w-24 h-12 rounded-xl" />
                      <Skeleton className="w-24 h-12 rounded-xl" />
                      <Skeleton className="w-32 h-12 rounded-xl" />
                  </div>
              </div>
              <SkeletonTable rows={8} />
          </div>
      );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Controls */}
      <div className="bg-white dark:bg-[#09090b] p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Çekim, müşteri veya konum ara..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white dark:placeholder-neutral-500"
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="relative group flex-shrink-0">
                <button className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 whitespace-nowrap">
                    <Filter className="w-4 h-4" />
                    <span>{filterType}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#09090b] rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 hidden group-hover:block z-10 p-1">
                    {['Tümü', 'Moda', 'Düğün', 'Ürün', 'Kurumsal'].map(type => (
                        <button 
                            key={type}
                            onClick={() => setFilterType(type)}
                            className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300"
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            
            <button 
                onClick={() => handleAction('Sıralama')}
                className="flex items-center space-x-2 px-4 py-2.5 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-neutral-300 whitespace-nowrap flex-shrink-0"
            >
                <Calendar className="w-4 h-4" />
                <span>Tarih</span>
            </button>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center space-x-2 px-4 py-2.5 bg-black dark:bg-white text-white dark:text-black border border-black dark:border-white rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 whitespace-nowrap shadow-sm flex-shrink-0"
            >
                <Plus className="w-4 h-4" />
                <span>Yeni Çekim</span>
            </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 text-[10px] uppercase tracking-wider text-gray-500 dark:text-neutral-500 font-bold">
                <th className="px-6 py-4 w-12">
                   <input type="checkbox" className="rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900 w-4 h-4" />
                </th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Çekim Detayları</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Müşteri</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Tarih & Konum</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Dosya</th>
                <th className="px-6 py-4 font-bold whitespace-nowrap">Durum</th>
                <th className="px-6 py-4 font-bold text-right whitespace-nowrap">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-neutral-800">
              {filteredShoots.length > 0 ? filteredShoots.map((shoot) => (
                <tr key={shoot.id} className="group hover:bg-gray-50/80 dark:hover:bg-neutral-900/30 transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900 w-4 h-4" />
                  </td>
                  <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 dark:text-white text-sm whitespace-nowrap">{shoot.name}</span>
                        <span className="text-xs text-gray-400 mt-0.5">{shoot.type}</span>
                      </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-neutral-300 border border-gray-100 dark:border-neutral-800">
                        {shoot.client.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-700 dark:text-neutral-300 whitespace-nowrap">{shoot.client}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-xs text-gray-500 dark:text-neutral-500 whitespace-nowrap">
                            <Calendar className="w-3 h-3 mr-1.5" />
                            {shoot.date}
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-neutral-500 whitespace-nowrap">
                            <MapPin className="w-3 h-3 mr-1.5" />
                            {shoot.location}
                        </div>
                      </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-100 dark:bg-neutral-900 px-3 py-1 rounded-lg text-xs font-medium text-gray-600 dark:text-neutral-400 whitespace-nowrap">{shoot.count}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border whitespace-nowrap
                        ${shoot.status === 'Gönderildi' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' : 
                          shoot.status === 'Beklemede' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30' :
                          shoot.status === 'Düzenleniyor' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30' :
                          'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/30'}
                    `}>
                      {shoot.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 text-gray-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button onClick={() => handleAction('İndirme')} className="p-2 hover:bg-white dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:shadow-sm rounded-lg transition-all" title="İndir">
                         <Download className="w-4 h-4" />
                       </button>
                       <button onClick={() => handleAction('Paylaşma')} className="p-2 hover:bg-white dark:hover:bg-neutral-800 hover:text-black dark:hover:text-white hover:shadow-sm rounded-lg transition-all" title="Paylaş">
                         <Share2 className="w-4 h-4" />
                       </button>
                       <button onClick={() => handleDelete(shoot.id)} className="p-2 hover:bg-white dark:hover:bg-neutral-800 hover:text-rose-500 hover:shadow-sm rounded-lg transition-all" title="Sil">
                         <Trash2 className="w-4 h-4" />
                       </button>
                    </div>
                  </td>
                </tr>
              )) : (
                  <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500 dark:text-neutral-500">
                          Sonuç bulunamadı.
                      </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-neutral-500">Toplam <span className="font-bold text-gray-900 dark:text-white">{filteredShoots.length}</span> çekim gösteriliyor</span>
            <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-500 dark:text-neutral-400 disabled:opacity-50">Önceki</button>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200">Sonraki</button>
            </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Yeni Çekim Ekle"
        footer={
            <>
                <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                <button onClick={handleCreate} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Kaydet</button>
            </>
        }
      >
          <div className="space-y-4">
              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Çekim Adı</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" placeholder="Çekim Adı Giriniz" />
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Müşteri</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" placeholder="Müşteri Adı" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tarih</label>
                    <input type="date" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tür</label>
                    <select className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white">
                        <option>Düğün</option>
                        <option>Moda</option>
                        <option>Ürün</option>
                    </select>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
  );
};

export default ShootsPage;
