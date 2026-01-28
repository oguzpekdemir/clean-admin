
import React, { useState, useEffect } from 'react';
import { MoreVertical, Folder, Image as ImageIcon, Heart, Share2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import Modal from './Modal';
import { Skeleton } from './Skeleton';

const GalleriesPage: React.FC = () => {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | 'favorites' | 'shared'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleries, setGalleries] = useState([
    { id: 1, name: 'Stüdyo Portreleri', count: 105, size: '4.3 GB', cover: 'https://picsum.photos/400/300?random=10', liked: true, shared: false },
    { id: 2, name: 'Dış Çekimler', count: 15, size: '0.3 GB', cover: 'https://picsum.photos/400/300?random=11', liked: false, shared: true },
    { id: 3, name: 'Etkinlik Kapsamı', count: 420, size: '12.1 GB', cover: 'https://picsum.photos/400/300?random=12', liked: false, shared: false },
    { id: 4, name: 'Ürün Çekimleri', count: 65, size: '1.2 GB', cover: 'https://picsum.photos/400/300?random=13', liked: true, shared: true },
    { id: 5, name: 'Düğün: Ahmet & Ayşe', count: 850, size: '24.5 GB', cover: 'https://picsum.photos/400/300?random=14', liked: true, shared: false },
    { id: 6, name: 'Moda Haftası', count: 230, size: '8.4 GB', cover: 'https://picsum.photos/400/300?random=15', liked: false, shared: true },
    { id: 7, name: 'Yemek Fotoğrafçılığı', count: 45, size: '0.9 GB', cover: 'https://picsum.photos/400/300?random=16', liked: false, shared: false },
    { id: 8, name: 'Mimari Detaylar', count: 88, size: '2.1 GB', cover: 'https://picsum.photos/400/300?random=17', liked: true, shared: true },
  ]);

  useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1200);
      return () => clearTimeout(timer);
  }, []);

  const toggleLike = (id: number) => {
      setGalleries(galleries.map(g => {
          if (g.id === id) {
              const newLiked = !g.liked;
              addToast(newLiked ? 'Favorilere eklendi' : 'Favorilerden çıkarıldı', 'success');
              return { ...g, liked: newLiked };
          }
          return g;
      }));
  };

  const handleShare = () => {
      addToast('Paylaşım bağlantısı kopyalandı', 'info');
  };

  const handleCreate = () => {
      const newGallery = {
          id: Date.now(),
          name: 'Yeni Galeri',
          count: 0,
          size: '0 MB',
          cover: 'https://picsum.photos/400/300?random=' + Date.now(),
          liked: false,
          shared: false
      };
      setGalleries([newGallery, ...galleries]);
      setIsModalOpen(false);
      addToast('Yeni galeri oluşturuldu', 'success');
  };

  const filteredGalleries = galleries.filter(g => {
      if (activeTab === 'favorites') return g.liked;
      if (activeTab === 'shared') return g.shared;
      return true;
  });

  if (isLoading) {
      return (
        <div className="space-y-8 animate-fade-in">
           <div className="flex flex-col sm:flex-row justify-between gap-4">
              <Skeleton className="w-64 h-10 rounded-xl" />
              <div className="flex space-x-3">
                  <Skeleton className="w-16 h-6" />
                  <Skeleton className="w-32 h-6" />
              </div>
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1,2,3,4,5,6,7,8].map(i => (
                 <div key={i} className="bg-white dark:bg-[#09090b] rounded-3xl p-3 shadow-sm border border-gray-100 dark:border-neutral-800">
                    <Skeleton className="h-48 rounded-2xl mb-3" />
                    <div className="px-2 pb-2 space-y-2">
                       <div className="flex justify-between items-center">
                          <Skeleton className="w-24 h-4" />
                          <Skeleton className="w-6 h-6 rounded-full" />
                       </div>
                       <Skeleton className="w-32 h-3" />
                    </div>
                 </div>
              ))}
           </div>
        </div>
      );
  }

  return (
    <div className="space-y-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex space-x-2 bg-gray-200/50 dark:bg-neutral-900/50 p-1 rounded-xl w-fit">
                <button 
                    onClick={() => setActiveTab('all')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'all' ? 'bg-white dark:bg-[#09090b] shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                    Tümü
                </button>
                <button 
                    onClick={() => setActiveTab('favorites')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'favorites' ? 'bg-white dark:bg-[#09090b] shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                    Favoriler
                </button>
                <button 
                    onClick={() => setActiveTab('shared')}
                    className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all ${activeTab === 'shared' ? 'bg-white dark:bg-[#09090b] shadow-sm text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}
                >
                    Paylaşılanlar
                </button>
            </div>
            <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Sırala:</span>
                <select className="bg-transparent text-sm font-bold text-gray-900 dark:text-white outline-none cursor-pointer">
                    <option>En Yeni</option>
                    <option>En Eski</option>
                    <option>İsme Göre (A-Z)</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Create New Card */}
            <div 
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-dashed border-gray-300 dark:border-neutral-800 rounded-3xl h-64 flex flex-col items-center justify-center text-gray-400 dark:text-neutral-500 hover:border-black dark:hover:border-white hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all cursor-pointer group"
            >
                <div className="w-12 h-12 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-3 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                    <span className="text-2xl font-light">+</span>
                </div>
                <span className="font-semibold">Yeni Galeri Oluştur</span>
            </div>

            {filteredGalleries.map((gallery) => (
                <div key={gallery.id} className="group relative bg-white dark:bg-[#09090b] rounded-3xl p-3 shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-md transition-shadow">
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-3">
                        <img src={gallery.cover} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" alt={gallery.name} />
                        <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button 
                                onClick={(e) => { e.stopPropagation(); toggleLike(gallery.id); }}
                                className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-red-500"
                            >
                                <Heart className={`w-4 h-4 transition-colors ${gallery.liked ? 'fill-red-500 text-red-500' : ''}`} />
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); handleShare(); }}
                                className="p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-700 hover:text-blue-500"
                            >
                                <Share2 className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-medium text-white flex items-center">
                            <ImageIcon className="w-3 h-3 mr-1.5" />
                            {gallery.count}
                        </div>
                    </div>
                    <div className="px-2 pb-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white truncate pr-2">{gallery.name}</h3>
                                <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">{gallery.size} • 2 gün önce güncellendi</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                                <MoreVertical className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Hızlı Galeri Oluştur"
            footer={
                <>
                     <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                     <button onClick={handleCreate} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Oluştur</button>
                </>
            }
        >
             <div className="space-y-4">
                 <p className="text-sm text-gray-500 dark:text-neutral-400">Bu işlem varsayılan ayarlarla boş bir galeri oluşturur.</p>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Galeri Adı</label>
                    <input type="text" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" placeholder="Galeri Adı" />
                 </div>
             </div>
        </Modal>
    </div>
  );
};

export default GalleriesPage;
