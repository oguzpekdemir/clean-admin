
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Modal from './Modal';
import { useToast } from '../context/ToastContext';

interface Event {
    day: number;
    month: number; // 0-11
    title: string;
    color: string;
}

const CalendarPage: React.FC = () => {
    const { addToast } = useToast();
    const days = ['Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct', 'Pz'];
    
    // State
    const [currentMonth, setCurrentMonth] = useState(9); // Oct (0-indexed)
    const [currentYear, setCurrentYear] = useState(2026);
    const [isEventModalOpen, setIsEventModalOpen] = useState(false);
    const [newEventTitle, setNewEventTitle] = useState('');
    const [selectedDay, setSelectedDay] = useState(1);

    const [events, setEvents] = useState<Event[]>([
        { day: 5, month: 9, title: 'Moda Çekimi', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
        { day: 12, month: 9, title: 'Müşteri Toplantısı', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
        { day: 12, month: 9, title: 'Teslimat', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' },
        { day: 18, month: 9, title: 'Stüdyo Bakım', color: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300' },
        { day: 24, month: 9, title: 'Düğün: A&B', color: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300' },
    ]);

    const changeMonth = (delta: number) => {
        let nextMonth = currentMonth + delta;
        let nextYear = currentYear;

        if (nextMonth > 11) {
            nextMonth = 0;
            nextYear++;
        } else if (nextMonth < 0) {
            nextMonth = 11;
            nextYear--;
        }
        setCurrentMonth(nextMonth);
        setCurrentYear(nextYear);
    };

    const handleAddEvent = () => {
        if (!newEventTitle) return;
        const newEvent: Event = {
            day: selectedDay,
            month: currentMonth,
            title: newEventTitle,
            color: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
        };
        setEvents([...events, newEvent]);
        setNewEventTitle('');
        setIsEventModalOpen(false);
        addToast('Etkinlik eklendi', 'success');
    };

    // Simple calendar logic
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayIndex = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7; // Monday start
    
    const calendarDays = Array.from({ length: 42 }, (_, i) => {
        const day = i - firstDayIndex + 1;
        return (day > 0 && day <= daysInMonth) ? day : null;
    });

    const monthNames = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];

    return (
        <div className="space-y-6 h-full flex flex-col animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-4 justify-between w-full sm:w-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{monthNames[currentMonth]} {currentYear}</h2>
                    <div className="flex items-center space-x-1 bg-white dark:bg-[#09090b] rounded-lg border border-gray-200 dark:border-neutral-800 p-1">
                        <button onClick={() => changeMonth(-1)} className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md dark:text-gray-300"><ChevronLeft className="w-5 h-5" /></button>
                        <button onClick={() => changeMonth(1)} className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-md dark:text-gray-300"><ChevronRight className="w-5 h-5" /></button>
                    </div>
                </div>
                <div className="flex space-x-2 w-full sm:w-auto">
                    <button onClick={() => { setCurrentMonth(new Date().getMonth()); setCurrentYear(new Date().getFullYear()); }} className="flex-1 sm:flex-none bg-white dark:bg-[#09090b] border border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">Bugün</button>
                    <button onClick={() => setIsEventModalOpen(true)} className="flex-1 sm:flex-none bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                        <Plus className="w-4 h-4 mr-2" /> Etkinlik
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm flex-1 flex flex-col overflow-hidden">
                <div className="overflow-x-auto h-full flex flex-col">
                    <div className="min-w-[600px] h-full flex flex-col">
                        {/* Header Days */}
                        <div className="grid grid-cols-7 border-b border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/30">
                            {days.map(day => (
                                <div key={day} className="py-3 text-center text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    {day}
                                </div>
                            ))}
                        </div>
                        
                        {/* Grid */}
                        <div className="grid grid-cols-7 flex-1 auto-rows-fr">
                            {calendarDays.map((day, idx) => {
                                // Filter events for this day
                                const dayEvents = events.filter(e => e.day === day && e.month === currentMonth);
                                const isToday = day === new Date().getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear();

                                return (
                                    <div 
                                        key={idx}
                                        onClick={() => { if(day) { setSelectedDay(day); setIsEventModalOpen(true); } }}
                                        className={`
                                            border-b border-r border-gray-100 dark:border-neutral-800 p-1 md:p-2 min-h-[80px] md:min-h-[100px] relative hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer
                                            ${idx % 7 === 6 ? 'border-r-0' : ''}
                                            ${!day ? 'bg-gray-50/50 dark:bg-neutral-900/30 cursor-default' : ''}
                                        `}
                                    >
                                        {day && (
                                            <>
                                                <span className={`text-xs md:text-sm font-medium w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full ${isToday ? 'bg-black dark:bg-white text-white dark:text-black' : 'text-gray-700 dark:text-gray-300'}`}>
                                                    {day}
                                                </span>
                                                <div className="mt-1 md:mt-2 space-y-1 overflow-y-auto max-h-[50px] md:max-h-[80px] custom-scrollbar">
                                                    {dayEvents.map((evt, i) => (
                                                        <div key={i} className={`text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-md truncate ${evt.color}`}>
                                                            {evt.title}
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={isEventModalOpen}
                onClose={() => setIsEventModalOpen(false)}
                title="Yeni Etkinlik Ekle"
                footer={
                    <>
                        <button onClick={() => setIsEventModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                        <button onClick={handleAddEvent} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Ekle</button>
                    </>
                }
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Tarih</label>
                        <div className="text-sm font-medium text-gray-900 dark:text-white px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                            {selectedDay} {monthNames[currentMonth]} {currentYear}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Etkinlik Başlığı</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white"
                            placeholder="Toplantı, Çekim vb."
                            value={newEventTitle}
                            onChange={(e) => setNewEventTitle(e.target.value)}
                            autoFocus
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CalendarPage;
