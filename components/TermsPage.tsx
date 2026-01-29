
import React from 'react';

const TermsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20 animate-fade-in">
        <div className="bg-white dark:bg-[#09090b] rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm overflow-hidden">
            <div className="p-8 md:p-12 border-b border-gray-100 dark:border-neutral-800">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">Şartlar & Gizlilik</h1>
                <p className="text-gray-500 dark:text-neutral-400 text-lg">Son güncelleme: 24 Ekim 2026</p>
            </div>
            
            <div className="p-8 md:p-12 space-y-12">
                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Giriş</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        CleanAdmin ("biz", "bizim" veya "bize") hizmetini kullandığınız için teşekkür ederiz. Bu Şartlar ve Koşullar, web sitemizi ve hizmetlerimizi kullanımınızı yönetir. Hizmetlerimize erişerek veya bunları kullanarak, bu şartlara uymayı kabul edersiniz.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Lütfen bu şartları dikkatlice okuyun. Eğer bu şartların herhangi bir kısmını kabul etmiyorsanız, hizmetlerimizi kullanamazsınız.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Lisans ve Erişim</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Bu şablonu satın aldığınızda, size kişisel veya ticari projelerde kullanmanız için münhasır olmayan, devredilemez bir lisans veriyoruz. Ancak:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                        <li>Şablonu olduğu gibi veya değiştirilmiş haliyle "şablon" olarak tekrar satamazsınız.</li>
                        <li>Kaynak kodunu açık bir şekilde dağıtamazsınız.</li>
                        <li>Tek bir lisans, tek bir son ürün (End Product) için geçerlidir.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Gizlilik Politikası</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        Gizliliğiniz bizim için önemlidir. Bu bölümde verilerinizi nasıl topladığımızı ve kullandığımızı açıklıyoruz.
                    </p>
                    <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-100 dark:border-neutral-800">
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Toplanan Veriler</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Hesap oluştururken adınız, e-posta adresiniz ve şifreniz gibi bilgileri toplarız. Ayrıca kullanım analitiği için anonim veriler toplanabilir.
                        </p>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-2">Çerezler (Cookies)</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Deneyiminizi geliştirmek ve oturumunuzu açık tutmak için çerezleri kullanıyoruz.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Sorumluluk Reddi</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Hizmetlerimiz "olduğu gibi" sunulmaktadır. Yazılımın hatasız olacağını veya kesintisiz çalışacağını garanti etmiyoruz. Oluşabilecek veri kayıplarından veya ticari zararlardan sorumlu değiliz.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. İletişim</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        Bu şartlarla ilgili sorularınız varsa, lütfen bizimle iletişime geçin: <a href="mailto:legal@cleanadmin.online" className="text-blue-600 dark:text-blue-400 font-bold hover:underline">legal@cleanadmin.online</a>
                    </p>
                </section>
            </div>
        </div>
    </div>
  );
};

export default TermsPage;
