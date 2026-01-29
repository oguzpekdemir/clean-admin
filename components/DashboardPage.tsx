
import React, { useState, useEffect } from 'react';
import StatsSection from './StatsSection';
import RecentGalleries from './RecentGalleries';
import ShootsTable from './ShootsTable';
import { ViewType } from '../App';
import Modal from './Modal';
import { useToast } from '../context/ToastContext';
import { Skeleton, SkeletonStatCard, SkeletonWidget } from './Skeleton';
import { MockService, ChartData } from '../services'; // Import Service
import { 
    UploadCloud, 
    Calendar, 
    MoreHorizontal, 
    CheckSquare, 
    PieChart, 
    HardDrive,
    ArrowUpRight,
    FileImage,
    Film,
    File
} from 'lucide-react';

interface DashboardPageProps {
  onNavigate?: (view: ViewType) => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [tasks, setTasks] = useState<any[]>([]);
  const { addToast } = useToast();
  
  // Fetch data from "Backend"
  useEffect(() => {
      const loadData = async () => {
          setIsLoading(true);
          try {
              const [cData, tData] = await Promise.all([
                  MockService.getRevenueChartData(),
                  MockService.getTasks()
              ]);
              setChartData(cData);
              setTasks(tData);
          } catch (error) {
              addToast('Veri yüklenirken hata oluştu', 'error');
          } finally {
              setIsLoading(false);
          }
      };
      loadData();
  }, [addToast]);

  const toggleTask = (id: number) => {
      setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handleCreateGallery = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
        setIsGalleryModalOpen(false);
        addToast('Yeni galeri başarıyla oluşturuldu!', 'success');
        if(onNavigate) onNavigate('galleries');
    }, 500);
  };

  if (isLoading) {
      return (
          <div className="space-y-6 animate-fade-in">
              <div className="flex justify-between items-center">
                  <div className="space-y-2">
                      <Skeleton className="h-8 w-48" />
                      <Skeleton className="h-4 w-64" />
                  </div>
                  <div className="flex space-x-3">
                      <Skeleton className="h-10 w-32 rounded-xl" />
                      <Skeleton className="h-10 w-32 rounded-xl" />
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[1,2,3,4].map(i => <SkeletonStatCard key={i} />)}
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                  <div className="xl:col-span-2 space-y-6">
                      <SkeletonWidget height="h-72" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[1,2,3,4].map(i => <Skeleton className="h-48 rounded-3xl" key={i} />)}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                          <Skeleton className="h-40 rounded-3xl" />
                          <Skeleton className="h-40 rounded-3xl" />
                      </div>
                      <SkeletonWidget height="h-96" />
                  </div>
                  <div className="space-y-6">
                      <Skeleton className="h-80 rounded-3xl" />
                      <Skeleton className="h-64 rounded-3xl" />
                      <Skeleton className="h-48 rounded-3xl" />
                  </div>
              </div>
          </div>
      );
  }

  return (
    <div className="space-y-6 animate-fade-in">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Panel Genel Bakış</h1>
                <p className="text-gray-500 dark:text-neutral-400 text-sm mt-1">Hoşgeldin Oğuz, bugün işler yolunda görünüyor.</p>
            </div>
            <div className="flex items-center space-x-3">
                <button 
                    onClick={() => onNavigate && onNavigate('calendar')}
                    className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-neutral-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center transition-colors"
                >
                    <Calendar className="w-4 h-4 mr-2" />
                    Bu Hafta
                </button>
                <button 
                    onClick={() => setIsGalleryModalOpen(true)}
                    className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 flex items-center shadow-lg shadow-black/20 dark:shadow-white/10 transition-colors"
                >
                    <UploadCloud className="w-4 h-4 mr-2" />
                    Hızlı Yükle
                </button>
            </div>
        </div>

        {/* Stats Row */}
        <StatsSection />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            {/* Main Content Area (2/3) */}
            <div className="xl:col-span-2 space-y-6">
                
                {/* Performance Chart Widget (CSS Only) */}
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden cursor-pointer" onClick={() => onNavigate && onNavigate('analytics')}>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h2 className="text-lg font-bold text-gray-900 dark:text-white">Yıllık Performans Analizi</h2>
                            <div className="flex items-center space-x-2 mt-1">
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">₺842.000</span>
                                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-0.5 rounded-lg">+24%</span>
                            </div>
                        </div>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg">
                            <MoreHorizontal className="w-5 h-5 text-gray-400" />
                        </button>
                    </div>

                    {/* CSS Bar Chart with horizontal scroll */}
                    <div className="overflow-x-auto pb-2">
                        <div className="h-48 flex items-end justify-between space-x-2 sm:space-x-4 pt-8 min-w-[500px]">
                            {chartData?.values.map((h, i) => (
                                <div key={i} className="flex-1 flex flex-col items-center group cursor-pointer relative">
                                    <div className="relative w-full flex items-end justify-center h-40 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                                        <div 
                                            className="w-full bg-black dark:bg-white group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300 rounded-xl flex items-start justify-center pt-2 overflow-hidden" 
                                            style={{ height: `${h}%` }}
                                        >
                                            <span className="text-[10px] font-bold text-white dark:text-black group-hover:text-white dark:group-hover:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                {h}%
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 dark:text-neutral-500 mt-2 font-medium">
                                        {chartData.labels[i]}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recent Galleries Component */}
                <div className="relative">
                    <RecentGalleries />
                    {/* Overlay button to simulate navigation if component doesn't support it directly */}
                    <div className="absolute top-0 right-0 p-1">
                         <button onClick={() => onNavigate && onNavigate('galleries')} className="text-sm font-semibold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">Tümünü Gör</button>
                    </div>
                </div>

                {/* Active Projects Status */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm cursor-pointer hover:border-blue-200 dark:hover:border-blue-900 transition-colors" onClick={() => onNavigate && onNavigate('project')}>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                                <PieChart className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-xs font-bold bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-neutral-300 px-2 py-1 rounded-lg">Devam Ediyor</span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Düğün Sezonu Paketi</h3>
                        <p className="text-xs text-gray-500 dark:text-neutral-400 mb-4">42/50 Çekim tamamlandı</p>
                        <div className="w-full bg-gray-100 dark:bg-neutral-900 rounded-full h-2">
                            <div className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" style={{ width: '84%' }}></div>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm cursor-pointer hover:border-purple-200 dark:hover:border-purple-900 transition-colors" onClick={() => onNavigate && onNavigate('file-manager')}>
                         <div className="flex justify-between items-start mb-4">
                            <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                                <UploadCloud className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                             <span className="text-xs font-bold bg-gray-100 dark:bg-neutral-900 text-gray-600 dark:text-neutral-300 px-2 py-1 rounded-lg">Yükleniyor</span>
                        </div>
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">E-Ticaret Ürünleri</h3>
                        <p className="text-xs text-gray-500 dark:text-neutral-400 mb-4">120GB / 500GB Yüklendi</p>
                        <div className="w-full bg-gray-100 dark:bg-neutral-900 rounded-full h-2">
                            <div className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full" style={{ width: '24%' }}></div>
                        </div>
                    </div>
                </div>
            
                {/* Shoots Table Import */}
                <div className="relative">
                    <div className="absolute top-0 right-0 z-10 p-4">
                        <button onClick={() => onNavigate && onNavigate('shoots')} className="text-sm font-semibold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">Tümünü Gör</button>
                    </div>
                    <ShootsTable />
                </div>
            </div>

            {/* Right Sidebar Area (1/3) */}
            <div className="space-y-6">
                
                {/* Storage Widget */}
                <div className="bg-black dark:bg-[#09090b] dark:border dark:border-neutral-800 text-white p-6 rounded-3xl shadow-xl shadow-black/10 dark:shadow-none relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                    
                    <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-white/20 dark:bg-white/10 rounded-lg">
                                <HardDrive className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold">Depolama</span>
                        </div>
                        <span className="text-sm font-medium opacity-80">2TB Plan</span>
                    </div>

                    <div className="mb-2 relative z-10">
                        <span className="text-3xl font-bold">1.4 TB</span>
                        <span className="text-sm opacity-60 ml-2">/ 2 TB Kullanıldı</span>
                    </div>
                    
                    <div className="w-full bg-white/20 dark:bg-white/10 rounded-full h-3 mb-6 relative z-10">
                        <div className="bg-white h-3 rounded-full" style={{ width: '70%' }}></div>
                    </div>

                    <div className="space-y-3 relative z-10">
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <FileImage className="w-4 h-4 mr-2 opacity-70" />
                                <span>Görseller (RAW+JPG)</span>
                            </div>
                            <span className="opacity-70">850 GB</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <Film className="w-4 h-4 mr-2 opacity-70" />
                                <span>Video Projeleri</span>
                            </div>
                            <span className="opacity-70">420 GB</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center">
                                <File className="w-4 h-4 mr-2 opacity-70" />
                                <span>Belgeler</span>
                            </div>
                            <span className="opacity-70">130 GB</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => onNavigate && onNavigate('pricing')}
                        className="w-full mt-6 py-3 bg-white text-black rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors relative z-10"
                    >
                        Alanı Yükselt
                    </button>
                </div>

                {/* To-Do List Widget */}
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-gray-900 dark:text-white">Günlük Görevler</h3>
                        <div className="bg-gray-100 dark:bg-neutral-900 text-xs font-bold px-2 py-1 rounded-lg text-gray-600 dark:text-gray-300">
                            {tasks.filter(t => t.completed).length}/{tasks.length}
                        </div>
                    </div>
                    
                    <div className="space-y-3">
                        {tasks.map((task) => (
                            <div 
                                key={task.id} 
                                onClick={() => toggleTask(task.id)}
                                className={`flex items-start space-x-3 p-3 rounded-xl cursor-pointer transition-all ${task.completed ? 'bg-gray-50 dark:bg-neutral-900/50 opacity-60' : 'hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                            >
                                <div className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-colors ${task.completed ? 'bg-black dark:bg-white border-black dark:border-white text-white dark:text-black' : 'border-gray-300 dark:border-neutral-600'}`}>
                                    {task.completed && <CheckSquare className="w-3.5 h-3.5" />}
                                </div>
                                <div className="flex-1">
                                    <p className={`text-sm font-medium ${task.completed ? 'line-through text-gray-500 dark:text-neutral-500' : 'text-gray-800 dark:text-gray-200'}`}>
                                        {task.text}
                                    </p>
                                    <span className={`text-[10px] px-1.5 py-0.5 rounded mt-1.5 inline-block
                                        ${task.tag === 'Acil' ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400' : 
                                          task.tag === 'Finans' ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400' : 
                                          'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'}
                                    `}>
                                        {task.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button 
                        onClick={() => onNavigate && onNavigate('kanban')}
                        className="w-full mt-4 py-2 border border-dashed border-gray-300 dark:border-neutral-700 rounded-xl text-xs font-bold text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-colors flex items-center justify-center"
                    >
                        + Yeni Görev Ekle
                    </button>
                </div>

                {/* Premium Support / Ad */}
                <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-6 rounded-3xl text-white shadow-lg">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        <ArrowUpRight className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Pro Analitikler</h3>
                    <p className="text-sm opacity-90 mb-4 leading-relaxed">
                        Müşteri davranışlarını ve galeri etkileşimlerini detaylı analiz edin.
                    </p>
                    <button 
                        onClick={() => onNavigate && onNavigate('analytics')}
                        className="text-sm font-bold bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        Raporu İncele
                    </button>
                </div>

            </div>
        </div>

        {/* Create Gallery Modal (Reused) */}
        <Modal
            isOpen={isGalleryModalOpen}
            onClose={() => setIsGalleryModalOpen(false)}
            title="Yeni Galeri Oluştur"
            footer={
                <>
                    <button onClick={() => setIsGalleryModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                    <button onClick={handleCreateGallery} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Oluştur</button>
                </>
            }
        >
            <form id="create-gallery-form" className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Galeri Adı</label>
                    <input type="text" placeholder="Örn: 2026 Yaz Kreasyonu" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white outline-none dark:text-white" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Müşteri</label>
                    <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white outline-none dark:text-white">
                        <option>Müşteri Seçin...</option>
                        <option>Moda A.Ş.</option>
                        <option>Ahmet & Ayşe</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Kapak Fotoğrafı</label>
                    <div className="border-2 border-dashed border-gray-200 dark:border-neutral-700 rounded-xl p-6 text-center hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <span className="text-xs text-gray-500 dark:text-neutral-400">Sürükle bırak veya seç</span>
                    </div>
                </div>
            </form>
        </Modal>
    </div>
  );
};

export default DashboardPage;
