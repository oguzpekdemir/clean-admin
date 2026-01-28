
// This service simulates a backend API. 
// In a real application, you would replace these Promise-based returns with axios.get/post calls.

export interface DashboardStats {
    revenue: string;
    revenueTrend: number;
    activeShoots: number;
    activeShootsTrend: number;
    pendingDelivery: number;
    totalCustomers: string;
}

export interface ChartData {
    labels: string[];
    values: number[];
}

export const MockService = {
    getDashboardStats: async (): Promise<DashboardStats> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    revenue: '₺284,500',
                    revenueTrend: 12,
                    activeShoots: 24,
                    activeShootsTrend: 4,
                    pendingDelivery: 12,
                    totalCustomers: '1,250'
                });
            }, 600); // Simulate network latency
        });
    },

    getRevenueChartData: async (): Promise<ChartData> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
                    values: [45, 60, 35, 70, 55, 80, 65, 90, 75, 60, 85, 95] // Percentages for demo
                });
            }, 500);
        });
    },

    getRecentOrders: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 202401, customer: 'Ahmet Yılmaz', email: 'ahmet@mail.com', items: 'Premium Fotoğraf Paketi (+2)', total: '₺1,250', status: 'Tamamlandı' },
                    { id: 202402, customer: 'Selin Demir', email: 'selin@mail.com', items: 'Düğün Albümü (S)', total: '₺850', status: 'Hazırlanıyor' },
                    { id: 202403, customer: 'Canan K.', email: 'canan@mail.com', items: 'Drone Çekimi 4K', total: '₺3,200', status: 'Tamamlandı' },
                    { id: 202404, customer: 'Mehmet Öz', email: 'mehmet@mail.com', items: 'Stüdyo Kiralama (2 Saat)', total: '₺1,000', status: 'Tamamlandı' },
                    { id: 202405, customer: 'Zeynep Su', email: 'zeynep@mail.com', items: 'Ham Fotoğraf Teslimi', total: '₺400', status: 'Tamamlandı' },
                ]);
            }, 800);
        });
    },

    getTasks: async () => {
        return [
            { id: 1, text: 'Ahmet & Ayşe düğün fotoğraflarını düzenle', completed: false, tag: 'Acil' },
            { id: 2, text: 'Moda çekimi için fatura oluştur', completed: true, tag: 'Finans' },
            { id: 3, text: 'Yeni lens ekipmanlarını kontrol et', completed: false, tag: 'Ekipman' },
            { id: 4, text: 'Web sitesi portfolyosunu güncelle', completed: false, tag: 'Pazarlama' },
        ];
    }
};
