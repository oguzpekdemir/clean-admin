
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface LoginPageProps {
  onLogin: () => void;
  onNavigate: (view: ViewType) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onNavigate }) => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-black">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white dark:bg-black">
        <div className="w-full max-w-md space-y-8">
            <div className="mb-10">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black font-bold italic text-xl mb-6">C</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Tekrar Hoşgeldiniz</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Lütfen CleanAdmin hesabınıza giriş yapın.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">E-posta</label>
                    <input 
                        type="email" 
                        placeholder="admin@cleanadmin.online"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Şifre</label>
                    <input 
                        type="password" 
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                    />
                    <div className="flex justify-end mt-2">
                        <button type="button" onClick={() => onNavigate('forgot-password')} className="text-xs font-semibold text-gray-900 dark:text-white hover:underline">Şifremi unuttum?</button>
                    </div>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center group"
                >
                    Giriş Yap <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <div className="text-center mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Hesabınız yok mu? <button onClick={() => onNavigate('register')} className="font-bold text-black dark:text-white hover:underline">Kayıt Ol</button>
                </p>
            </div>
        </div>
      </div>

      {/* Right Side - Image/Banner */}
      <div className="hidden lg:block w-1/2 bg-gray-50 dark:bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Login Background" 
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-20 text-white">
            <h2 className="text-4xl font-bold mb-6">Profesyoneller için Tasarlandı</h2>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
                CleanAdmin Template ile iş süreçlerinizi hızlandırın, verilerinizi yönetin ve harika görünen paneller oluşturun.
            </p>
            <div className="flex space-x-2 mt-8">
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full"></div>
                <div className="w-2 h-1 bg-white/50 rounded-full"></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
