
import React from 'react';
import { Camera, Save } from 'lucide-react';
import { useToast } from '../context/ToastContext';

const ProfilePage: React.FC = () => {
  const { addToast } = useToast();

  const handleSave = () => {
      addToast('Profil değişiklikleri kaydedildi.', 'success');
  };

  const handleDeleteAccount = () => {
      if(window.confirm('Hesabınızı silmek istediğinize emin misiniz? Bu işlem geri alınamaz.')) {
          addToast('Hesap silme isteği alındı.', 'info');
      }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
       {/* Profile Header */}
       <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 dark:from-neutral-800 dark:to-neutral-900 h-48 rounded-3xl overflow-hidden shadow-lg">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
       </div>
       
       <div className="px-6 -mt-20 relative z-10 flex flex-col md:flex-row items-center md:items-end space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
           <div className="relative group cursor-pointer" onClick={() => addToast('Fotoğraf yükleme penceresi açılıyor...', 'info')}>
               <img src="https://picsum.photos/150/150?random=2" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-black shadow-md object-cover" alt="Profile" />
               <button className="absolute bottom-2 right-2 p-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                   <Camera className="w-4 h-4" />
               </button>
           </div>
           <div className="pb-0 md:pb-4 flex-1">
               <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Oğuz</h1>
               <p className="text-gray-500 dark:text-gray-400">Ürün Yöneticisi • İstanbul, TR</p>
           </div>
           <div className="md:ml-auto pb-4 w-full md:w-auto">
               <button onClick={handleSave} className="w-full md:w-auto justify-center px-6 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-black/20 dark:shadow-white/10 flex items-center">
                   <Save className="w-4 h-4 mr-2" />
                   Kaydet
               </button>
           </div>
       </div>

       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Left Column - Personal Info */}
           <div className="lg:col-span-2 space-y-6">
               <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                   <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Kişisel Bilgiler</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Ad</label>
                           <input type="text" defaultValue="Oğuz" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Soyad</label>
                           <input type="text" defaultValue="Pekdemir" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                       <div className="md:col-span-2">
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">E-posta</label>
                           <input type="email" defaultValue="oguz@cleanadmin.online" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                       <div className="md:col-span-2">
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Biyografi</label>
                           <textarea rows={4} className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white resize-none dark:text-white" defaultValue="Dijital ürünler tasarlayan ve yöneten bir profesyonel." />
                       </div>
                   </div>
               </div>

                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                   <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Adres Bilgileri</h2>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="md:col-span-2">
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Adres</label>
                           <input type="text" defaultValue="Maslak Mah. Büyükdere Cad." className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Şehir</label>
                           <input type="text" defaultValue="İstanbul" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                       <div>
                           <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Posta Kodu</label>
                           <input type="text" defaultValue="34398" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                       </div>
                   </div>
               </div>
           </div>

           {/* Right Column - Preferences */}
           <div className="space-y-6">
               <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                   <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Tercihler</h2>
                   <div className="space-y-4">
                       <div className="flex items-center justify-between">
                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Herkese Açık Profil</span>
                           <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                       </div>
                       <div className="flex items-center justify-between">
                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">E-posta Bildirimleri</span>
                           <input type="checkbox" defaultChecked className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                       </div>
                       <div className="flex items-center justify-between">
                           <span className="text-sm font-medium text-gray-700 dark:text-gray-300">SMS Bildirimleri</span>
                           <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                       </div>
                   </div>
               </div>
               
               <div className="bg-rose-50 dark:bg-rose-900/10 p-6 rounded-3xl border border-rose-100 dark:border-rose-900/30">
                   <h2 className="text-lg font-bold text-rose-900 dark:text-rose-500 mb-2">Tehlikeli Bölge</h2>
                   <p className="text-xs text-rose-700 dark:text-rose-400 mb-4">Bu işlem geri alınamaz. Hesabınız kalıcı olarak silinecektir.</p>
                   <button onClick={handleDeleteAccount} className="w-full py-2.5 bg-white dark:bg-[#09090b] border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-500 rounded-xl text-sm font-bold hover:bg-rose-100 dark:hover:bg-rose-900/20 transition-colors">
                       Hesabı Sil
                   </button>
               </div>
           </div>
       </div>
    </div>
  );
};

export default ProfilePage;
