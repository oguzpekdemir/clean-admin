
import React, { useState } from 'react';
import { 
    Inbox, Star, Send, Trash2, Archive, AlertCircle, Search, 
    MoreHorizontal, RotateCw, ChevronLeft, ChevronRight, Paperclip, 
    Edit, X, Menu, ArrowLeft
} from 'lucide-react';
import Modal from './Modal';
import { useToast } from '../context/ToastContext';

type TabType = 'inbox' | 'starred' | 'sent' | 'spam' | 'trash';

const EmailPage: React.FC = () => {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState<TabType>('inbox');
  const [selectedMail, setSelectedMail] = useState<number | null>(null);
  const [isComposeOpen, setIsComposeOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [emails, setEmails] = useState([
      { id: 1, sender: 'Spotify', subject: 'Haftalık Keşif Çalmayı Unutma!', preview: 'Senin için hazırladığımız listeye göz at.', body: 'Merhaba, bu hafta senin için harika şarkılar seçtik.', date: '12:30', read: false, starred: false, folder: 'inbox' },
      { id: 2, sender: 'Ahmet Yılmaz', subject: 'Proje Revizesi Hk.', preview: 'Merhaba Oğuz, son gönderdiğin tasarımda...', body: 'Tasarımdaki header kısmını biraz daha büyütebilir miyiz?', date: '10:15', read: true, starred: true, folder: 'inbox' },
      { id: 3, sender: 'Dribbble', subject: 'Trending Designs of the Week', preview: 'Check out the most popular shots...', body: 'Top designs for you.', date: 'Dün', read: true, starred: false, folder: 'inbox' },
      { id: 4, sender: 'Amazon AWS', subject: 'Your AWS Bill for October', preview: 'Total amount due: $24.50...', body: 'Invoice details attached.', date: '20 Eki', read: true, starred: false, folder: 'inbox' },
      { id: 5, sender: 'Canan K.', subject: 'Toplantı Notları', preview: 'Selamlar, bugünkü toplantıda konuştuğumuz...', body: 'Notlar ektedir.', date: '19 Eki', read: false, starred: false, folder: 'inbox' },
      { id: 6, sender: 'Netflix', subject: 'Yeni Film Önerisi', preview: 'Senin zevkine uygun yeni bir film eklendi.', body: 'Hemen izle.', date: '18 Eki', read: true, starred: false, folder: 'spam' },
  ]);

  const filteredEmails = emails.filter(email => {
      // 1. Filter by Tab/Folder
      let matchesTab = false;
      if (activeTab === 'starred') matchesTab = email.starred;
      else matchesTab = email.folder === activeTab;

      // 2. Filter by Search
      const matchesSearch = email.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            email.sender.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesTab && matchesSearch;
  });

  const handleCompose = (e: React.FormEvent) => {
      e.preventDefault();
      setIsComposeOpen(false);
      addToast('E-posta başarıyla gönderildi!', 'success');
  };

  const toggleStar = (id: number, e: React.MouseEvent) => {
      e.stopPropagation();
      setEmails(emails.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
  };

  const deleteEmail = (id: number, e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      setEmails(emails.map(m => m.id === id ? { ...m, folder: 'trash' } : m));
      if (selectedMail === id) setSelectedMail(null);
      addToast('E-posta çöp kutusuna taşındı', 'info');
  };

  const getCount = (folder: string) => emails.filter(e => e.folder === folder).length;
  const getStarredCount = () => emails.filter(e => e.starred).length;

  const sidebarItems = [
      { id: 'inbox', icon: Inbox, label: 'Gelen Kutusu', count: getCount('inbox') },
      { id: 'starred', icon: Star, label: 'Yıldızlı', count: getStarredCount() },
      { id: 'sent', icon: Send, label: 'Gönderilenler', count: getCount('sent') },
      { id: 'spam', icon: AlertCircle, label: 'Spam', count: getCount('spam') },
      { id: 'trash', icon: Trash2, label: 'Çöp Kutusu', count: getCount('trash') },
  ];

  const currentMail = emails.find(m => m.id === selectedMail);

  return (
    <div className="h-[calc(100vh-8rem)] bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden flex animate-fade-in relative">
        
        {/* Mobile Menu Backdrop */}
        {isMobileMenuOpen && (
            <div 
                className="fixed inset-0 bg-black/50 z-20 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
            />
        )}

        {/* Sidebar */}
        <div className={`
            absolute md:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-[#09090b] border-r border-gray-100 dark:border-neutral-800 flex flex-col transition-transform duration-300
            ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
            <div className="p-6">
                <button 
                    onClick={() => { setIsComposeOpen(true); setIsMobileMenuOpen(false); }}
                    className="w-full py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-bold shadow-lg shadow-black/20 dark:shadow-white/10 hover:opacity-90 transition-all flex items-center justify-center"
                >
                    <Edit className="w-4 h-4 mr-2" /> Oluştur
                </button>
            </div>
            <nav className="flex-1 space-y-1 px-3">
                {sidebarItems.map((item) => (
                    <button 
                        key={item.id} 
                        onClick={() => { setActiveTab(item.id as TabType); setSelectedMail(null); setIsMobileMenuOpen(false); }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${activeTab === item.id ? 'bg-gray-100 dark:bg-neutral-800 text-black dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}
                    >
                        <div className="flex items-center space-x-3">
                            <item.icon className="w-4 h-4" />
                            <span>{item.label}</span>
                        </div>
                        {item.count > 0 && <span className="text-xs font-bold bg-gray-200 dark:bg-neutral-700 px-2 py-0.5 rounded-md">{item.count}</span>}
                    </button>
                ))}
            </nav>
        </div>

        {/* Mail List */}
        <div className={`flex-1 flex flex-col border-r border-gray-100 dark:border-neutral-800 w-full ${selectedMail !== null ? 'hidden lg:flex lg:w-96 lg:flex-none' : 'flex'}`}>
             <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg">
                            <Menu className="w-5 h-5 text-gray-700 dark:text-gray-200" />
                        </button>
                        <h3 className="font-bold text-gray-900 dark:text-white capitalize">{activeTab === 'inbox' ? 'Gelen Kutusu' : activeTab}</h3>
                    </div>
                    <button onClick={() => window.location.reload()} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg"><RotateCw className="w-4 h-4 text-gray-500" /></button>
                </div>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="E-posta ara..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm outline-none dark:text-white"
                    />
                </div>
             </div>
             <div className="flex-1 overflow-y-auto custom-scrollbar">
                 {filteredEmails.length > 0 ? filteredEmails.map((mail) => (
                     <div 
                        key={mail.id} 
                        onClick={() => setSelectedMail(mail.id)}
                        className={`p-4 border-b border-gray-50 dark:border-neutral-900 cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900/50 transition-colors group ${selectedMail === mail.id ? 'bg-blue-50/50 dark:bg-blue-900/10 border-l-4 border-l-blue-500' : 'border-l-4 border-l-transparent'}`}
                     >
                         <div className="flex justify-between items-start mb-1">
                             <span className={`text-sm font-bold truncate pr-2 ${!mail.read ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>{mail.sender}</span>
                             <span className="text-xs text-gray-400 whitespace-nowrap">{mail.date}</span>
                         </div>
                         <h4 className={`text-sm mb-1 truncate ${!mail.read ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-300'}`}>{mail.subject}</h4>
                         <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{mail.preview}</p>
                         
                         <div className="flex justify-end mt-2 md:opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
                             <button onClick={(e) => toggleStar(mail.id, e)} className="p-1 hover:bg-gray-200 dark:hover:bg-neutral-800 rounded">
                                 <Star className={`w-4 h-4 ${mail.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'}`} />
                             </button>
                             <button onClick={(e) => deleteEmail(mail.id, e)} className="p-1 hover:bg-rose-100 dark:hover:bg-rose-900/30 rounded text-rose-500">
                                 <Trash2 className="w-4 h-4" />
                             </button>
                         </div>
                     </div>
                 )) : (
                     <div className="p-8 text-center text-gray-400 dark:text-neutral-500 text-sm">
                         E-posta bulunamadı.
                     </div>
                 )}
             </div>
        </div>

        {/* Mail Content (Full screen on mobile/tablet when selected) */}
        <div className={`flex-[2] flex flex-col bg-white dark:bg-[#09090b] w-full ${selectedMail === null ? 'hidden lg:flex items-center justify-center' : 'flex absolute lg:static inset-0 z-20'}`}>
            {selectedMail === null ? (
                <div className="text-center text-gray-400">
                    <div className="w-20 h-20 bg-gray-50 dark:bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Inbox className="w-10 h-10 opacity-50" />
                    </div>
                    <p>Okumak için bir e-posta seçin</p>
                </div>
            ) : currentMail && (
                <>
                    {/* Toolbar */}
                    <div className="p-4 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-[#09090b]">
                        <div className="flex items-center space-x-2">
                            <button onClick={() => setSelectedMail(null)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg mr-2">
                                <ArrowLeft className="w-5 h-5 text-black dark:text-white" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500" title="Arşivle"><Archive className="w-5 h-5" /></button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500" title="Spam Bildir"><AlertCircle className="w-5 h-5" /></button>
                            <button onClick={() => deleteEmail(currentMail.id)} className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500" title="Sil"><Trash2 className="w-5 h-5" /></button>
                        </div>
                        <div className="flex items-center">
                             <span className="text-xs text-gray-400 mr-2 hidden sm:block">1 / {filteredEmails.length}</span>
                             <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500"><ChevronLeft className="w-5 h-5" /></button>
                             <button className="p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500"><ChevronRight className="w-5 h-5" /></button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 animate-fade-in custom-scrollbar">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                    {currentMail.sender.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                    <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white leading-tight break-words">{currentMail.subject}</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 truncate">{currentMail.sender} <span className="hidden sm:inline mx-1 text-xs opacity-60">&lt;email@example.com&gt;</span></p>
                                </div>
                            </div>
                            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start">
                                <span className="text-sm text-gray-400 block">{currentMail.date}</span>
                                <button onClick={(e) => toggleStar(currentMail.id, e)} className="sm:mt-2">
                                    <Star className={`w-5 h-5 ${currentMail.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                                </button>
                            </div>
                        </div>
                        
                        <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                            <p className="whitespace-pre-line">{currentMail.body}</p>
                            <br/>
                            <div className="p-4 bg-gray-50 dark:bg-neutral-900/50 rounded-xl border border-gray-100 dark:border-neutral-800">
                                <p className="text-xs text-gray-400">Ekler (1)</p>
                                <div className="flex items-center space-x-2 mt-2">
                                    <Paperclip className="w-4 h-4 text-gray-500" />
                                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium cursor-pointer hover:underline">fatura_detaylari.pdf</span>
                                </div>
                            </div>
                            <br/>
                            <p className="text-xs text-gray-400">---<br/>Bu e-posta otomatik olarak oluşturulmuştur.</p>
                        </div>
                    </div>
                </>
            )}
        </div>

        {/* Compose Modal */}
        <Modal
            isOpen={isComposeOpen}
            onClose={() => setIsComposeOpen(false)}
            title="Yeni E-posta"
            footer={
                <div className="flex justify-between w-full">
                    <button className="text-gray-400 hover:text-black dark:hover:text-white"><Paperclip className="w-5 h-5" /></button>
                    <div className="flex space-x-3">
                        <button onClick={() => setIsComposeOpen(false)} className="px-4 py-2 border border-gray-200 dark:border-neutral-700 rounded-xl text-sm font-bold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                        <button onClick={handleCompose} className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 flex items-center">
                            <Send className="w-4 h-4 mr-2" /> Gönder
                        </button>
                    </div>
                </div>
            }
        >
            <form className="space-y-4">
                <div>
                    <input type="text" placeholder="Kime:" className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                </div>
                <div>
                    <input type="text" placeholder="Konu:" className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white dark:text-white" />
                </div>
                <div>
                    <textarea rows={8} placeholder="Mesajınızı buraya yazın..." className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm focus:ring-1 focus:ring-black dark:focus:ring-white resize-none dark:text-white"></textarea>
                </div>
            </form>
        </Modal>
    </div>
  );
};

export default EmailPage;
