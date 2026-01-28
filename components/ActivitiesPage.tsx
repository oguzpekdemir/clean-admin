
import React from 'react';
import { MessageCircle, ThumbsUp, Upload, UserPlus, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const ActivitiesPage: React.FC = () => {
  const activities = [
    { date: 'Bugün', items: [
        { user: 'Claudia', action: '5 fotoğrafı beğendi', target: 'Stüdyo Portreleri', time: '14:30', icon: ThumbsUp, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-900/20' },
        { user: 'Sistem', action: 'Yeni galeri oluşturuldu', target: 'Sonbahar Kampanyası', time: '12:15', icon: Upload, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
        { user: 'Ahmet', action: 'Yorum yaptı', target: '"Harika ışık kullanımı!"', time: '09:45', icon: MessageCircle, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/20' },
    ]},
    { date: 'Dün', items: [
        { user: 'Merve', action: 'Seçimleri tamamladı', target: 'Düğün Hikayesi', time: '16:20', icon: CheckCircle, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
        { user: 'Sistem', action: 'Yedekleme tamamlandı', target: 'Otomatik Yedekleme', time: '03:00', icon: FileText, color: 'text-gray-500', bg: 'bg-gray-100 dark:bg-neutral-800' },
    ]},
    { date: '20 Ekim', items: [
        { user: 'Oğuz', action: 'Ekip üyesi ekledi', target: 'Canan K.', time: '11:00', icon: UserPlus, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20' },
        { user: 'Sistem', action: 'Yükleme hatası', target: 'RAW Dosyaları', time: '09:15', icon: AlertCircle, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-900/20' },
    ]}
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in pb-20">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Aktivite Geçmişi</h2>
            <button className="text-sm font-semibold text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white">Tümünü Okundu İşaretle</button>
        </div>

        <div className="relative">
            {/* Vertical Line - Adjusted for mobile */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-neutral-800" />

            <div className="space-y-12">
                {activities.map((group, groupIdx) => (
                    <div key={groupIdx} className="relative">
                        <div className="sticky top-24 z-10 mb-6 ml-14 md:ml-16">
                             <span className="bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm">{group.date}</span>
                        </div>
                        
                        <div className="space-y-6">
                            {group.items.map((item, idx) => (
                                <div key={idx} className="relative flex items-start group">
                                    <div className={`absolute left-0 w-12 md:w-16 flex justify-center pt-2`}>
                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-[#F3F4F6] dark:border-black ${item.bg} flex items-center justify-center z-20`}>
                                            <item.icon className={`w-3 h-3 md:w-4 md:h-4 ${item.color}`} />
                                        </div>
                                    </div>
                                    
                                    <div className="ml-14 md:ml-20 flex-1 bg-white dark:bg-[#09090b] p-4 md:p-5 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-3 mb-2">
                                                 <img src={`https://picsum.photos/40/40?random=${groupIdx * 10 + idx}`} className="w-8 h-8 rounded-full border border-gray-100 dark:border-neutral-800" alt={item.user} />
                                                 <span className="font-bold text-gray-900 dark:text-white text-sm">{item.user}</span>
                                            </div>
                                            <span className="text-xs text-gray-400 dark:text-neutral-500 font-mono">{item.time}</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-neutral-300 text-sm">
                                            {item.action} <span className="font-semibold text-gray-800 dark:text-white">{item.target}</span>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ActivitiesPage;
