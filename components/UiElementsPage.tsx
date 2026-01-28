
import React, { useState } from 'react';
import { 
    Bell, CheckCircle, AlertTriangle, Info, XCircle, ChevronDown, ChevronRight, Home, 
    Loader2, RefreshCw, ToggleRight, Sliders, Hash, Layers, Layout, Shield, Search, X,
    Image as ImageIcon, MoreHorizontal, Send, Mic, Paperclip, FileText, Smartphone, Monitor, HardDrive, 
    Download, Check, Star, User, MapPin, Calendar, Menu
} from 'lucide-react';
import Drawer from './Drawer';

const UiElementsPage: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState(0);
  
  // Advanced UI States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [sliderValue, setSliderValue] = useState(50);
  const [activeStep, setActiveStep] = useState(2);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [tags, setTags] = useState(['Design', 'Development']);
  const [tagInput, setTagInput] = useState('');
  
  // Image Compare State
  const [comparePosition, setComparePosition] = useState(50);

  const handleTagKeyDown = (e: React.KeyboardEvent) => {
      if(e.key === 'Enter' && tagInput) {
          setTags([...tags, tagInput]);
          setTagInput('');
      }
  };

  const removeTag = (idx: number) => {
      setTags(tags.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-20 animate-fade-in">
      
      {/* 1. Alerts & Notifications */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Uyarılar & Bildirimler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-xl flex items-start">
                  <Info className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                  <div>
                      <h4 className="text-sm font-bold text-blue-800 dark:text-blue-300">Bilgilendirme</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">Sistem güncellemesi bu gece 02:00'da yapılacak.</p>
                  </div>
              </div>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-xl flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5" />
                  <div>
                      <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300">Başarılı</h4>
                      <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">Profil bilgileriniz başarıyla güncellendi.</p>
                  </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-xl flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mr-3 mt-0.5" />
                  <div>
                      <h4 className="text-sm font-bold text-amber-800 dark:text-amber-300">Dikkat</h4>
                      <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">Aboneliğinizin bitmesine 3 gün kaldı.</p>
                  </div>
              </div>
              <div className="bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 p-4 rounded-r-xl flex items-start">
                  <XCircle className="w-5 h-5 text-rose-500 mr-3 mt-0.5" />
                  <div>
                      <h4 className="text-sm font-bold text-rose-800 dark:text-rose-300">Hata</h4>
                      <p className="text-sm text-rose-700 dark:text-rose-400 mt-1">Ödeme işlemi sırasında bir sorun oluştu.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 2. Badges & Avatars */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Rozetler & Avatarlar</h2>
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-8">
              {/* Badges */}
              <div>
                  <h4 className="text-sm font-bold text-gray-500 mb-4">Durum Rozetleri</h4>
                  <div className="flex flex-wrap gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300">Varsayılan</span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">Yeni</span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center"><span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1.5"></span> Aktif</span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400 flex items-center"><AlertTriangle className="w-3 h-3 mr-1" /> Hata</span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">Pro</span>
                  </div>
              </div>
              
              {/* Avatars */}
              <div>
                  <h4 className="text-sm font-bold text-gray-500 mb-4">Avatar Grupları</h4>
                  <div className="flex items-center space-x-8">
                      {/* Basic Group */}
                      <div className="flex -space-x-3">
                          {[1,2,3,4].map(i => (
                              <img key={i} src={`https://picsum.photos/40/40?random=${i+50}`} className="w-10 h-10 rounded-full border-2 border-white dark:border-[#09090b]" alt="" />
                          ))}
                          <div className="w-10 h-10 rounded-full border-2 border-white dark:border-[#09090b] bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-gray-500">+5</div>
                      </div>
                      
                      {/* With Status */}
                      <div className="relative">
                          <img src="https://picsum.photos/50/50?random=60" className="w-12 h-12 rounded-xl" alt="" />
                          <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-[#09090b] rounded-full"></span>
                      </div>

                      {/* With Notification */}
                      <div className="relative">
                          <img src="https://picsum.photos/50/50?random=61" className="w-12 h-12 rounded-full" alt="" />
                          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-rose-500 border-2 border-white dark:border-[#09090b] rounded-full flex items-center justify-center text-[10px] font-bold text-white">3</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Navigation Components (Tabs & Breadcrumbs) */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Navigasyon</h2>
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-8">
              
              {/* Breadcrumbs */}
              <div>
                  <nav className="flex items-center text-sm text-gray-500 dark:text-neutral-400">
                      <span className="hover:text-black dark:hover:text-white cursor-pointer"><Home className="w-4 h-4" /></span>
                      <ChevronRight className="w-4 h-4 mx-2" />
                      <span className="hover:text-black dark:hover:text-white cursor-pointer">Projeler</span>
                      <ChevronRight className="w-4 h-4 mx-2" />
                      <span className="hover:text-black dark:hover:text-white cursor-pointer">Web Tasarım</span>
                      <ChevronRight className="w-4 h-4 mx-2" />
                      <span className="font-bold text-black dark:text-white">Detaylar</span>
                  </nav>
              </div>

              {/* Tabs */}
              <div>
                  <div className="flex space-x-1 bg-gray-100 dark:bg-neutral-900 p-1 rounded-xl w-fit overflow-x-auto max-w-full">
                      {['Genel Bakış', 'Analitik', 'Raporlar', 'Ayarlar'].map((tab, idx) => (
                          <button
                              key={idx}
                              onClick={() => setActiveTab(idx)}
                              className={`px-4 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                                  activeTab === idx 
                                  ? 'bg-white dark:bg-[#09090b] text-black dark:text-white shadow-sm' 
                                  : 'text-gray-500 hover:text-black dark:hover:text-white'
                              }`}
                          >
                              {tab}
                          </button>
                      ))}
                  </div>
                  <div className="mt-4 p-4 border border-gray-100 dark:border-neutral-800 rounded-xl bg-gray-50 dark:bg-neutral-900/50">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                          {activeTab === 0 && "Genel bakış içeriği buraya gelecek."}
                          {activeTab === 1 && "Analitik grafikleri burada görüntülenecek."}
                          {activeTab === 2 && "Raporların listesi burada yer alacak."}
                          {activeTab === 3 && "Ayarlar formu burada gösterilecek."}
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Accordion */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Akordiyon Menü</h2>
          <div className="space-y-2">
              {[
                  { title: 'Üyelik planımı nasıl değiştirebilirim?', content: 'Ayarlar sayfasından abonelik sekmesine giderek planınızı istediğiniz zaman yükseltebilir veya düşürebilirsiniz.' },
                  { title: 'Fatura bilgilerimi nereden güncelleyebilirim?', content: 'Profil ayarlarınızda bulunan fatura bilgileri bölümünden şirket veya şahıs bilgilerinizi güncelleyebilirsiniz.' },
                  { title: 'API anahtarımı nasıl alabilirim?', content: 'Geliştirici panelinden yeni bir API anahtarı oluşturabilir ve yetkilendirme ayarlarını yapabilirsiniz.' }
              ].map((item, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#09090b] rounded-2xl border border-gray-100 dark:border-neutral-800 overflow-hidden">
                      <button 
                          onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                          className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors"
                      >
                          {item.title}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`} />
                      </button>
                      <div className={`px-4 text-sm text-gray-600 dark:text-gray-400 transition-all duration-300 ease-in-out ${openAccordion === idx ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                          {item.content}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* 5. Progress Bars */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">İlerleme Çubukları</h2>
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-6">
              <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-500">Dosya Yükleme</span>
                      <span className="text-blue-500">45%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
              </div>
              
              <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-500">Proje Tamamlanma</span>
                      <span className="text-emerald-500">85%</span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-4 overflow-hidden relative">
                      {/* Striped Pattern Simulation */}
                      <div 
                        className="h-full bg-emerald-500 rounded-full relative overflow-hidden" 
                        style={{ width: '85%' }}
                      >
                          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,.15)_50%,rgba(255,255,255,.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress-bar-stripes_1s_linear_infinite]"></div>
                      </div>
                  </div>
              </div>

              <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-gray-500">Çoklu Adım</span>
                      <span className="text-purple-500">3/4</span>
                  </div>
                  <div className="flex space-x-1">
                      <div className="flex-1 h-2 rounded-full bg-purple-500"></div>
                      <div className="flex-1 h-2 rounded-full bg-purple-500"></div>
                      <div className="flex-1 h-2 rounded-full bg-purple-500"></div>
                      <div className="flex-1 h-2 rounded-full bg-gray-100 dark:bg-neutral-800"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. Stepper / Wizard (Existing) */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Adım Sihirbazı (Stepper)</h2>
          <div className="bg-white dark:bg-[#09090b] p-6 md:p-8 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-x-hidden">
              <div className="flex items-center justify-between relative min-w-[280px]">
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-100 dark:bg-neutral-800 -z-0"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-black dark:bg-white transition-all duration-500 -z-0" style={{ width: `${(activeStep - 1) * 33}%` }}></div>
                  
                  {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="relative z-10 flex flex-col items-center cursor-pointer" onClick={() => setActiveStep(step)}>
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm border-4 transition-colors duration-300 
                              ${activeStep >= step 
                                ? 'bg-black dark:bg-white border-black dark:border-white text-white dark:text-black' 
                                : 'bg-white dark:bg-black border-gray-200 dark:border-neutral-800 text-gray-400'
                              }`}>
                              {activeStep > step ? <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> : step}
                          </div>
                          <span className={`mt-2 text-[10px] md:text-xs font-bold transition-colors ${activeStep >= step ? 'text-black dark:text-white' : 'text-gray-400'}`}>
                              Adım {step}
                          </span>
                      </div>
                  ))}
              </div>
              <div className="mt-8 text-center">
                  <div className="inline-block px-4 py-2 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800">
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Şu anki Aşama: <span className="font-bold text-black dark:text-white">Konfigürasyon</span></p>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. Image Compare Slider (Existing) */}
      <section className="space-y-4">
          <div className="flex items-center justify-between">
             <h2 className="text-xl font-bold text-gray-900 dark:text-white">Before / After Karşılaştırma</h2>
             <span className="text-xs bg-emerald-500 text-white px-2 py-1 rounded font-bold">PRO</span>
          </div>
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden select-none group cursor-ew-resize">
                  {/* After Image (Background) */}
                  <img 
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2252&auto=format&fit=crop" 
                    className="absolute inset-0 w-full h-full object-cover grayscale-0" 
                    alt="After" 
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs font-bold">AFTER</div>
                  
                  {/* Before Image (Foreground - Clipped) */}
                  <div 
                    className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white"
                    style={{ width: `${comparePosition}%` }}
                  >
                      <img 
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2252&auto=format&fit=crop" 
                        className="absolute inset-0 w-full h-full object-cover grayscale" 
                        style={{ width: '100%' }} // Fixed width to container width
                        alt="Before" 
                      />
                      <div className="absolute top-4 left-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-white text-xs font-bold">BEFORE</div>
                  </div>

                  {/* Slider Handler */}
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={comparePosition} 
                    onChange={(e) => setComparePosition(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                  />
                  
                  {/* Visual Handler Circle */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center z-10 pointer-events-none"
                    style={{ left: `calc(${comparePosition}% - 16px)` }}
                  >
                      <Sliders className="w-4 h-4 text-black rotate-90" />
                  </div>
              </div>
          </div>
      </section>

      {/* 8. Sliders & Range (Existing) */}
      <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Slider & Range</h2>
          <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-8">
              <div>
                  <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Ses Seviyesi</label>
                      <span className="text-xs font-bold text-black dark:text-white">{sliderValue}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-black dark:accent-white"
                  />
              </div>

              <div>
                  <div className="flex justify-between mb-2">
                      <label className="text-xs font-bold text-gray-500 uppercase">Fiyat Aralığı</label>
                      <span className="text-xs font-bold text-black dark:text-white">₺200 - ₺1000</span>
                  </div>
                  <div className="relative w-full h-2 bg-gray-200 dark:bg-neutral-800 rounded-lg">
                      <div className="absolute left-[20%] right-[30%] h-full bg-blue-500 rounded-lg"></div>
                      <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
                      <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-blue-500 rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
                  </div>
              </div>
          </div>
      </section>

      {/* 9. OTP & Tags (Existing) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Güvenlik Girişi (OTP)</h2>
              <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col items-center justify-center h-full">
                  <div className="flex items-center space-x-2 mb-4">
                      <Shield className="w-5 h-5 text-emerald-500" />
                      <span className="text-sm font-bold text-gray-700 dark:text-gray-300">2FA Doğrulama</span>
                  </div>
                  <div className="flex gap-2">
                      {otp.map((digit, idx) => (
                          <input
                            key={idx}
                            type="text"
                            maxLength={1}
                            value={digit}
                            className="w-12 h-14 border-2 border-gray-200 dark:border-neutral-800 rounded-xl text-center text-xl font-bold text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 outline-none transition-colors bg-transparent"
                            onChange={(e) => {
                                const newOtp = [...otp];
                                newOtp[idx] = e.target.value;
                                setOtp(newOtp);
                            }}
                          />
                      ))}
                  </div>
              </div>
          </section>

          <section className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Etiket Yönetimi</h2>
              <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Yetenekler</label>
                  <div className="flex flex-wrap gap-2 p-2 border border-gray-200 dark:border-neutral-800 rounded-xl bg-gray-50 dark:bg-neutral-900 focus-within:ring-1 focus-within:ring-black dark:focus-within:ring-white transition-all">
                      {tags.map((tag, idx) => (
                          <span key={idx} className="flex items-center px-3 py-1 bg-white dark:bg-black border border-gray-200 dark:border-neutral-700 rounded-lg text-sm font-bold text-gray-800 dark:text-gray-200 shadow-sm">
                              <Hash className="w-3 h-3 mr-1 text-gray-400" />
                              {tag}
                              <button onClick={() => removeTag(idx)} className="ml-2 hover:text-rose-500 transition-colors">
                                  <X className="w-3 h-3" />
                              </button>
                          </span>
                      ))}
                      <input 
                        type="text" 
                        className="flex-1 bg-transparent border-none outline-none text-sm min-w-[120px] p-1 dark:text-white"
                        placeholder="Etiket ekle..."
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyDown={handleTagKeyDown}
                      />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">Enter tuşuna basarak ekleyin.</p>
              </div>
          </section>
      </div>
      
      {/* Drawer Implementation (Existing) */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="Gelişmiş Panel Detayı"
        footer={
            <div className="flex justify-end space-x-3">
                <button onClick={() => setIsDrawerOpen(false)} className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 dark:text-white">Kapat</button>
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">Kaydet</button>
            </div>
        }
      >
          <div className="space-y-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                  <h4 className="text-sm font-bold text-blue-900 dark:text-blue-400 mb-1">Bilgilendirme</h4>
                  <p className="text-xs text-blue-700 dark:text-blue-300">Bu panel, ana içerikten kopmadan detaylı işlemler yapmanızı sağlar.</p>
              </div>

              <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Proje Adı</label>
                  <input type="text" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" defaultValue="Web Tasarım Revize" />
              </div>

              <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Açıklama</label>
                  <textarea rows={4} className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white resize-none" defaultValue="Müşteri talebi üzerine header kısmındaki fontlar güncellenecek." />
              </div>

              <div className="flex items-center space-x-4">
                  <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Başlangıç</label>
                      <input type="date" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm dark:text-white" />
                  </div>
                  <div className="flex-1">
                      <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Bitiş</label>
                      <input type="date" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm dark:text-white" />
                  </div>
              </div>
          </div>
      </Drawer>
    </div>
  );
};

export default UiElementsPage;
