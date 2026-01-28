
import React from 'react';
import { ArrowLeft, Mail, Send } from 'lucide-react';
import { ViewType } from '../App';

interface ForgotPasswordPageProps {
  onNavigate: (view: ViewType) => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#09090b] rounded-3xl shadow-xl border border-gray-100 dark:border-neutral-800 overflow-hidden p-8">
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                    <Mail className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Şifrenizi mi unuttunuz?</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                    Endişelenmeyin, kayıtlı e-posta adresinizi girin ve size sıfırlama talimatlarını gönderelim.
                </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">E-posta Adresi</label>
                    <input 
                        type="email" 
                        placeholder="ornek@mail.com"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-neutral-900 border border-transparent rounded-xl text-sm focus:bg-white dark:focus:bg-black focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white outline-none transition-all dark:text-white"
                    />
                </div>

                <button 
                    className="w-full bg-black dark:bg-white text-white dark:text-black py-3 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg"
                >
                    <Send className="w-4 h-4 mr-2" />
                    Talimatları Gönder
                </button>
            </form>

            <div className="mt-8 text-center">
                <button 
                    onClick={() => onNavigate('login')}
                    className="text-sm font-bold text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white flex items-center justify-center mx-auto transition-colors"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Giriş ekranına dön
                </button>
            </div>
        </div>
    </div>
  );
};

export default ForgotPasswordPage;
