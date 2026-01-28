
import React, { useState, useEffect } from 'react';
import { 
    Folder, FileText, Image, Film, Music, Download, MoreHorizontal, 
    Search, Grid, List, HardDrive, Clock, Star, Trash2, Plus, X
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import { Skeleton } from './Skeleton';

const FileManagerPage: React.FC = () => {
  const { addToast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState('files');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [files, setFiles] = useState([
      { id: 1, name: 'Proje_Raporu.pdf', type: 'PDF', size: '2.4 MB', date: 'Bugün', icon: FileText, color: 'text-red-500' },
      { id: 2, name: 'Banner_v2.png', type: 'Image', size: '4.1 MB', date: 'Dün', icon: Image, color: 'text-blue-500' },
      { id: 3, name: 'Tanıtım_Filmi.mp4', type: 'Video', size: '145 MB', date: '20 Eki', icon: Film, color: 'text-purple-500' },
      { id: 4, name: 'Toplantı_Kaydı.mp3', type: 'Audio', size: '25 MB', date: '18 Eki', icon: Music, color: 'text-amber-500' },
      { id: 5, name: 'Bütçe_2026.xlsx', type: 'Excel', size: '1.2 MB', date: '15 Eki', icon: FileText, color: 'text-emerald-500' },
      { id: 6, name: 'Logo_Pack.zip', type: 'Archive', size: '54 MB', date: '10 Eki', icon: Folder, color: 'text-gray-500' },
      { id: 7, name: 'Anasayfa.sketch', type: 'Sketch', size: '12 MB', date: '05 Eki', icon: Image, color: 'text-orange-500' },
  ]);

  useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 900);
      return () => clearTimeout(timer);
  }, []);

  const handleUpload = () => {
      setUploading(true);
      setUploadProgress(0);
      addToast('Yükleme başlatıldı...', 'info');
      
      const interval = setInterval(() => {
          setUploadProgress(prev => {
              if (prev >= 100) {
                  clearInterval(interval);
                  setUploading(false);
                  addToast('Dosya başarıyla yüklendi!', 'success');
                  const newFile = { id: Date.now(), name: 'Yeni_Dosya.png', type: 'Image', size: '1.2 MB', date: 'Şimdi', icon: Image, color: 'text-blue-500' };
                  setFiles(prevFiles => [newFile, ...prevFiles]);
                  return 0;
              }
              return prev + 10;
          });
      }, 200);
  };

  const handleDelete = (id: number) => {
      if(window.confirm('Bu dosyayı silmek istediğinize emin misiniz?')) {
          setFiles(files.filter(f => f.id !== id));
          addToast('Dosya silindi.', 'success');
      }
  };

  const filteredFiles = files.filter(f => f.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const navItems = [
    { id: 'files', icon: HardDrive, label: 'Dosyalar' },
    { id: 'recent', icon: Clock, label: 'Son İşlemler' },
    { id: 'starred', icon: Star, label: 'Favoriler' },
    { id: 'trash', icon: Trash2, label: 'Çöp Kutusu' },
  ];

  if (isLoading) {
      return (
         <div className="h-[calc(100vh-8rem)] flex gap-6 animate-fade-in">
             <Skeleton className="w-64 h-full rounded-3xl hidden md:block" />
             <div className="flex-1 space-y-6">
                 <Skeleton className="w-full h-16 rounded-3xl" />
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[1,2,3,4].map(i => <Skeleton key={i} className="h-24 rounded-2xl" />)}
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                     {[1,2,3,4,5,6,7,8,9,10].map(i => <Skeleton key={i} className="h-40 rounded-2xl" />)}
                 </div>
             </div>
         </div>
      );
  }

  return (
    <div className="h-[calc(100vh-8rem)] bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden flex flex-col md:flex-row animate-fade-in relative">
        
        {/* Upload Progress Overlay */}
        {uploading && (
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-50">
                <div className="h-full bg-blue-600 transition-all duration-200" style={{ width: `${uploadProgress}%` }}></div>
            </div>
        )}

        {/* Sidebar (Desktop) */}
        <div className="w-64 border-r border-gray-100 dark:border-neutral-800 flex-col hidden md:flex p-6">
            <button 
                onClick={handleUpload}
                disabled={uploading}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors flex items-center justify-center mb-8 disabled:opacity-50"
            >
                {uploading ? 'Yükleniyor...' : <><Plus className="w-5 h-5 mr-2" /> Yeni Yükle</>}
            </button>
            <nav className="space-y-1">
                {navItems.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => setActiveTab(item.id)}
                        className={`w-full flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.label}
                    </button>
                ))}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-neutral-800">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-gray-500">Depolama</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">75%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-xs text-gray-400">15 GB / 20 GB Kullanıldı</p>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
            {/* Mobile Tabs */}
            <div className="md:hidden flex overflow-x-auto p-4 border-b border-gray-100 dark:border-neutral-800 bg-white dark:bg-[#09090b] gap-2 no-scrollbar">
                 <button onClick={handleUpload} className="p-2 bg-blue-600 text-white rounded-lg flex-shrink-0"><Plus className="w-5 h-5" /></button>
                 {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`flex items-center px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors flex-shrink-0 ${
                            activeTab === item.id 
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                            : 'text-gray-500 bg-gray-50 dark:bg-neutral-900'
                        }`}
                    >
                        {item.label}
                    </button>
                 ))}
            </div>

            {/* Toolbar */}
            <div className="p-4 md:p-6 border-b border-gray-100 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white hidden sm:block">Dosyalarım</h2>
                <div className="flex items-center space-x-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Dosya ara..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full sm:w-64 pl-10 pr-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm outline-none dark:text-white focus:ring-1 focus:ring-blue-500 transition-shadow" 
                        />
                        {searchQuery && (
                            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                <X className="w-3 h-3" />
                            </button>
                        )}
                    </div>
                    <div className="bg-gray-100 dark:bg-neutral-900 p-1 rounded-lg flex flex-shrink-0">
                        <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-[#09090b] shadow-sm text-black dark:text-white' : 'text-gray-400'}`}><Grid className="w-4 h-4" /></button>
                        <button onClick={() => setViewMode('list')} className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white dark:bg-[#09090b] shadow-sm text-black dark:text-white' : 'text-gray-400'}`}><List className="w-4 h-4" /></button>
                    </div>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
                
                {/* Folders */}
                {activeTab === 'files' && !searchQuery && (
                    <>
                        <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase">Klasörler</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
                            {[
                                { id: 1, name: 'Projeler', items: 12, size: '2.4 GB', color: 'bg-blue-500' },
                                { id: 2, name: 'Tasarım', items: 8, size: '1.1 GB', color: 'bg-purple-500' },
                                { id: 3, name: 'Belgeler', items: 45, size: '500 MB', color: 'bg-amber-500' },
                                { id: 4, name: 'Medya', items: 120, size: '12 GB', color: 'bg-emerald-500' },
                            ].map((folder) => (
                                <div key={folder.id} className="p-3 md:p-4 bg-gray-50 dark:bg-neutral-900/50 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:border-blue-200 dark:hover:border-blue-800 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-start mb-2 md:mb-3">
                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl ${folder.color} bg-opacity-10 flex items-center justify-center text-current`}>
                                            <Folder className={`w-4 h-4 md:w-5 md:h-5 ${folder.color.replace('bg-', 'text-')}`} />
                                        </div>
                                        <button className="opacity-0 group-hover:opacity-100 transition-opacity"><MoreHorizontal className="w-5 h-5 text-gray-400" /></button>
                                    </div>
                                    <h4 className="font-bold text-gray-900 dark:text-white text-xs md:text-sm truncate">{folder.name}</h4>
                                    <div className="flex justify-between mt-1 text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                                        <span>{folder.items} öğe</span>
                                        <span className="hidden sm:inline">{folder.size}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* Files */}
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4 uppercase">
                    {searchQuery ? 'Arama Sonuçları' : 'Son Dosyalar'}
                </h3>
                
                {filteredFiles.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">Dosya bulunamadı.</div>
                ) : viewMode === 'grid' ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                        {filteredFiles.map((file) => (
                            <div key={file.id} className="group p-3 md:p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 hover:shadow-lg hover:-translate-y-1 transition-all bg-white dark:bg-[#09090b] cursor-pointer relative">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleDelete(file.id); }}
                                    className="absolute top-2 right-2 p-1.5 bg-white dark:bg-black rounded-lg md:opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10 hover:text-rose-500 text-gray-400"
                                >
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                                <div className="h-24 md:h-32 bg-gray-50 dark:bg-neutral-900 rounded-xl mb-3 flex items-center justify-center relative overflow-hidden">
                                     <file.icon className={`w-8 h-8 md:w-12 md:h-12 ${file.color} opacity-80`} />
                                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                         <Download className="w-6 h-6 text-white" />
                                     </div>
                                </div>
                                <h4 className="font-bold text-xs md:text-sm text-gray-900 dark:text-white truncate" title={file.name}>{file.name}</h4>
                                <p className="text-[10px] md:text-xs text-gray-500 mt-1">{file.size} • {file.date}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="bg-white dark:bg-[#09090b] rounded-2xl border border-gray-100 dark:border-neutral-800 overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-neutral-900 text-xs text-gray-500 uppercase font-bold">
                                <tr>
                                    <th className="px-4 md:px-6 py-3">Ad</th>
                                    <th className="px-4 md:px-6 py-3 hidden sm:table-cell">Boyut</th>
                                    <th className="px-4 md:px-6 py-3 hidden md:table-cell">Tarih</th>
                                    <th className="px-4 md:px-6 py-3 text-right">İşlem</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                {filteredFiles.map((file) => (
                                    <tr key={file.id} className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors group">
                                        <td className="px-4 md:px-6 py-3 flex items-center space-x-3">
                                            <div className="p-2 bg-gray-100 dark:bg-neutral-800 rounded-lg">
                                                <file.icon className={`w-4 h-4 ${file.color}`} />
                                            </div>
                                            <div className="min-w-0">
                                                <span className="text-sm font-medium text-gray-900 dark:text-white block truncate">{file.name}</span>
                                                <span className="text-[10px] text-gray-500 sm:hidden">{file.size}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-6 py-3 text-sm text-gray-500 hidden sm:table-cell">{file.size}</td>
                                        <td className="px-4 md:px-6 py-3 text-sm text-gray-500 hidden md:table-cell">{file.date}</td>
                                        <td className="px-4 md:px-6 py-3 text-right">
                                            <div className="flex justify-end space-x-2 md:opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button className="text-gray-400 hover:text-black dark:hover:text-white"><Download className="w-4 h-4" /></button>
                                                <button onClick={() => handleDelete(file.id)} className="text-gray-400 hover:text-rose-500"><Trash2 className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    </div>
  );
};

export default FileManagerPage;
