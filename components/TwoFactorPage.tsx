import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, ArrowLeft, RefreshCw } from 'lucide-react';
import { ViewType } from '../App';
import { useToast } from '../context/ToastContext';

interface TwoFactorPageProps {
  onVerify: () => void;
  onNavigate: (view: ViewType) => void;
}

const TwoFactorPage: React.FC<TwoFactorPageProps> = ({ onVerify, onNavigate }) => {
  const { addToast } = useToast();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
      inputRefs.current[0]?.focus();
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
      if (isNaN(Number(element.value))) return false;

      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);

      // Auto focus next
      if (element.value && index < 5) {
          inputRefs.current[index + 1]?.focus();
      }

      // Auto submit
      if (index === 5 && element.value) {
          setTimeout(() => onVerify(), 300);
      }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
          inputRefs.current[index - 1]?.focus();
      }
  };

  const handleResend = () => {
      addToast('Doğrulama kodu tekrar gönderildi.', 'success');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
        <div className="w-full max-w-md bg-white dark:bg-[#09090b] rounded-3xl shadow-xl border border-gray-100 dark:border-neutral-800 p-8 text-center">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
                <ShieldCheck className="w-8 h-8" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">İki Adımlı Doğrulama</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                Lütfen <strong className="text-gray-900 dark:text-white">+90 5** *** 88 99</strong> numaralı telefona gönderilen 6 haneli doğrulama kodunu giriniz.
            </p>

            <div className="flex justify-center gap-2 mb-8">
                {otp.map((data, index) => (
                    <input
                        key={index}
                        ref={el => { inputRefs.current[index] = el; }}
                        type="text"
                        maxLength={1}
                        className="w-10 h-12 sm:w-12 sm:h-14 border-2 border-gray-200 dark:border-neutral-700 rounded-xl text-center text-xl font-bold text-gray-900 dark:text-white focus:border-black dark:focus:border-white focus:ring-0 outline-none transition-colors bg-transparent"
                        value={data}
                        onChange={e => handleChange(e.target, index)}
                        onKeyDown={e => handleKeyDown(e, index)}
                    />
                ))}
            </div>

            <button 
                onClick={onVerify}
                className="w-full bg-black dark:bg-white text-white dark:text-black py-3.5 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
                Doğrula ve Giriş Yap
            </button>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-sm">
                <button 
                    onClick={() => onNavigate('login')}
                    className="text-gray-500 hover:text-black dark:hover:text-white flex items-center transition-colors mb-4 sm:mb-0"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" /> Geri Dön
                </button>
                <button 
                    onClick={handleResend}
                    className="text-blue-600 dark:text-blue-400 font-bold flex items-center hover:underline"
                >
                    <RefreshCw className="w-4 h-4 mr-1" /> Kodu Tekrar Gönder
                </button>
            </div>
        </div>
    </div>
  );
};

export default TwoFactorPage;