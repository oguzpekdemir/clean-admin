
import React from 'react';
import { Camera, Clock, CheckCircle, Download, TrendingUp, TrendingDown, DollarSign, Users } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    { 
        label: 'Toplam Gelir', 
        value: '₺124,500', 
        trend: '+12.5%', 
        trendUp: true, 
        icon: DollarSign, 
        color: 'text-emerald-600 dark:text-emerald-400', 
        bg: 'bg-emerald-50 dark:bg-emerald-900/20',
        desc: 'Geçen aya göre'
    },
    { 
        label: 'Aktif Çekimler', 
        value: '24', 
        trend: '+4', 
        trendUp: true, 
        icon: Camera, 
        color: 'text-blue-600 dark:text-blue-400', 
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        desc: 'Yeni eklenen'
    },
    { 
        label: 'Bekleyen Teslimat', 
        value: '12', 
        trend: '-2', 
        trendUp: false, 
        icon: Clock, 
        color: 'text-amber-600 dark:text-amber-400', 
        bg: 'bg-amber-50 dark:bg-amber-900/20',
        desc: 'Teslim süresi yaklaşan'
    },
    { 
        label: 'Toplam Müşteri', 
        value: '1,250', 
        trend: '+8.2%', 
        trendUp: true, 
        icon: Users, 
        color: 'text-purple-600 dark:text-purple-400', 
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        desc: 'Yıllık büyüme'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
          <div className="flex items-start justify-between mb-4">
            <div>
                <span className="text-sm text-gray-500 dark:text-neutral-400 font-medium">{stat.label}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
            <div className={`p-3 rounded-2xl ${stat.bg} group-hover:scale-110 transition-transform duration-300`}>
               <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </div>
          
          <div className="flex items-center text-xs">
            <span className={`flex items-center font-bold ${stat.trendUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                {stat.trendUp ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
                {stat.trend}
            </span>
            <span className="text-gray-400 dark:text-neutral-500 ml-2">{stat.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
