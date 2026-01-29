
import React from 'react';
import { Skeleton, SkeletonStatCard, SkeletonTable, SkeletonWidget } from './Skeleton';

const SkeletonsPage: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">İskelet Yapılar (Skeletons)</h2>
            <p className="text-gray-500 dark:text-neutral-400 mt-2">
                Veri yüklenirken kullanıcı deneyimini iyileştiren yer tutucu animasyonlar.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Basic Skeletons */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Temel Bileşenler</h3>
                <div className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm space-y-4">
                    <div className="flex items-center space-x-4">
                        <Skeleton className="w-12 h-12 rounded-full" />
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-24" />
                        </div>
                    </div>
                    <Skeleton className="h-24 w-full rounded-xl" />
                    <div className="flex space-x-4">
                        <Skeleton className="h-10 w-24 rounded-lg" />
                        <Skeleton className="h-10 w-24 rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Stat Cards */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">İstatistik Kartları</h3>
                <div className="grid grid-cols-2 gap-4">
                    <SkeletonStatCard />
                    <SkeletonStatCard />
                </div>
            </div>

            {/* Widgets */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Widget / Grafik</h3>
                <div className="grid grid-cols-1 gap-4">
                    <SkeletonWidget height="h-64" />
                </div>
            </div>

            {/* Table */}
            <div className="space-y-6">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Veri Tablosu</h3>
                <SkeletonTable rows={4} />
            </div>
        </div>
    </div>
  );
};

export default SkeletonsPage;
