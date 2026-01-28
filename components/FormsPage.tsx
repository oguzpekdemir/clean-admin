
import React, { useState } from 'react';
import { Mail, Lock, User, Calendar, UploadCloud, ChevronDown, Globe, DollarSign, AtSign, CreditCard, MapPin, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, Image as ImageIcon } from 'lucide-react';

const FormsPage: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  // Format card number with spaces
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value.replace(/\D/g, '');
      value = value.replace(/(.{4})/g, '$1 ').trim();
      setCardNumber(value.substring(0, 19));
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto pb-20 animate-fade-in">
      
      {/* 1. Payment Form (NEW) */}
      <div className="bg-white dark:bg-[#09090b] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <CreditCard className="w-5 h-5 mr-2 text-blue-600" /> Ödeme Bilgileri
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 order-2 lg:order-1">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Kart Sahibi</label>
                      <input type="text" placeholder="Ad Soyad" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Kart Numarası</label>
                      <div className="relative">
                          <input 
                            type="text" 
                            placeholder="0000 0000 0000 0000" 
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            className="w-full pl-12 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white font-mono" 
                          />
                          <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                      <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Son Kullanma</label>
                          <input 
                            type="text" 
                            placeholder="AA/YY" 
                            maxLength={5}
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white text-center" 
                          />
                      </div>
                      <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">CVC</label>
                          <input 
                            type="text" 
                            placeholder="123" 
                            maxLength={3}
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white text-center" 
                          />
                      </div>
                  </div>
              </div>
              
              {/* Visual Card Preview */}
              <div className="flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0">
                  <div className="w-full max-w-sm h-56 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-6 text-white flex flex-col justify-between relative overflow-hidden transition-all hover:scale-105 duration-300">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                      <div className="flex justify-between items-start relative z-10">
                          <span className="font-bold text-lg italic tracking-widest">Bank</span>
                          <div className="flex space-x-2">
                              <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                              <div className="w-8 h-8 bg-white/20 rounded-full -ml-4 mix-blend-overlay"></div>
                          </div>
                      </div>
                      <div className="space-y-4 relative z-10">
                          <div className="text-2xl font-mono tracking-widest drop-shadow-md">
                              {cardNumber || '•••• •••• •••• ••••'}
                          </div>
                          <div className="flex justify-between items-end">
                              <div>
                                  <p className="text-[10px] uppercase opacity-70 mb-1">Kart Sahibi</p>
                                  <p className="font-bold tracking-wide uppercase text-sm">{ 'AD SOYAD' }</p>
                              </div>
                              <div className="text-right">
                                  <p className="text-[10px] uppercase opacity-70 mb-1">SKT</p>
                                  <p className="font-bold font-mono text-sm">{expiry || 'AA/YY'}</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 2. Rich Text Editor Simulation (NEW) */}
      <div className="bg-white dark:bg-[#09090b] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">İçerik Editörü</h3>
          <div className="border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden">
              {/* Toolbar */}
              <div className="bg-gray-50 dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-700 p-2 flex flex-wrap gap-2">
                  <div className="flex space-x-1 border-r border-gray-300 dark:border-neutral-700 pr-2">
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><Bold className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><Italic className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><Underline className="w-4 h-4" /></button>
                  </div>
                  <div className="flex space-x-1 border-r border-gray-300 dark:border-neutral-700 pr-2">
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><AlignLeft className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><AlignCenter className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><AlignRight className="w-4 h-4" /></button>
                  </div>
                  <div className="flex space-x-1">
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><List className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded text-gray-600 dark:text-gray-300"><ImageIcon className="w-4 h-4" /></button>
                  </div>
              </div>
              {/* Text Area */}
              <textarea 
                  className="w-full h-48 p-4 bg-white dark:bg-[#09090b] text-sm text-gray-800 dark:text-gray-200 resize-none outline-none" 
                  placeholder="Buraya yazmaya başlayın..."
                  defaultValue="Bu bir zengin metin editörü simülasyonudur. Kullanıcılar içeriklerini biçimlendirebilir ve mobil uyumludur."
              />
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Basic Inputs (Existing) */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Temel Form Elemanları</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">E-posta Adresi</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="email" placeholder="ornek@sirket.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Şifre</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input type="password" defaultValue="password123" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Kategori Seçin</label>
                <div className="relative">
                   <select className="w-full pl-4 pr-10 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all appearance-none cursor-pointer dark:text-white">
                      <option>Tasarım</option>
                      <option>Yazılım</option>
                      <option>Pazarlama</option>
                   </select>
                   <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          {/* Toggles & Checkboxes (Existing) */}
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Seçim Elemanları</h3>
            <div className="space-y-6">
               <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Checkboxlar</p>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" defaultChecked />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">Bildirimleri aç</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">Bültene abone ol</span>
                    </label>
               </div>
               <hr className="border-gray-100 dark:border-neutral-800" />
               <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Radyo Butonları</p>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="plan" className="w-5 h-5 border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" defaultChecked />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Bireysel</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input type="radio" name="plan" className="w-5 h-5 border-gray-300 dark:border-neutral-700 text-black focus:ring-black dark:bg-neutral-900" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">Kurumsal</span>
                        </label>
                    </div>
               </div>
            </div>
          </div>
        </div>

        {/* Address & Advanced (NEW Layout) */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
             <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Adres Bilgileri</h3>
             <div className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Ülke</label>
                        <div className="relative">
                            <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select className="w-full pl-10 pr-8 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm outline-none appearance-none dark:text-white">
                                <option>Türkiye</option>
                                <option>ABD</option>
                                <option>Almanya</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                        </div>
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Şehir</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm outline-none dark:text-white" placeholder="İstanbul" />
                     </div>
                 </div>
                 <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Açık Adres</label>
                    <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea rows={3} className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm outline-none resize-none dark:text-white" placeholder="Mahalle, Cadde, Sokak..." />
                    </div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Posta Kodu</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm outline-none dark:text-white" placeholder="34000" />
                     </div>
                 </div>
             </div>
          </div>

          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Dosya Yükleme</h3>
            <div className="border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-2xl p-8 text-center hover:bg-gray-50 dark:hover:bg-neutral-900 hover:border-black dark:hover:border-white transition-colors cursor-pointer group">
               <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white dark:group-hover:bg-black group-hover:shadow-md transition-all">
                  <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-black dark:group-hover:text-white" />
               </div>
               <p className="text-sm font-bold text-gray-900 dark:text-white">Dosyaları buraya sürükleyin</p>
               <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">veya tarayıcıdan seçmek için tıklayın</p>
               <p className="text-[10px] text-gray-400 mt-4 uppercase">PNG, JPG, PDF (Max 10MB)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Form Actions */}
      <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200 dark:border-neutral-800">
        <button className="px-6 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
            İptal
        </button>
        <button className="px-6 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg shadow-black/20 dark:shadow-white/10">
            Değişiklikleri Kaydet
        </button>
      </div>
    </div>
  );
};

export default FormsPage;
