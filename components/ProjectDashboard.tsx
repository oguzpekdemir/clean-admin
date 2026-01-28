
import React, { useState } from 'react';
import { Layout, Clock, CheckSquare, Users, MoreHorizontal, Paperclip, AlertCircle, BarChart, Flag, Plus } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import Modal from './Modal';

const ProjectDashboard: React.FC = () => {
    const { addToast } = useToast();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const handleCreateProject = () => {
        setIsCreateModalOpen(false);
        addToast('Yeni proje başarıyla oluşturuldu.', 'success');
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-black dark:bg-white text-white dark:text-black rounded-3xl p-6 shadow-xl relative overflow-hidden flex flex-col justify-between group cursor-pointer" onClick={() => setIsCreateModalOpen(true)}>
                     <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <div className="p-2 bg-white/20 dark:bg-black/10 rounded-lg">
                            <Plus className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-bold opacity-70 border border-white/30 dark:border-black/30 px-2 py-1 rounded">Hızlı İşlem</span>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold relative z-10">Yeni Proje</h2>
                        <p className="text-sm opacity-70 mt-1 relative z-10">Oluşturmak için tıkla</p>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-blue-600 dark:text-blue-400">
                             <Clock className="w-6 h-6" />
                         </div>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-neutral-400 text-sm font-medium">Toplam Efor</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1,240s</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600 dark:text-emerald-400">
                             <CheckSquare className="w-6 h-6" />
                         </div>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-neutral-400 text-sm font-medium">Tamamlanan</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">8 Proje</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                         <div className="p-3 bg-rose-50 dark:bg-rose-900/20 rounded-2xl text-rose-600 dark:text-rose-400">
                             <AlertCircle className="w-6 h-6" />
                         </div>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-neutral-400 text-sm font-medium">Riskli Proje</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2 Adet</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                 
                 {/* Team Workload */}
                 <div className="xl:col-span-2 bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                      <div className="flex items-center justify-between mb-6">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ekip İş Yükü & Kapasite</h3>
                          <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Detaylar</button>
                      </div>
                      <div className="space-y-6">
                          {[
                              { name: 'Tasarım Ekibi', used: 85, total: 100, color: 'bg-purple-500' },
                              { name: 'Yazılım Ekibi', used: 92, total: 100, color: 'bg-blue-500' },
                              { name: 'Pazarlama', used: 45, total: 100, color: 'bg-amber-500' },
                              { name: 'Operasyon', used: 60, total: 100, color: 'bg-emerald-500' },
                          ].map((team, idx) => (
                              <div key={idx}>
                                  <div className="flex justify-between text-sm font-bold mb-2 text-gray-700 dark:text-neutral-300">
                                      <span>{team.name}</span>
                                      <span>{team.used}%</span>
                                  </div>
                                  <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-3 overflow-hidden flex">
                                      <div className={`h-full ${team.color}`} style={{ width: `${team.used}%` }}></div>
                                      {team.used > 90 && <div className="h-full bg-rose-500 w-1 ml-auto animate-pulse"></div>} {/* Warning indicator */}
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-neutral-800 flex justify-between text-xs text-gray-500 dark:text-neutral-500">
                          <span>* Kırmızı alan aşırı yüklenmeyi ifade eder.</span>
                          <span>Toplam Kapasite: 400s/Hafta</span>
                      </div>
                 </div>

                 {/* Budget vs Actual */}
                 <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Bütçe Analizi</h3>
                      <div className="flex-1 flex flex-col justify-center items-center relative">
                           {/* Simple Donut Simulation using CSS conic-gradient */}
                           <div className="w-48 h-48 rounded-full relative" style={{ background: 'conic-gradient(#3B82F6 70%, #E5E7EB 0)' }}>
                               <div className="absolute inset-4 bg-white dark:bg-[#09090b] rounded-full flex flex-col items-center justify-center">
                                   <span className="text-gray-500 dark:text-neutral-500 text-xs font-medium">Kalan Bütçe</span>
                                   <span className="text-3xl font-bold text-gray-900 dark:text-white">30%</span>
                               </div>
                           </div>
                      </div>
                      <div className="mt-6 space-y-3">
                          <div className="flex justify-between text-sm">
                              <span className="text-gray-500 dark:text-neutral-500">Toplam Bütçe</span>
                              <span className="font-bold text-gray-900 dark:text-white">₺450,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                              <span className="text-gray-500 dark:text-neutral-500">Harcanan</span>
                              <span className="font-bold text-blue-600 dark:text-blue-500">₺315,000</span>
                          </div>
                          <div className="flex justify-between text-sm">
                              <span className="text-gray-500 dark:text-neutral-500">Kalan</span>
                              <span className="font-bold text-emerald-600 dark:text-emerald-500">₺135,000</span>
                          </div>
                      </div>
                 </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white pt-4">Aktif Projeler & Durumlar</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[
                    { title: 'Web Sitesi Yenileme', client: 'Moda A.Ş.', progress: 75, due: '5 Gün', color: 'bg-purple-600', users: [1,2,3], status: 'On Track' },
                    { title: 'Mobil Uygulama Tasarımı', client: 'Tech Start', progress: 30, due: '2 Hafta', color: 'bg-blue-600', users: [4,5], status: 'Risk' },
                    { title: 'Sosyal Medya Kampanyası', client: 'Cafe Zinciri', progress: 90, due: 'Yarın', color: 'bg-emerald-600', users: [2,6], status: 'Review' },
                    { title: 'SEO Optimizasyonu', client: 'E-Ticaret Ltd.', progress: 15, due: '1 Ay', color: 'bg-amber-600', users: [1], status: 'On Track' },
                    { title: 'Marka Kimliği', client: 'Yeni Girişim', progress: 60, due: '3 Gün', color: 'bg-rose-600', users: [3,4,5], status: 'Delayed' },
                ].map((proj, idx) => (
                    <div key={idx} className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full cursor-pointer" onClick={() => addToast(`${proj.title} detayları görüntüleniyor...`, 'info')}>
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-xs font-bold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-300 px-2 py-1 rounded-lg">{proj.client}</span>
                            <div className="flex items-center space-x-2">
                                {proj.status === 'Risk' && <AlertCircle className="w-5 h-5 text-rose-500" />}
                                <button className="hover:bg-gray-100 dark:hover:bg-neutral-800 rounded p-1"><MoreHorizontal className="w-5 h-5 text-gray-400" /></button>
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{proj.title}</h4>
                        <div className="mt-auto">
                            <div className="flex justify-between text-xs font-bold mb-1.5 mt-4">
                                <span className="text-gray-600 dark:text-neutral-300">İlerleme</span>
                                <span className="text-gray-900 dark:text-white">{proj.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2">
                                <div className={`h-2 rounded-full ${proj.color}`} style={{width: `${proj.progress}%`}}></div>
                            </div>

                            <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-50 dark:border-neutral-800">
                                <div className="flex -space-x-2">
                                    {proj.users.map(u => (
                                        <img key={u} src={`https://picsum.photos/30/30?random=${u+20}`} className="w-8 h-8 rounded-full border-2 border-white dark:border-black" alt="User" />
                                    ))}
                                </div>
                                <div className="flex items-center text-xs text-gray-500 dark:text-neutral-400 space-x-3">
                                    <span className="flex items-center"><Flag className="w-3.5 h-3.5 mr-1" /> Milestone</span>
                                    <span className={`font-bold ${proj.due === 'Yarın' ? 'text-rose-500' : ''}`}>{proj.due}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Create Project Modal */}
            <Modal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                title="Yeni Proje Oluştur"
                footer={
                    <>
                        <button onClick={() => setIsCreateModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                        <button onClick={handleCreateProject} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Projeyi Başlat</button>
                    </>
                }
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Proje Adı</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" placeholder="Örn: Web Sitesi Tasarımı" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Müşteri</label>
                        <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white">
                            <option>Müşteri Seçin...</option>
                            <option>Moda A.Ş.</option>
                            <option>Tech Start</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Başlangıç</label>
                            <input type="date" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Teslim</label>
                            <input type="date" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Bütçe (₺)</label>
                        <input type="number" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" placeholder="0.00" />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectDashboard;
