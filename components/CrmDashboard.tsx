
import React, { useState, useEffect } from 'react';
import { 
    Filter, Phone, Mail, Calendar, MoreVertical, Plus, CheckCircle, 
    Clock, DollarSign, User, Search, ArrowUpRight, ArrowDownRight, 
    Briefcase, MoreHorizontal, ChevronRight, X 
} from 'lucide-react';
import { useToast } from '../context/ToastContext';
import Modal from './Modal';
import Drawer from './Drawer';
import { SkeletonStatCard, SkeletonTable, Skeleton } from './Skeleton';

interface Customer {
    id: number;
    name: string;
    role: string;
    company: string;
    status: string;
    value: string;
    last: string;
    img: number;
    email: string;
    phone: string;
}

const CrmDashboard: React.FC = () => {
    const { addToast } = useToast();
    const [isLoading, setIsLoading] = useState(true);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

    // Mock Customer Data
    const [customers, setCustomers] = useState<Customer[]>([
        { id: 1, name: 'Ayşe Yılmaz', role: 'CEO', company: 'Moda A.Ş.', status: 'Aktif', value: '₺12,500', last: '2 gün önce', img: 40, email: 'ayse@moda.com', phone: '+90 555 123 4567' },
        { id: 2, name: 'Mehmet Demir', role: 'CTO', company: 'Tech Start', status: 'Lead', value: '₺45,000', last: 'Bugün', img: 41, email: 'mehmet@tech.com', phone: '+90 532 987 6543' },
        { id: 3, name: 'Zeynep Kaya', role: 'Pazarlama', company: 'Global Lojistik', status: 'Pazarlık', value: '₺8,200', last: '1 hafta önce', img: 42, email: 'zeynep@global.com', phone: '+90 505 555 1122' },
        { id: 4, name: 'Ali Vural', role: 'Satınalma', company: 'Yapı İnşaat', status: 'Kazanıldı', value: '₺120,000', last: '3 gün önce', img: 43, email: 'ali@yapi.com', phone: '+90 544 222 3344' },
        { id: 5, name: 'Selin Koç', role: 'IK Müdürü', company: 'Finans Grubu', status: 'Kaybedildi', value: '₺0', last: '1 ay önce', img: 44, email: 'selin@finans.com', phone: '+90 533 666 7788' },
    ]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 900);
        return () => clearTimeout(timer);
    }, []);

    const handleAddCustomer = (e: React.FormEvent) => {
        e.preventDefault();
        setIsAddModalOpen(false);
        addToast('Yeni müşteri başarıyla eklendi.', 'success');
        // In a real app, you would gather form data and update the state
    };

    const openCustomerDetails = (customer: Customer) => {
        setSelectedCustomer(customer);
        setIsDetailsOpen(true);
    };

    if (isLoading) {
        return (
            <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center">
                    <div className="space-y-2">
                        <Skeleton className="h-8 w-64" />
                        <Skeleton className="h-4 w-96" />
                    </div>
                    <div className="flex space-x-3">
                        <Skeleton className="h-10 w-24 rounded-xl" />
                        <Skeleton className="h-10 w-32 rounded-xl" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[1,2,3,4].map(i => <SkeletonStatCard key={i} />)}
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <div className="xl:col-span-2 space-y-6">
                        <Skeleton className="h-48 rounded-3xl" />
                        <SkeletonTable rows={5} />
                    </div>
                    <div className="space-y-6">
                        <Skeleton className="h-64 rounded-3xl" />
                        <Skeleton className="h-80 rounded-3xl" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Müşteri İlişkileri (CRM)</h1>
                    <p className="text-gray-500 dark:text-neutral-400 text-sm mt-1">Satış süreçlerini, müşterileri ve fırsatları tek yerden yönetin.</p>
                </div>
                <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 flex items-center">
                        <Filter className="w-4 h-4 mr-2" /> Filtrele
                    </button>
                    <button 
                        onClick={() => setIsAddModalOpen(true)}
                        className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 flex items-center shadow-lg whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4 mr-2" /> Yeni Müşteri
                    </button>
                </div>
            </div>

            {/* High-Level Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
                            <User className="w-5 h-5" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                            +12% <ArrowUpRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium">Toplam Müşteri</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">2,543</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-purple-50 dark:bg-purple-900/20 rounded-xl text-purple-600 dark:text-purple-400">
                            <Briefcase className="w-5 h-5" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                            +5% <ArrowUpRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium">Aktif Fırsatlar</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">45</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl text-emerald-600 dark:text-emerald-400">
                            <DollarSign className="w-5 h-5" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-900/30 px-2 py-1 rounded-lg">
                            -2% <ArrowDownRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium">Beklenen Gelir</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">₺845K</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2.5 bg-amber-50 dark:bg-amber-900/20 rounded-xl text-amber-600 dark:text-amber-400">
                            <Clock className="w-5 h-5" />
                        </div>
                        <span className="flex items-center text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-lg">
                            +24% <ArrowUpRight className="w-3 h-3 ml-1" />
                        </span>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 font-medium">Dönüşüm Oranı</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">18.2%</h3>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Main Left Column */}
                <div className="xl:col-span-2 space-y-6">
                    
                    {/* Visual Sales Pipeline */}
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Satış Hunisi</h3>
                            <button className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">Detaylı Görünüm</button>
                        </div>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                            {[
                                { stage: 'Yeni Lead', count: 12, val: '₺120K', color: 'bg-gray-100 dark:bg-neutral-800' },
                                { stage: 'İletişim', count: 8, val: '₺85K', color: 'bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30' },
                                { stage: 'Teklif', count: 5, val: '₺240K', color: 'bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/30' },
                                { stage: 'Pazarlık', count: 3, val: '₺150K', color: 'bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-900/30' },
                                { stage: 'Kazanılan', count: 17, val: '₺450K', color: 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-900/30' },
                            ].map((item, i) => (
                                <div key={i} className={`p-4 rounded-2xl flex flex-col items-center justify-center text-center ${item.color} relative overflow-hidden group cursor-pointer`}>
                                    <span className="text-xs font-bold text-gray-500 dark:text-neutral-400 uppercase mb-1">{item.stage}</span>
                                    <span className="text-xl font-black text-gray-900 dark:text-white">{item.count}</span>
                                    <span className="text-[10px] font-bold text-gray-400 mt-1 opacity-80 group-hover:opacity-100">{item.val}</span>
                                    {i < 4 && (
                                        <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 bg-white dark:bg-[#09090b] rotate-45 transform z-10 border-t border-r border-gray-100 dark:border-neutral-800 rounded-sm"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Customer Table */}
                    <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Müşteri Listesi</h3>
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="İsim, şirket veya e-posta..." 
                                    className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white outline-none dark:text-white"
                                />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 dark:bg-neutral-900 text-xs uppercase text-gray-500 dark:text-neutral-400 font-bold">
                                    <tr>
                                        <th className="px-6 py-4 whitespace-nowrap">Müşteri</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Şirket</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Durum</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Değer</th>
                                        <th className="px-6 py-4 whitespace-nowrap">Son Temas</th>
                                        <th className="px-6 py-4 text-right whitespace-nowrap">İşlem</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-neutral-800">
                                    {customers.map((client) => (
                                        <tr 
                                            key={client.id} 
                                            onClick={() => openCustomerDetails(client)}
                                            className="hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors group cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center space-x-3">
                                                    <img src={`https://picsum.photos/32/32?random=${client.img}`} className="w-9 h-9 rounded-full border border-gray-100 dark:border-neutral-700" alt="" />
                                                    <div>
                                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{client.name}</p>
                                                        <p className="text-xs text-gray-500">{client.role}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">
                                                {client.company}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border whitespace-nowrap ${
                                                    client.status === 'Aktif' || client.status === 'Kazanıldı' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' :
                                                    client.status === 'Kaybedildi' ? 'bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/30' :
                                                    client.status === 'Pazarlık' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/30' :
                                                    'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/30'
                                                }`}>
                                                    {client.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-900 dark:text-white">
                                                {client.value}
                                            </td>
                                            <td className="px-6 py-4 text-xs text-gray-500 dark:text-neutral-400 whitespace-nowrap">
                                                {client.last}
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end space-x-2">
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); addToast('Arama başlatılıyor...', 'info') }} 
                                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500"
                                                    >
                                                        <Phone className="w-4 h-4" />
                                                    </button>
                                                    <button 
                                                        onClick={(e) => { e.stopPropagation(); addToast('E-posta istemcisi açılıyor...', 'info') }} 
                                                        className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500"
                                                    >
                                                        <Mail className="w-4 h-4" />
                                                    </button>
                                                    <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500">
                                                        <MoreHorizontal className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="p-4 border-t border-gray-100 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/30 text-center">
                            <button className="text-sm font-bold text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">Tüm Müşterileri Görüntüle</button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Activity & Tasks */}
                <div className="space-y-6">
                    
                    {/* Tasks Widget */}
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-gray-900 dark:text-white">Bugünkü Görevler</h3>
                            <span className="bg-black dark:bg-white text-white dark:text-black text-[10px] font-bold px-2 py-0.5 rounded-full">4</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { task: 'Tech Start ile toplantı', time: '14:00', type: 'Meeting', color: 'bg-purple-500' },
                                { task: 'Ayşe Yılmaz\'ı ara', time: '15:30', type: 'Call', color: 'bg-blue-500' },
                                { task: 'Teklif revizesi gönder', time: '17:00', type: 'Email', color: 'bg-amber-500' },
                                { task: 'Haftalık rapor', time: '18:00', type: 'Internal', color: 'bg-gray-500' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer group">
                                    <div className={`w-1 h-8 rounded-full ${item.color} mr-3`}></div>
                                    <div className="flex-1">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white leading-tight group-hover:underline">{item.task}</p>
                                        <p className="text-xs text-gray-500 mt-0.5">{item.time} • {item.type}</p>
                                    </div>
                                    <button className="text-gray-300 hover:text-emerald-500">
                                        <CheckCircle className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-4 py-2 text-xs font-bold text-gray-500 dark:text-neutral-400 hover:text-black dark:hover:text-white flex items-center justify-center border border-dashed border-gray-200 dark:border-neutral-700 rounded-xl">
                            + Görev Ekle
                        </button>
                    </div>

                    {/* Activity Timeline */}
                    <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold text-gray-900 dark:text-white">Son Aktiviteler</h3>
                        </div>
                        <div className="space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute top-2 bottom-2 left-[19px] w-0.5 bg-gray-100 dark:bg-neutral-800"></div>

                            {[
                                { title: 'Teklif Kabul Edildi', desc: 'Global Lojistik teklifi onayladı.', time: '2s önce', icon: CheckCircle, color: 'bg-emerald-500 text-white' },
                                { title: 'Yeni Lead', desc: 'Web formundan yeni talep geldi.', time: '12dk önce', icon: User, color: 'bg-blue-500 text-white' },
                                { title: 'E-posta Gönderildi', desc: 'Mehmet Bey\'e sunum iletildi.', time: '1s önce', icon: Mail, color: 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400' },
                                { title: 'Toplantı Notu', desc: 'Fiyatlandırma konuşuldu.', time: '2s önce', icon: Calendar, color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400' },
                            ].map((act, i) => (
                                <div key={i} className="flex relative z-10">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white dark:border-[#09090b] ${act.color}`}>
                                        <act.icon className="w-4 h-4" />
                                    </div>
                                    <div className="ml-3 pt-1">
                                        <p className="text-sm font-bold text-gray-900 dark:text-white">{act.title}</p>
                                        <p className="text-xs text-gray-500 dark:text-neutral-400 mt-0.5">{act.desc}</p>
                                        <span className="text-[10px] text-gray-400 block mt-1">{act.time}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Add Customer Modal */}
            <Modal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                title="Yeni Müşteri Ekle"
                footer={
                    <>
                        <button onClick={() => setIsAddModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                        <button onClick={handleAddCustomer} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Kaydet</button>
                    </>
                }
            >
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Ad</label>
                            <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Soyad</label>
                            <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Şirket</label>
                        <input type="text" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">E-posta</label>
                        <input type="email" className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Durum</label>
                        <select className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white">
                            <option>Potansiyel (Lead)</option>
                            <option>İletişimde</option>
                            <option>Kazanıldı</option>
                        </select>
                    </div>
                </div>
            </Modal>

            {/* Customer Details Drawer */}
            <Drawer
                isOpen={isDetailsOpen}
                onClose={() => setIsDetailsOpen(false)}
                title="Müşteri Detayları"
                footer={
                    <div className="flex justify-end space-x-3">
                        <button onClick={() => setIsDetailsOpen(false)} className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 dark:text-white">Kapat</button>
                        <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90">Düzenle</button>
                    </div>
                }
            >
                {selectedCustomer && (
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 mb-6">
                            <img src={`https://picsum.photos/80/80?random=${selectedCustomer.img}`} className="w-20 h-20 rounded-full border-4 border-gray-50 dark:border-neutral-800" alt="" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedCustomer.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400">{selectedCustomer.role} @ {selectedCustomer.company}</p>
                                <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-bold bg-gray-100 dark:bg-neutral-800`}>{selectedCustomer.status}</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 dark:bg-neutral-900 rounded-2xl space-y-3">
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                    <Mail className="w-4 h-4 mr-3 text-gray-400" />
                                    {selectedCustomer.email}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                    <Phone className="w-4 h-4 mr-3 text-gray-400" />
                                    {selectedCustomer.phone}
                                </div>
                                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                    <DollarSign className="w-4 h-4 mr-3 text-gray-400" />
                                    Potansiyel Değer: <span className="font-bold ml-1 text-gray-900 dark:text-white">{selectedCustomer.value}</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">Notlar</h4>
                                <textarea className="w-full p-3 bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 rounded-xl text-sm min-h-[100px]" placeholder="Müşteri hakkında notlar..." defaultValue="Geçen toplantıda fiyat konusunda hassas olduklarını belirttiler." />
                            </div>
                        </div>
                    </div>
                )}
            </Drawer>
        </div>
    );
};

export default CrmDashboard;
