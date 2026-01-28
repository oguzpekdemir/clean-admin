
import React from 'react';
import { ArrowRight, User, Mail, Lock } from 'lucide-react';
import { ViewType } from '../App';

interface RegisterPageProps {
  onNavigate: (view: ViewType) => void;
}

const RegisterPage: React.FC<RegisterPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex bg-white dark:bg-black">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 bg-white dark:bg-black">
        <div className="w-full max-w-md space-y-8">
            <div className="mb-10">
                <div className="w-12 h-12 bg-black dark:bg-white rounded-xl flex items-center justify-center text-white dark:text-black font-bold italic text-xl mb-6">C</div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Aramıza Katılın</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2">CleanAdmin ile işlerinizi profesyonelce yönetmeye başlayın.</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Ad Soyad</label>
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Adınız Soyadınız"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">E-posta</label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="email" 
                            placeholder="ornek@mail.com"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Şifre</label>
                    <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                            type="password" 
                            placeholder="••••••••"
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input type="checkbox" id="terms" className="w-4 h-4 text-black border-gray-300 rounded focus:ring-black dark:bg-neutral-800 dark:border-neutral-700" />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-500 dark:text-gray-400">
                        <a href="#" className="font-bold hover:underline">Hizmet Şartları</a>'nı kabul ediyorum.
                    </label>
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                    Hesap Oluştur <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
            </form>

            <div className="text-center mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Zaten hesabınız var mı? <button onClick={() => onNavigate('login')} className="font-bold text-black dark:text-white hover:underline">Giriş Yap</button>
                </p>
            </div>
        </div>
      </div>

      {/* Right Side - Image/Banner */}
      <div className="hidden lg:block w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-60" 
                alt="Register Background" 
            />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-between p-20 text-white">
            <div className="flex justify-end">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold border border-white/20">
                    Sürüm 2.4.0
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold mb-6 leading-tight">Yaratıcılığınızı<br/> Özgür Bırakın.</h2>
                <p className="text-lg text-gray-300 max-w-md leading-relaxed">
                    Binlerce profesyonel fotoğrafçı ve tasarımcı işlerini CleanAdmin ile yönetiyor.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
