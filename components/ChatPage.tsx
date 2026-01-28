import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreHorizontal, Phone, Video, Send, Paperclip, Mic, Image, Smile, Check, CheckCheck, ArrowLeft, ChevronLeft, Plus } from 'lucide-react';

interface Message {
    id: number;
    sender: 'me' | 'other';
    text: string;
    time: string;
    read?: boolean;
}

interface User {
    id: number;
    name: string;
    msg: string;
    time: string;
    unread: number;
    online: boolean;
    avatar: string;
}

const ChatPage: React.FC = () => {
  const [activeUser, setActiveUser] = useState<number | null>(null); // Null means no user selected (List view on mobile)
  const [messageInput, setMessageInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mobile check helper (simple width check or state based)
  // For simplicity, we assume if activeUser is null, we show list. If set, we show chat.
  // On desktop, we always show list sidebar.

  const [users, setUsers] = useState<User[]>([
      { id: 0, name: 'Ahmet Yılmaz', msg: 'Harika, teşekkürler!', time: '12:30', unread: 0, online: true, avatar: 'https://picsum.photos/40/40?random=1' },
      { id: 1, name: 'Merve Demir', msg: 'Dosyaları ne zaman gönderirsiniz?', time: '11:45', unread: 2, online: false, avatar: 'https://picsum.photos/40/40?random=2' },
      { id: 2, name: 'Canan Kaya', msg: 'Toplantı notları ekte.', time: 'Dün', unread: 0, online: true, avatar: 'https://picsum.photos/40/40?random=3' },
      { id: 3, name: 'Mehmet Öz', msg: 'Fiyat teklifi için bekliyorum.', time: 'Pzt', unread: 0, online: false, avatar: 'https://picsum.photos/40/40?random=4' },
      { id: 4, name: 'Zeynep Su', msg: 'Fotoğraflar çok güzel olmuş.', time: 'Paz', unread: 1, online: true, avatar: 'https://picsum.photos/40/40?random=5' },
  ]);

  const [messages, setMessages] = useState<Record<number, Message[]>>({
      0: [
          { id: 1, sender: 'other', text: 'Merhaba Oğuz, nasılsın?', time: '10:00' },
          { id: 2, sender: 'me', text: 'İyiyim Ahmet, teşekkürler. Sen nasılsın?', time: '10:02', read: true },
          { id: 3, sender: 'other', text: 'Ben de iyiyim. Son proje hakkında konuşabilir miyiz?', time: '10:05' },
          { id: 4, sender: 'me', text: 'Tabii ki, öğleden sonra müsaitsen arayabilirim.', time: '10:10', read: true },
          { id: 5, sender: 'other', text: 'Harika olur, 14:00 uygun mu?', time: '10:12' },
          { id: 6, sender: 'me', text: 'Evet, uygun. Görüşmek üzere!', time: '10:15', read: true },
      ],
      1: [
          { id: 1, sender: 'other', text: 'Dosyaları ne zaman gönderirsiniz?', time: '11:45' }
      ]
  });

  // Default select first user on desktop load if nothing selected
  useEffect(() => {
      const handleResize = () => {
          if (window.innerWidth >= 768 && activeUser === null) {
              setActiveUser(0);
          }
      };
      
      // Initial check
      if (window.innerWidth >= 768 && activeUser === null) {
          setActiveUser(0);
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, [activeUser]);

  const currentUserId = activeUser !== null ? activeUser : 0;
  const activeMessages = messages[currentUserId] || [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [activeMessages, activeUser]);

  const handleSendMessage = () => {
      if (!messageInput.trim() || activeUser === null) return;

      const newMessage: Message = {
          id: Date.now(),
          sender: 'me',
          text: messageInput,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          read: false
      };

      setMessages(prev => ({
          ...prev,
          [activeUser]: [...(prev[activeUser] || []), newMessage]
      }));

      setMessageInput('');

      // Simulate Auto Reply
      setIsTyping(true);
      setTimeout(() => {
          const reply: Message = {
              id: Date.now() + 1,
              sender: 'other',
              text: 'Mesajını aldım, en kısa sürede döneceğim! 👍',
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          };
          setMessages(prev => ({
              ...prev,
              [activeUser]: [...(prev[activeUser] || []), reply]
          }));
          setIsTyping(false);
      }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          handleSendMessage();
      }
  };

  return (
    <div className="h-[calc(100vh-8rem)] bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden flex relative">
        
        {/* Sidebar (User List) - Hidden on mobile if chat is active */}
        <div className={`w-full md:w-80 border-r border-gray-100 dark:border-neutral-800 flex flex-col bg-white dark:bg-[#09090b] absolute md:relative inset-0 z-10 md:z-0 transition-transform duration-300 ${activeUser !== null ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
            <div className="p-4 border-b border-gray-100 dark:border-neutral-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 px-2 md:hidden">Sohbetler</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Kişi veya mesaj ara..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm outline-none dark:text-white focus:ring-1 focus:ring-gray-200 dark:focus:ring-neutral-700"
                    />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                {users.map((user) => (
                    <div 
                        key={user.id} 
                        onClick={() => setActiveUser(user.id)}
                        className={`flex items-center space-x-3 p-4 cursor-pointer transition-all border-l-4 ${activeUser === user.id ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-500' : 'border-transparent hover:bg-gray-50 dark:hover:bg-neutral-900/50'}`}
                    >
                        <div className="relative">
                            <img src={user.avatar} className="w-12 h-12 rounded-full object-cover" alt={user.name} />
                            {user.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white dark:border-black rounded-full"></span>}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className={`text-sm font-bold truncate ${activeUser === user.id ? 'text-black dark:text-white' : 'text-gray-900 dark:text-gray-300'}`}>{user.name}</h4>
                                <span className="text-[10px] text-gray-400">{user.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className={`text-xs truncate pr-2 ${user.unread > 0 ? 'font-bold text-gray-900 dark:text-white' : 'text-gray-500 dark:text-neutral-500'}`}>{user.msg}</p>
                                {user.unread > 0 && <span className="w-5 h-5 bg-blue-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">{user.unread}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Chat Area - Full width on mobile when active */}
        <div className={`flex-1 flex flex-col bg-gray-50/30 dark:bg-[#09090b] absolute md:relative inset-0 transition-transform duration-300 ${activeUser !== null ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
            
            {activeUser !== null && users[activeUser] ? (
                <>
                    {/* Chat Header */}
                    <div className="p-4 bg-white dark:bg-[#09090b] border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => setActiveUser(null)} 
                                className="md:hidden p-2 -ml-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <img src={users[activeUser].avatar} className="w-10 h-10 rounded-full" alt="Active" />
                            <div>
                                <h3 className="font-bold text-gray-900 dark:text-white text-sm md:text-base">{users[activeUser].name}</h3>
                                <span className={`text-xs font-medium flex items-center ${users[activeUser].online ? 'text-emerald-500' : 'text-gray-400'}`}>
                                    {users[activeUser].online ? 'Çevrimiçi' : 'Çevrimdışı'}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-2">
                            <button className="p-2 md:p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl text-gray-500 dark:text-gray-400 transition-colors">
                                <Phone className="w-5 h-5" />
                            </button>
                            <button className="p-2 md:p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl text-gray-500 dark:text-gray-400 transition-colors">
                                <Video className="w-5 h-5" />
                            </button>
                            <button className="p-2 md:p-2.5 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl text-gray-500 dark:text-gray-400 transition-colors">
                                <MoreHorizontal className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
                        {activeMessages.length > 0 ? (
                            activeMessages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
                                    {msg.sender === 'other' && <img src={users[activeUser].avatar} className="w-8 h-8 rounded-full mr-2 self-end mb-1 shadow-sm hidden sm:block" alt="Sender" />}
                                    <div className={`max-w-[85%] sm:max-w-[75%] ${msg.sender === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
                                        <div className={`px-4 py-2.5 md:px-5 md:py-3 rounded-2xl text-sm shadow-sm leading-relaxed ${
                                            msg.sender === 'me' 
                                            ? 'bg-black dark:bg-white text-white dark:text-black rounded-tr-none' 
                                            : 'bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-neutral-800'
                                        }`}>
                                            {msg.text}
                                        </div>
                                        <div className="flex items-center space-x-1 mt-1 text-[10px] text-gray-400 select-none">
                                            <span>{msg.time}</span>
                                            {msg.sender === 'me' && (
                                                msg.read ? <CheckCheck className="w-3 h-3 text-blue-500" /> : <Check className="w-3 h-3" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4">
                                    <Smile className="w-8 h-8" />
                                </div>
                                <p>Henüz mesaj yok. Merhaba de!</p>
                            </div>
                        )}
                        
                        {isTyping && (
                            <div className="flex justify-start animate-fade-in">
                                <img src={users[activeUser].avatar} className="w-8 h-8 rounded-full mr-2 self-end mb-1 shadow-sm hidden sm:block" alt="Sender" />
                                <div className="bg-white dark:bg-neutral-900 px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 dark:border-neutral-800 flex items-center space-x-1">
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-3 md:p-4 bg-white dark:bg-[#09090b] border-t border-gray-100 dark:border-neutral-800">
                        <div className="flex items-end space-x-2 bg-gray-50 dark:bg-neutral-900 p-2 rounded-3xl border border-transparent focus-within:border-gray-300 dark:focus-within:border-neutral-700 transition-colors shadow-inner">
                            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors hidden sm:block">
                                <Paperclip className="w-5 h-5" />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors sm:hidden">
                                <Plus className="w-5 h-5" />
                            </button>
                            <textarea 
                                rows={1}
                                placeholder="Mesaj yaz..."
                                className="flex-1 bg-transparent border-none outline-none text-sm dark:text-white py-3 px-2 resize-none max-h-32 min-h-[44px]"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                            <div className="flex items-center space-x-1">
                                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors hidden sm:block">
                                    <Smile className="w-5 h-5" />
                                </button>
                                {messageInput.trim() ? (
                                    <button 
                                        onClick={handleSendMessage}
                                        className="p-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-105 transition-all"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button className="p-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors">
                                        <Mic className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400 p-8 text-center">
                    <div className="w-20 h-20 bg-gray-50 dark:bg-neutral-900 rounded-full flex items-center justify-center mb-4">
                        <Smile className="w-10 h-10 opacity-50" />
                    </div>
                    <p>Sohbet başlatmak için soldan bir kişi seçin.</p>
                </div>
            )}
        </div>
    </div>
  );
};

export default ChatPage;