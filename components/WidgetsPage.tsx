
import React from 'react';
import { 
    Cloud, Sun, Droplets, Wind, User, MapPin, Twitter, Facebook, Instagram, Linkedin, 
    MoreHorizontal, TrendingUp, Music, Play, Pause, SkipForward, SkipBack, 
    Server, Cpu, Wifi, Users, Clock, ArrowUp, ArrowDown, Bitcoin, Activity,
    CreditCard, Bluetooth, Moon, Battery, BatteryCharging, Smile, Meh, Frown,
    Calendar, Check, FileText, UploadCloud, Smartphone, Laptop, Tablet, Watch,
    ShoppingBag, Star, Headphones, MessageCircle, Video, Mic, Phone, Gift, ExternalLink,
    Globe, Search, Bell, Shield, Lock, Eye, Timer, Banknote, Edit3, Trophy, ShieldCheck,
    Zap, AlertTriangle, CloudLightning, MessageSquare
} from 'lucide-react';

const WidgetsPage: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Widget Kütüphanesi</h2>
                <p className="text-gray-500 dark:text-neutral-400 text-sm">Dashboard projeleriniz için hazır bileşenler.</p>
            </div>
            <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-xs font-bold">30 Widget</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* 1. Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden h-64 flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex justify-between items-start relative z-10">
                    <div>
                        <h4 className="font-bold text-lg">İstanbul</h4>
                        <p className="text-sm text-blue-100">Pazartesi, 12 Eki</p>
                    </div>
                    <Cloud className="w-8 h-8 text-white" />
                </div>
                <div className="relative z-10">
                    <h3 className="text-5xl font-bold mb-2">24°</h3>
                    <div className="flex space-x-4 text-sm font-medium text-blue-100">
                        <div className="flex items-center"><Wind className="w-4 h-4 mr-1" /> 12km/h</div>
                        <div className="flex items-center"><Droplets className="w-4 h-4 mr-1" /> 48%</div>
                        <div className="flex items-center"><Sun className="w-4 h-4 mr-1" /> 06:40</div>
                    </div>
                </div>
            </div>

            {/* 2. Profile Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm text-center relative h-64 flex flex-col justify-center">
                <div className="absolute top-4 right-4">
                     <button className="text-gray-400 hover:text-black dark:hover:text-white"><MoreHorizontal className="w-5 h-5" /></button>
                </div>
                <div className="w-20 h-20 mx-auto bg-gray-200 dark:bg-neutral-800 rounded-full mb-3 p-1">
                    <img src="https://picsum.photos/150/150?random=1" className="w-full h-full rounded-full object-cover" alt="Profile" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Elif Yılmaz</h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mb-4">Senior UI Designer</p>
                <div className="flex justify-center space-x-2">
                    <span className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-full text-blue-500 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20"><Twitter className="w-4 h-4" /></span>
                    <span className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-full text-blue-700 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/20"><Linkedin className="w-4 h-4" /></span>
                    <span className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-full text-pink-500 cursor-pointer hover:bg-pink-50 dark:hover:bg-pink-900/20"><Instagram className="w-4 h-4" /></span>
                </div>
            </div>

            {/* 3. Storage Status */}
            <div className="bg-black dark:bg-[#09090b] text-white p-6 rounded-3xl shadow-xl dark:border dark:border-neutral-800 relative overflow-hidden flex flex-col justify-center h-64">
                 <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-rose-500"></div>
                 <h3 className="text-lg font-bold mb-1">Depolama Alanı</h3>
                 <p className="text-sm text-gray-400 mb-6">Paketiniz %85 doldu.</p>
                 
                 <div className="w-full bg-white/10 rounded-full h-4 mb-2">
                     <div className="bg-white h-4 rounded-full relative" style={{ width: '85%' }}>
                         <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-rose-500 rounded-full shadow border border-black"></span>
                     </div>
                 </div>
                 <div className="flex justify-between text-xs font-bold text-gray-400">
                     <span>850GB</span>
                     <span>1TB</span>
                 </div>
                 <button className="mt-6 text-sm font-bold text-center w-full py-2 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">Yükselt</button>
            </div>

            {/* 4. Social Stats */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between h-64">
                <div className="flex items-center space-x-3 mb-2">
                    <div className="p-3 bg-blue-500 rounded-xl text-white">
                        <Facebook className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">Facebook</h4>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">CleanAdmin Official</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                        <h5 className="text-xl font-bold text-gray-900 dark:text-white">12K</h5>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">Takipçi</p>
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                        <h5 className="text-xl font-bold text-emerald-500 flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 mr-1" /> 12%
                        </h5>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">Etkileşim</p>
                    </div>
                </div>
                <button className="w-full mt-2 py-2 border border-gray-200 dark:border-neutral-800 text-gray-600 dark:text-gray-300 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-900">Analizi Gör</button>
            </div>

            {/* 5. Music Player */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm relative overflow-hidden group h-64">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 rounded-3xl"></div>
                 <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover rounded-3xl group-hover:scale-110 transition-transform duration-700" alt="Cover" />
                 
                 <div className="relative z-20 h-full flex flex-col justify-end text-white">
                     <div className="flex items-center space-x-2 mb-1">
                         <Music className="w-4 h-4 text-emerald-400" />
                         <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Şimdi Çalıyor</span>
                     </div>
                     <h3 className="text-xl font-bold">Midnight City</h3>
                     <p className="text-sm text-gray-300 mb-6">M83 • Hurry Up</p>
                     
                     <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                         <div className="bg-emerald-400 h-1 rounded-full" style={{ width: '45%' }}></div>
                     </div>
                     
                     <div className="flex justify-between items-center px-4">
                         <button className="text-white/70 hover:text-white"><SkipBack className="w-6 h-6" /></button>
                         <button className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform text-white shadow-lg"><Pause className="w-5 h-5 fill-current" /></button>
                         <button className="text-white/70 hover:text-white"><SkipForward className="w-6 h-6" /></button>
                     </div>
                 </div>
            </div>

            {/* 6. Simple Login */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col justify-center">
                <div className="text-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Giriş Yap</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400">Devam etmek için oturum açın</p>
                </div>
                <div className="space-y-3">
                    <input type="email" placeholder="E-posta" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm" />
                    <input type="password" placeholder="Şifre" className="w-full px-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm" />
                    <button className="w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold">Giriş</button>
                </div>
            </div>

            {/* 7. Payment Card */}
            <div className="bg-gradient-to-r from-gray-900 to-black dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden h-64 flex flex-col justify-between border border-gray-800">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="flex justify-between items-start relative z-10">
                    <span className="font-bold text-lg tracking-widest italic">CleanAdmin</span>
                    <Wifi className="w-6 h-6 rotate-90 opacity-70" />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-10 h-7 bg-yellow-500/20 rounded-md border border-yellow-500/50 flex items-center justify-center">
                            <div className="w-6 h-4 border border-yellow-500/50 rounded-sm grid grid-cols-2 gap-px p-px">
                                <div className="bg-yellow-500/50 rounded-sm"></div>
                                <div className="border border-yellow-500/50 rounded-sm"></div>
                            </div>
                        </div>
                        <Activity className="w-6 h-6 opacity-50" />
                    </div>
                    <h3 className="text-2xl font-mono tracking-wider mb-4">4582  ••••  ••••  8921</h3>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Kart Sahibi</p>
                            <p className="text-sm font-bold tracking-wide">OĞUZ PEKDEMİR</p>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider">SKT</p>
                            <p className="text-sm font-bold">12/28</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 8. Control Center */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-5 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-gray-900 dark:text-white">Kontrol Merkezi</h3>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="grid grid-cols-2 gap-3 h-full">
                    <button className="bg-blue-500 text-white rounded-2xl flex flex-col items-center justify-center p-2 hover:opacity-90 transition-opacity">
                        <Wifi className="w-6 h-6 mb-1" />
                        <span className="text-xs font-bold">Wi-Fi</span>
                        <span className="text-[10px] opacity-80">Açık</span>
                    </button>
                    <button className="bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 rounded-2xl flex flex-col items-center justify-center p-2 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
                        <Bluetooth className="w-6 h-6 mb-1" />
                        <span className="text-xs font-bold">Bluetooth</span>
                        <span className="text-[10px] opacity-80">Kapalı</span>
                    </button>
                    <button className="bg-orange-500 text-white rounded-2xl flex flex-col items-center justify-center p-2 hover:opacity-90 transition-opacity">
                        <Sun className="w-6 h-6 mb-1" />
                        <span className="text-xs font-bold">Parlaklık</span>
                        <span className="text-[10px] opacity-80">80%</span>
                    </button>
                    <button className="bg-purple-500 text-white rounded-2xl flex flex-col items-center justify-center p-2 hover:opacity-90 transition-opacity">
                        <Moon className="w-6 h-6 mb-1" />
                        <span className="text-xs font-bold">Uyku Modu</span>
                        <span className="text-[10px] opacity-80">Aktif</span>
                    </button>
                </div>
            </div>

            {/* 9. Customer Satisfaction */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col justify-center text-center">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Memnuniyet Anketi</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">Hizmetimizden ne kadar memnunsunuz?</p>
                <div className="flex justify-center space-x-4 mb-6">
                    <button className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform grayscale hover:grayscale-0">
                            😡
                        </div>
                    </button>
                    <button className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform grayscale hover:grayscale-0">
                            😐
                        </div>
                    </button>
                    <button className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform grayscale-0 shadow-lg ring-2 ring-emerald-500 ring-offset-2 dark:ring-offset-black">
                            😍
                        </div>
                    </button>
                </div>
                <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2 overflow-hidden">
                    <div className="flex h-full">
                        <div className="bg-rose-400 w-[10%]"></div>
                        <div className="bg-amber-400 w-[20%]"></div>
                        <div className="bg-emerald-500 w-[70%]"></div>
                    </div>
                </div>
                <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-bold">
                    <span>%10</span>
                    <span>%20</span>
                    <span>%70</span>
                </div>
            </div>

            {/* 10. Battery Levels */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white">Cihaz Durumları</h3>
                    <BatteryCharging className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="space-y-4 flex-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
                                <Laptop className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">MacBook Pro</span>
                        </div>
                        <div className="flex items-center space-x-2 text-emerald-500 font-bold text-xs">
                            <span>100%</span>
                            <Battery className="w-4 h-4 fill-current" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
                                <Smartphone className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">iPhone 15</span>
                        </div>
                        <div className="flex items-center space-x-2 text-amber-500 font-bold text-xs">
                            <span>42%</span>
                            <Battery className="w-4 h-4" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gray-100 dark:bg-neutral-900 rounded-lg">
                                <Watch className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Apple Watch</span>
                        </div>
                        <div className="flex items-center space-x-2 text-rose-500 font-bold text-xs">
                            <span>12%</span>
                            <Battery className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>

            {/* 11. Circular Progress */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col items-center justify-center relative">
                <div className="absolute top-4 left-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Günlük Hedef</h3>
                </div>
                <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Outer Ring */}
                        <circle cx="50%" cy="50%" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-neutral-900" />
                        <circle cx="50%" cy="50%" r="70" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="440" strokeDashoffset="110" strokeLinecap="round" className="text-blue-500" />
                        
                        {/* Middle Ring */}
                        <circle cx="50%" cy="50%" r="55" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-neutral-900" />
                        <circle cx="50%" cy="50%" r="55" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="345" strokeDashoffset="120" strokeLinecap="round" className="text-purple-500" />
                        
                        {/* Inner Ring */}
                        <circle cx="50%" cy="50%" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-neutral-900" />
                        <circle cx="50%" cy="50%" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251" strokeDashoffset="60" strokeLinecap="round" className="text-rose-500" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">75%</span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-2">
                    <span className="flex items-center text-[10px] font-bold text-blue-500"><div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div> Adım</span>
                    <span className="flex items-center text-[10px] font-bold text-purple-500"><div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div> Egzersiz</span>
                    <span className="flex items-center text-[10px] font-bold text-rose-500"><div className="w-2 h-2 rounded-full bg-rose-500 mr-1"></div> Kalori</span>
                </div>
            </div>

            {/* 12. Mini Calendar */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Ekim 2026</h3>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg"><MoreHorizontal className="w-4 h-4 text-gray-400" /></button>
                </div>
                <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-2">
                    <span>P</span><span>S</span><span>Ç</span><span>P</span><span>C</span><span>C</span><span>P</span>
                </div>
                <div className="grid grid-cols-7 text-center text-xs font-medium gap-y-3 flex-1">
                    {[null,null,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28].map((d, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <span className={`w-6 h-6 flex items-center justify-center rounded-full ${
                                d === 20 ? 'bg-black dark:bg-white text-white dark:text-black font-bold' : 
                                d === 12 ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400' :
                                'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer'
                            }`}>
                                {d}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <div className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2"></div>
                    <span>Bugün: Tasarım Teslimi</span>
                </div>
            </div>

            {/* 13. Transaction History */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Son İşlemler</h3>
                    <button className="text-xs font-bold text-blue-600">Tümü</button>
                </div>
                <div className="flex-1 space-y-4 overflow-hidden">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400 font-bold text-xs">N</div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Netflix</p>
                                <p className="text-xs text-gray-500">Abonelik</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">-₺149.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs">S</div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Spotify</p>
                                <p className="text-xs text-gray-500">Abonelik</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">-₺39.99</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs">U</div>
                            <div>
                                <p className="text-sm font-bold text-gray-900 dark:text-white">Upwork</p>
                                <p className="text-xs text-gray-500">Gelir</p>
                            </div>
                        </div>
                        <span className="text-sm font-bold text-emerald-500">+₺4,250.00</span>
                    </div>
                </div>
            </div>

            {/* 14. File Upload */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border-2 border-dashed border-gray-200 dark:border-neutral-800 shadow-sm h-64 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors group">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <UploadCloud className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Dosya Yükle</h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1 px-4">Dosyaları buraya sürükleyin veya seçmek için tıklayın</p>
            </div>

            {/* 15. Product Card */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-4 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
                <div className="h-32 rounded-2xl bg-gray-100 dark:bg-neutral-900 relative overflow-hidden mb-3">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Product" />
                    <div className="absolute top-2 right-2 bg-white/90 dark:bg-black/80 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
                        ₺2,450
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm">Nike Air Max</h4>
                            <div className="flex items-center text-xs font-bold text-amber-500">
                                <Star className="w-3 h-3 fill-current mr-1" /> 4.8
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">Spor ve günlük kullanım için ideal.</p>
                    </div>
                    <button className="w-full mt-2 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-xs font-bold flex items-center justify-center hover:opacity-90 transition-opacity">
                        <ShoppingBag className="w-3 h-3 mr-2" /> Sepete Ekle
                    </button>
                </div>
            </div>

            {/* 16. Support Tickets */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Headphones className="w-5 h-5 mr-2 text-rose-500" /> Destek
                    </h3>
                    <span className="text-xs font-bold bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 px-2 py-1 rounded">3 Yeni</span>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
                    {[
                        { id: 1024, title: 'Ödeme Hatası', status: 'Açık', priority: 'Yüksek', color: 'bg-rose-500' },
                        { id: 1023, title: 'Hesap Doğrulama', status: 'Beklemede', priority: 'Orta', color: 'bg-amber-500' },
                        { id: 1022, title: 'Fatura İsteği', status: 'Kapalı', priority: 'Düşük', color: 'bg-emerald-500' },
                    ].map((ticket) => (
                        <div key={ticket.id} className="p-3 rounded-xl border border-gray-100 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors cursor-pointer group">
                            <div className="flex justify-between mb-1">
                                <span className="text-xs font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">#{ticket.id} - {ticket.title}</span>
                                <div className={`w-2 h-2 rounded-full ${ticket.color}`}></div>
                            </div>
                            <div className="flex justify-between text-[10px] text-gray-500">
                                <span>{ticket.priority} Öncelik</span>
                                <span>{ticket.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 17. World Clock */}
            <div className="bg-black dark:bg-[#09090b] text-white p-6 rounded-3xl shadow-xl dark:border dark:border-neutral-800 h-64 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">Dünya Saatleri</h3>
                    <Globe className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇹🇷</span>
                            <div>
                                <p className="font-bold text-sm">İstanbul</p>
                                <p className="text-xs text-gray-400">Bugün</p>
                            </div>
                        </div>
                        <span className="font-mono text-xl font-bold">14:30</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇬🇧</span>
                            <div>
                                <p className="font-bold text-sm">Londra</p>
                                <p className="text-xs text-gray-400">-3 Saat</p>
                            </div>
                        </div>
                        <span className="font-mono text-xl font-bold text-gray-400">11:30</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl">🇺🇸</span>
                            <div>
                                <p className="font-bold text-sm">New York</p>
                                <p className="text-xs text-gray-400">-7 Saat</p>
                            </div>
                        </div>
                        <span className="font-mono text-xl font-bold text-gray-400">07:30</span>
                    </div>
                </div>
            </div>

            {/* 18. Active Meeting */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4">
                    <span className="flex items-center text-xs font-bold text-rose-500 bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded animate-pulse">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full mr-1.5"></span> Canlı
                    </span>
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">Haftalık Tasarım</h3>
                    <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">45:12 süredir devam ediyor</p>
                </div>
                
                <div className="flex justify-center -space-x-4 my-4">
                    {[1,2,3,4].map(i => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-[#09090b] overflow-hidden">
                            <img src={`https://picsum.photos/50/50?random=${i+50}`} className="w-full h-full object-cover" alt="Participant" />
                        </div>
                    ))}
                    <div className="w-12 h-12 rounded-full border-2 border-white dark:border-[#09090b] bg-gray-100 dark:bg-neutral-800 flex items-center justify-center text-xs font-bold text-gray-500">
                        +2
                    </div>
                </div>

                <div className="flex justify-center space-x-4">
                    <button className="p-3 bg-rose-500 text-white rounded-full shadow-lg shadow-rose-500/30 hover:scale-110 transition-transform">
                        <Phone className="w-5 h-5 rotate-135" />
                    </button>
                    <button className="p-3 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
                        <Mic className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors">
                        <Video className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* 19. Traffic Sources */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white">Trafik Kaynakları</h3>
                    <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
                </div>
                <div className="space-y-5 flex-1">
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                            <span className="text-gray-600 dark:text-gray-300 flex items-center"><Globe className="w-3 h-3 mr-1" /> Doğrudan</span>
                            <span className="text-gray-900 dark:text-white">45%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                            <span className="text-gray-600 dark:text-gray-300 flex items-center"><Twitter className="w-3 h-3 mr-1" /> Sosyal Medya</span>
                            <span className="text-gray-900 dark:text-white">32%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-purple-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                            <span className="text-gray-600 dark:text-gray-300 flex items-center"><Search className="w-3 h-3 mr-1" /> Organik</span>
                            <span className="text-gray-900 dark:text-white">23%</span>
                        </div>
                        <div className="w-full bg-gray-100 dark:bg-neutral-800 rounded-full h-2">
                            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 20. Promo Card */}
            <div className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden h-64 flex flex-col justify-center text-center">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                        <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pro'ya Geçin</h3>
                    <p className="text-sm text-white/90 mb-6 px-4">Sınırsız özelliklere erişin ve işinizi bir üst seviyeye taşıyın.</p>
                    <button className="px-6 py-2.5 bg-white text-purple-600 rounded-xl text-sm font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Yükselt
                    </button>
                </div>
            </div>

            {/* 21. Server Status */}
            <div className="bg-gray-900 dark:bg-black p-6 rounded-3xl shadow-lg border border-gray-800 h-64 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                        <Server className="w-5 h-5 text-emerald-500" />
                        <span className="text-white font-bold">Server Durumu</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded font-bold uppercase tracking-wider">Online</span>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>CPU Kullanımı</span>
                            <span>45%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                            <div className="bg-emerald-500 h-1.5 rounded-full" style={{width: '45%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>RAM Kullanımı</span>
                            <span>72%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                            <div className="bg-blue-500 h-1.5 rounded-full" style={{width: '72%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Disk I/O</span>
                            <span>12%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                            <div className="bg-purple-500 h-1.5 rounded-full" style={{width: '12%'}}></div>
                        </div>
                    </div>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-800">
                    <span>Uptime: 24g 12s</span>
                    <Activity className="w-4 h-4 text-gray-600 animate-pulse" />
                </div>
            </div>

            {/* 22. Countdown Timer */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 dark:from-neutral-900 dark:to-black rounded-3xl p-6 shadow-sm border border-gray-800 h-64 flex flex-col justify-center items-center text-center">
                <div className="mb-4">
                    <Timer className="w-8 h-8 text-white mx-auto mb-2 opacity-80" />
                    <h4 className="text-white font-bold text-lg">Lansman Geri Sayım</h4>
                    <p className="text-gray-400 text-xs">Yeni web sitesi yayınına kalan süre</p>
                </div>
                <div className="flex space-x-3">
                    <div className="bg-black/50 p-3 rounded-xl border border-gray-700 w-16">
                        <span className="block text-2xl font-bold text-white">04</span>
                        <span className="text-[10px] text-gray-500 uppercase">Gün</span>
                    </div>
                    <div className="bg-black/50 p-3 rounded-xl border border-gray-700 w-16">
                        <span className="block text-2xl font-bold text-white">12</span>
                        <span className="text-[10px] text-gray-500 uppercase">Saat</span>
                    </div>
                    <div className="bg-black/50 p-3 rounded-xl border border-gray-700 w-16">
                        <span className="block text-2xl font-bold text-white">45</span>
                        <span className="text-[10px] text-gray-500 uppercase">Dak</span>
                    </div>
                </div>
            </div>

            {/* 23. Currency Converter */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Banknote className="w-5 h-5 mr-2 text-green-600" /> Döviz Kuru
                    </h3>
                    <span className="text-xs text-gray-400">Canlı</span>
                </div>
                <div className="flex-1 flex flex-col justify-center space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl">🇺🇸</span>
                            <span className="font-bold text-gray-700 dark:text-gray-200">USD</span>
                        </div>
                        <span className="font-mono font-bold text-gray-900 dark:text-white">1.00</span>
                    </div>
                    <div className="flex justify-center -my-3 z-10">
                        <div className="bg-white dark:bg-black p-1 rounded-full border border-gray-200 dark:border-neutral-700 shadow-sm">
                            <ArrowDown className="w-4 h-4 text-gray-500" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                        <div className="flex items-center space-x-2">
                            <span className="text-xl">🇹🇷</span>
                            <span className="font-bold text-gray-700 dark:text-gray-200">TRY</span>
                        </div>
                        <span className="font-mono font-bold text-gray-900 dark:text-white">34.52</span>
                    </div>
                </div>
            </div>

            {/* 24. Quick Note */}
            <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-3xl p-6 border border-yellow-200 dark:border-yellow-900/50 shadow-sm h-64 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-full"></div>
                <div className="flex items-center space-x-2 mb-3 text-yellow-800 dark:text-yellow-500">
                    <Edit3 className="w-5 h-5" />
                    <h3 className="font-bold">Hızlı Not</h3>
                </div>
                <textarea 
                    className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-yellow-900 dark:text-yellow-100 placeholder-yellow-700/50"
                    placeholder="Buraya bir not bırak..."
                    defaultValue="Yarın saat 14:00'te pazarlama ekibiyle toplantı var. Sunumu hazırlamayı unutma!"
                ></textarea>
                <div className="text-right text-[10px] text-yellow-700 dark:text-yellow-600 mt-2 font-medium">
                    Son düzenleme: 5dk önce
                </div>
            </div>

            {/* 25. Leaderboard */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white flex items-center">
                        <Trophy className="w-5 h-5 mr-2 text-amber-500" /> Liderlik Tablosu
                    </h3>
                </div>
                <div className="space-y-3 flex-1 overflow-y-auto custom-scrollbar pr-1">
                    {[
                        { name: 'Ahmet Y.', score: 2450, img: 1 },
                        { name: 'Merve K.', score: 2100, img: 2 },
                        { name: 'Canan S.', score: 1850, img: 3 },
                    ].map((user, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                            <div className="flex items-center space-x-3">
                                <span className={`font-bold w-4 text-center ${idx === 0 ? 'text-amber-500' : idx === 1 ? 'text-gray-400' : 'text-amber-700'}`}>{idx + 1}</span>
                                <img src={`https://picsum.photos/30/30?random=${user.img + 50}`} className="w-8 h-8 rounded-full" alt={user.name} />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{user.name}</span>
                            </div>
                            <span className="text-xs font-bold bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-lg">{user.score}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 26. Security Score */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col items-center justify-center text-center">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Güvenlik Skoru</h3>
                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="50%" cy="50%" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100 dark:text-neutral-900" />
                        <circle cx="50%" cy="50%" r="60" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="377" strokeDashoffset="37" strokeLinecap="round" className="text-emerald-500" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <ShieldCheck className="w-8 h-8 text-emerald-500 mb-1" />
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">90%</span>
                    </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Sisteminiz şu anda güvende.</p>
                <button className="mt-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">Raporu İncele</button>
            </div>

            {/* 27. Team Members */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-gray-900 dark:text-white">Ekip</h3>
                    <button className="text-xs font-bold text-blue-600 dark:text-blue-400">Tümü</button>
                </div>
                <div className="space-y-4 overflow-y-auto custom-scrollbar pr-1">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <img src={`https://picsum.photos/40/40?random=${i + 60}`} className="w-10 h-10 rounded-full" alt="User" />
                                    <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white dark:border-[#09090b] rounded-full ${i % 2 === 0 ? 'bg-emerald-500' : 'bg-gray-400'}`}></span>
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900 dark:text-white">Kullanıcı {i}</p>
                                    <p className="text-xs text-gray-500">Geliştirici</p>
                                </div>
                            </div>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full text-gray-400">
                                <MessageCircle className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* 28. Project Timeline */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">Proje Süreci</h3>
                <div className="relative flex-1 pl-4 border-l-2 border-gray-100 dark:border-neutral-800 space-y-6">
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white dark:border-[#09090b]"></div>
                        <p className="text-xs text-gray-400 mb-0.5">10:00 AM</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Tasarım Onayı</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#09090b]"></div>
                        <p className="text-xs text-gray-400 mb-0.5">02:00 PM</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Frontend Kodlama</p>
                    </div>
                    <div className="relative opacity-50">
                        <div className="absolute -left-[21px] top-1 w-4 h-4 rounded-full bg-gray-300 dark:bg-neutral-700 border-4 border-white dark:border-[#09090b]"></div>
                        <p className="text-xs text-gray-400 mb-0.5">Yarın</p>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">Test & Yayına Alma</p>
                    </div>
                </div>
            </div>

            {/* 29. Daily Quote */}
            <div className="bg-gradient-to-br from-violet-600 to-indigo-600 rounded-3xl p-8 text-white shadow-lg h-64 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <div className="text-4xl font-serif opacity-50 mb-2">"</div>
                    <p className="text-lg font-medium leading-relaxed mb-4">
                        Tasarım sadece nasıl göründüğü değil, nasıl çalıştığıdır.
                    </p>
                    <p className="text-sm font-bold opacity-80">— Steve Jobs</p>
                </div>
            </div>

            {/* 30. Network Speed */}
            <div className="bg-white dark:bg-[#09090b] rounded-3xl p-6 border border-gray-100 dark:border-neutral-800 shadow-sm h-64 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-gray-900 dark:text-white">Ağ Durumu</h3>
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                        <span className="text-xs text-emerald-500 font-bold">Excellent</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <ArrowDown className="w-6 h-6 text-blue-500 mb-2" />
                        <span className="text-xs text-gray-500">Download</span>
                        <span className="text-xl font-black text-gray-900 dark:text-white">124 <span className="text-xs font-normal">Mbps</span></span>
                    </div>
                    <div className="bg-gray-50 dark:bg-neutral-900 rounded-2xl p-4 flex flex-col justify-center items-center">
                        <ArrowUp className="w-6 h-6 text-purple-500 mb-2" />
                        <span className="text-xs text-gray-500">Upload</span>
                        <span className="text-xl font-black text-gray-900 dark:text-white">85 <span className="text-xs font-normal">Mbps</span></span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default WidgetsPage;
