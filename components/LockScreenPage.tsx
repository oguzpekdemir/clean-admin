
import React, { useState } from 'react';
import { ArrowRight, User, Unlock } from 'lucide-react';
import { ViewType } from '../App';

interface LockScreenPageProps {
  onUnlock: () => void;
  onNavigate: (view: ViewType) => void;
}

const LockScreenPage: React.FC<LockScreenPageProps> = ({ onUnlock, onNavigate }) => {
  const [password, setPassword] = useState('');

  const handleUnlock = (e: React.FormEvent) => {
      e.preventDefault();
      // Simulate unlock logic
      if(password) {
          onUnlock();
      }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-40" 
                alt="Lock Screen" 
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 w-full max-w-md p-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl text-center">
                <div className="mb-6 relative inline-block">
                    <img 
                        src="https://picsum.photos/150/150?random=2" 
                        className="w-24 h-24 rounded-full border-4 border-white/20 mx-auto shadow-lg" 
                        alt="User" 
                    />
                    <div className="absolute bottom-0 right-0 bg-emerald-500 w-6 h-6 rounded-full border-4 border-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-1">Oğuz Pekdemir</h2>
                <p className="text-gray-400 text-sm mb-8">Admin Oturumu Kilitli</p>

                <form onSubmit={handleUnlock} className="space-y-4">
                    <div className="relative">
                        <input 
                            type="password" 
                            placeholder="Şifrenizi girin" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-6 pr-12 py-3.5 bg-black/30 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:ring-2 focus:ring-white/20 focus:border-white/30 outline-none transition-all text-center tracking-widest"
                        />
                        <button 
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </form>

                <div className="mt-8">
                    <button 
                        onClick={() => onNavigate('login')}
                        className="text-sm text-gray-400 hover:text-white transition-colors flex items-center justify-center mx-auto"
                    >
                        <User className="w-4 h-4 mr-2" />
                        Farklı bir hesapla giriş yap
                    </button>
                </div>
            </div>
            
            <div className="text-center mt-8 text-white/30 text-xs">
                &copy; 2026 CleanAdmin. Tüm hakları saklıdır.
            </div>
        </div>
    </div>
  );
};

export default LockScreenPage;
