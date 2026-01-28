
import React, { useState } from 'react';
import { Plus, MoreHorizontal, MessageSquare, Paperclip, Clock, Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import Modal from './Modal';
import { useToast } from '../context/ToastContext';

interface Task {
    id: number;
    title: string;
    desc?: string;
    tags: { label: string; color: string }[];
    members: string[];
    comments: number;
    attachments: number;
    dueDate?: string;
}

interface Column {
    id: string;
    title: string;
    tasks: Task[];
    color: string;
}

const KanbanPage: React.FC = () => {
    const { addToast } = useToast();
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [selectedColumnId, setSelectedColumnId] = useState('todo');
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const [columns, setColumns] = useState<Column[]>([
        {
            id: 'todo',
            title: 'Yapılacaklar',
            color: 'bg-gray-200 dark:bg-gray-700',
            tasks: [
                {
                    id: 1,
                    title: 'Yeni Galeri Tasarımı',
                    desc: 'Moda A.Ş. için anasayfa galeri düzenlemesi.',
                    tags: [{ label: 'Tasarım', color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400' }],
                    members: ['1', '2'],
                    comments: 3,
                    attachments: 2,
                    dueDate: 'Yarın'
                },
                {
                    id: 2,
                    title: 'Rakip Analizi',
                    tags: [{ label: 'Pazarlama', color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400' }],
                    members: ['3'],
                    comments: 1,
                    attachments: 0
                }
            ]
        },
        {
            id: 'progress',
            title: 'Devam Edenler',
            color: 'bg-blue-200 dark:bg-blue-900/50',
            tasks: [
                {
                    id: 3,
                    title: 'Backend API Entegrasyonu',
                    desc: 'Upload endpointlerindeki hatanın giderilmesi.',
                    tags: [{ label: 'Dev', color: 'bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400' }, { label: 'API', color: 'bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400' }],
                    members: ['1', '4', '5'],
                    comments: 12,
                    attachments: 4,
                    dueDate: '2 Gün'
                }
            ]
        },
        {
            id: 'review',
            title: 'İncelemede',
            color: 'bg-amber-200 dark:bg-amber-900/50',
            tasks: [
                {
                    id: 4,
                    title: 'Logo Revizyonları',
                    tags: [{ label: 'Marka', color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400' }],
                    members: ['2'],
                    comments: 5,
                    attachments: 8
                }
            ]
        },
        {
            id: 'done',
            title: 'Tamamlandı',
            color: 'bg-emerald-200 dark:bg-emerald-900/50',
            tasks: [
                 {
                    id: 5,
                    title: 'Sunucu Bakımı',
                    tags: [{ label: 'Ops', color: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300' }],
                    members: ['1'],
                    comments: 0,
                    attachments: 0,
                    dueDate: 'Dün'
                }
            ]
        }
    ]);

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle) return;

        const newTask: Task = {
            id: Date.now(),
            title: newTaskTitle,
            tags: [],
            members: [],
            comments: 0,
            attachments: 0
        };

        const updatedColumns = columns.map(col => {
            if (col.id === selectedColumnId) {
                return { ...col, tasks: [...col.tasks, newTask] };
            }
            return col;
        });

        setColumns(updatedColumns);
        setNewTaskTitle('');
        setIsTaskModalOpen(false);
        addToast('Görev başarıyla eklendi', 'success');
    };

    const handleDeleteTask = (colId: string, taskId: number) => {
        if(window.confirm('Bu görevi silmek istediğinize emin misiniz?')) {
            const updatedColumns = columns.map(col => {
                if (col.id === colId) {
                    return { ...col, tasks: col.tasks.filter(t => t.id !== taskId) };
                }
                return col;
            });
            setColumns(updatedColumns);
            addToast('Görev silindi', 'info');
        }
    };

    const moveTask = (fromColId: string, toColIdx: number, task: Task) => {
        if (toColIdx < 0 || toColIdx >= columns.length) return;

        const updatedColumns = [...columns];
        
        // Remove from old
        const fromColIndex = updatedColumns.findIndex(c => c.id === fromColId);
        updatedColumns[fromColIndex].tasks = updatedColumns[fromColIndex].tasks.filter(t => t.id !== task.id);

        // Add to new
        updatedColumns[toColIdx].tasks.push(task);

        setColumns(updatedColumns);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Proje Yönetimi</h2>
                <button 
                    onClick={() => { setSelectedColumnId('todo'); setIsTaskModalOpen(true); }}
                    className="bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center justify-center shadow-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full sm:w-auto"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Yeni Görev
                </button>
            </div>

            <div className="flex-1 overflow-x-auto overflow-y-hidden pb-4">
                <div className="flex h-full space-x-4 md:space-x-6 min-w-max px-1">
                    {columns.map((col, colIdx) => (
                        <div key={col.id} className="w-72 md:w-80 flex flex-col flex-shrink-0 animate-fade-in-up" style={{ animationDelay: `${colIdx * 100}ms` }}>
                            <div className="flex items-center justify-between mb-4 px-1">
                                <div className="flex items-center space-x-2">
                                    <span className={`w-3 h-3 rounded-full ${col.color.replace('bg-', 'bg-').replace('200', '500')}`}></span>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-sm">{col.title}</h3>
                                    <span className="bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">{col.tasks.length}</span>
                                </div>
                                <button onClick={() => { setSelectedColumnId(col.id); setIsTaskModalOpen(true); }} className="text-gray-400 hover:text-black dark:hover:text-white">
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex-1 bg-gray-100 dark:bg-[#111] rounded-3xl p-3 space-y-3 overflow-y-auto custom-scrollbar border border-transparent dark:border-neutral-800">
                                {col.tasks.map((task) => (
                                    <div key={task.id} className="bg-white dark:bg-[#09090b] p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 group hover:shadow-md transition-all relative">
                                        
                                        {/* Task Actions Overlay */}
                                        <div className="absolute top-2 right-2 flex space-x-1 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 dark:bg-[#09090b]/90 p-1 rounded-lg shadow-sm z-10 backdrop-blur-sm">
                                            {colIdx > 0 && (
                                                <button onClick={() => moveTask(col.id, colIdx - 1, task)} className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded" title="Sola Taşı">
                                                    <ArrowLeft className="w-3 h-3" />
                                                </button>
                                            )}
                                            <button onClick={() => handleDeleteTask(col.id, task.id)} className="p-1 hover:bg-rose-50 dark:hover:bg-rose-900/30 text-rose-500 rounded" title="Sil">
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                            {colIdx < columns.length - 1 && (
                                                <button onClick={() => moveTask(col.id, colIdx + 1, task)} className="p-1 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded" title="Sağa Taşı">
                                                    <ArrowRight className="w-3 h-3" />
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex justify-between items-start mb-2">
                                            <div className="flex flex-wrap gap-1 max-w-[85%]">
                                                {task.tags.map((tag, i) => (
                                                    <span key={i} className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${tag.color}`}>
                                                        {tag.label}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1 leading-snug">{task.title}</h4>
                                        {task.desc && <p className="text-xs text-gray-500 dark:text-neutral-400 mb-3 line-clamp-2">{task.desc}</p>}
                                        
                                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50 dark:border-neutral-800">
                                            <div className="flex -space-x-2">
                                                {task.members.length > 0 ? task.members.map((m, i) => (
                                                    <img key={i} src={`https://picsum.photos/24/24?random=${m}`} className="w-6 h-6 rounded-full border-2 border-white dark:border-[#09090b]" alt="" />
                                                )) : <span className="text-[10px] text-gray-400 italic">Atanmamış</span>}
                                            </div>
                                            <div className="flex items-center space-x-3 text-gray-400 text-xs">
                                                {task.dueDate && (
                                                    <div className="flex items-center text-rose-500 dark:text-rose-400 font-medium">
                                                        <Clock className="w-3.5 h-3.5 mr-1" />
                                                        {task.dueDate}
                                                    </div>
                                                )}
                                                {(task.comments > 0 || task.attachments > 0) && (
                                                    <div className="flex space-x-2">
                                                        {task.comments > 0 && <span className="flex items-center"><MessageSquare className="w-3.5 h-3.5 mr-1" />{task.comments}</span>}
                                                        {task.attachments > 0 && <span className="flex items-center"><Paperclip className="w-3.5 h-3.5 mr-1" />{task.attachments}</span>}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <button 
                                    onClick={() => { setSelectedColumnId(col.id); setIsTaskModalOpen(true); }}
                                    className="w-full py-2 text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 border border-dashed border-gray-300 dark:border-neutral-700 rounded-xl transition-colors"
                                >
                                    + Görev Ekle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                title="Yeni Görev Oluştur"
                footer={
                    <>
                        <button onClick={() => setIsTaskModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                        <button onClick={handleAddTask} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Oluştur</button>
                    </>
                }
            >
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Görev Başlığı</label>
                        <input 
                            type="text" 
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" 
                            placeholder="Ne yapılması gerekiyor?"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            autoFocus
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Sütun</label>
                        <select 
                            className="w-full px-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white"
                            value={selectedColumnId}
                            onChange={(e) => setSelectedColumnId(e.target.value)}
                        >
                            {columns.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                        </select>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default KanbanPage;
