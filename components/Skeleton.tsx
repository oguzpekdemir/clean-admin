
import React from 'react';

// Base Skeleton Primitive
export const Skeleton: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ className, style }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-neutral-800 rounded ${className || ''}`} style={style} />
);

// Specific Skeleton for Stats Cards
export const SkeletonStatCard: React.FC = () => (
  <div className="bg-white dark:bg-[#09090b] p-5 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-32" />
      </div>
      <Skeleton className="w-10 h-10 rounded-2xl" />
    </div>
    <div className="flex items-center space-x-2">
      <Skeleton className="h-4 w-12" />
      <Skeleton className="h-4 w-20" />
    </div>
  </div>
);

// Specific Skeleton for Tables
export const SkeletonTable: React.FC<{ rows?: number }> = ({ rows = 5 }) => (
  <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden p-6">
    <div className="flex justify-between items-center mb-6">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-8 w-24 rounded-xl" />
    </div>
    <div className="space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                </div>
                <Skeleton className="h-8 w-20 rounded-lg" />
            </div>
        ))}
    </div>
  </div>
);

// Specific Skeleton for Charts/Widgets
export const SkeletonWidget: React.FC<{ height?: string }> = ({ height = "h-64" }) => (
    <div className={`bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm ${height} flex flex-col`}>
        <div className="flex justify-between mb-6">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-6" />
        </div>
        <div className="flex-1 flex items-end space-x-2">
            {[...Array(10)].map((_, i) => (
                <Skeleton key={i} className={`w-full rounded-t-lg`} style={{ height: `${Math.random() * 80 + 20}%` }} />
            ))}
        </div>
    </div>
);
