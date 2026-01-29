
import React from 'react';
import { FileText, Folder, Terminal, Layers, Hash, CheckCircle, AlertCircle, Code, Settings, Palette, Layout, Command, Sidebar as SidebarIcon } from 'lucide-react';

const DocsPage: React.FC = () => {
  const CodeBlock = ({ code, label }: { code: string, label?: string }) => (
    <div className="relative mt-4 mb-6 group">
        {label && <div className="absolute -top-3 left-4 px-2 bg-gray-900 text-gray-400 text-xs font-mono rounded">{label}</div>}
        <div className="bg-[#1e1e1e] text-gray-300 p-5 rounded-xl font-mono text-sm overflow-x-auto border border-gray-800 shadow-xl">
            <pre>{code}</pre>
        </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-fade-in pb-32">
        
        {/* Hero Header */}
        <div className="border-b border-gray-200 dark:border-neutral-800 pb-10">
            <h1 className="text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">Geliştirici Dokümantasyonu</h1>
            <p className="text-xl text-gray-500 dark:text-neutral-400 max-w-3xl leading-relaxed">
                CleanAdmin mimarisini, dosya yapısını ve özelleştirme yeteneklerini derinlemesine keşfedin. Projenizi dakikalar içinde kişiselleştirmek için bu rehberi kullanın.
            </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
            {/* Sidebar Navigation (Sticky) */}
            <div className="hidden xl:block col-span-1">
                <nav className="sticky top-28 space-y-8 pr-4 border-r border-gray-100 dark:border-neutral-800">
                    <div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center"><Terminal className="w-4 h-4 mr-2" /> Başlangıç</h5>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-neutral-400">
                            <li><a href="#setup" className="hover:text-black dark:hover:text-white transition-colors block py-1">Kurulum</a></li>
                            <li><a href="#structure" className="hover:text-black dark:hover:text-white transition-colors block py-1">Dosya Yapısı</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center"><Palette className="w-4 h-4 mr-2" /> Tema & Stil</h5>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-neutral-400">
                            <li><a href="#colors" className="hover:text-black dark:hover:text-white transition-colors block py-1">Renk Paleti (Tailwind)</a></li>
                            <li><a href="#darkmode" className="hover:text-black dark:hover:text-white transition-colors block py-1">Karanlık Mod Mantığı</a></li>
                            <li><a href="#fonts" className="hover:text-black dark:hover:text-white transition-colors block py-1">Font Değiştirme</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center"><Settings className="w-4 h-4 mr-2" /> Yapılandırma</h5>
                        <ul className="space-y-2 text-sm text-gray-500 dark:text-neutral-400">
                            <li><a href="#layout-config" className="hover:text-black dark:hover:text-white transition-colors block py-1">Layout Varsayılanları</a></li>
                            <li><a href="#sidebar-menu" className="hover:text-black dark:hover:text-white transition-colors block py-1">Menü Yönetimi</a></li>
                            <li><a href="#new-page" className="hover:text-black dark:hover:text-white transition-colors block py-1">Yeni Sayfa Ekleme</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Content */}
            <div className="col-span-1 xl:col-span-3 space-y-16">
                
                {/* 1. Setup */}
                <section id="setup">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">01</span>
                        Kurulum & Başlangıç
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Proje, modern React ekosistemi (Vite önerilir) üzerine kuruludur. Bağımlılıkları yükleyip geliştirme sunucusunu başlatmak için:
                    </p>
                    <CodeBlock code={`# Repoyu klonlayın
git clone https://github.com/oguzpekdemir/clean-admin.git

# Klasöre gidin
cd clean-admin

# Bağımlılıkları yükleyin
npm install

# Projeyi başlatın (http://localhost:5173)
npm run dev`} label="Terminal" />
                </section>

                {/* 2. File Structure */}
                <section id="structure">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">02</span>
                        Proje Mimarisi
                    </h2>
                    <div className="bg-gray-50 dark:bg-neutral-900 p-6 rounded-2xl border border-gray-100 dark:border-neutral-800">
                        <ul className="space-y-3 font-mono text-sm text-gray-700 dark:text-gray-300">
                            <li className="flex items-start"><Folder className="w-4 h-4 mr-2 text-amber-500 mt-0.5" /> <strong>src/</strong></li>
                            <li className="flex items-start pl-6"><Folder className="w-4 h-4 mr-2 text-blue-500 mt-0.5" /> <strong>components/</strong> <span className="text-gray-400 ml-2">// Tüm sayfa ve UI bileşenleri (Atomic Design prensibi)</span></li>
                            <li className="flex items-start pl-12"><FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" /> Sidebar.tsx <span className="text-gray-400 ml-2">// Sol menü yapısı</span></li>
                            <li className="flex items-start pl-12"><FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" /> Header.tsx <span className="text-gray-400 ml-2">// Üst bar ve bildirimler</span></li>
                            <li className="flex items-start pl-12"><FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" /> ...Page.tsx <span className="text-gray-400 ml-2">// Sayfa bileşenleri</span></li>
                            <li className="flex items-start pl-6"><Folder className="w-4 h-4 mr-2 text-purple-500 mt-0.5" /> <strong>context/</strong> <span className="text-gray-400 ml-2">// Global State Yönetimi (Context API)</span></li>
                            <li className="flex items-start pl-12"><FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" /> LayoutContext.tsx <span className="text-gray-400 ml-2">// Tema, Sidebar, Header ayarları</span></li>
                            <li className="flex items-start pl-12"><FileText className="w-4 h-4 mr-2 text-gray-400 mt-0.5" /> ThemeContext.tsx <span className="text-gray-400 ml-2">// Dark/Light mod yönetimi</span></li>
                            <li className="flex items-start pl-6"><FileText className="w-4 h-4 mr-2 text-emerald-500 mt-0.5" /> <strong>App.tsx</strong> <span className="text-gray-400 ml-2">// Ana Router ve Layout Wrapper</span></li>
                        </ul>
                    </div>
                </section>

                {/* 3. Customization - Colors */}
                <section id="colors">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">03</span>
                        Renk ve Tema Özelleştirme
                    </h2>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Tailwind Yapılandırması</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Proje Tailwind CSS kullanır. Renk paletini değiştirmek için <code>tailwind.config.js</code> (veya HTML içindeki script tag) dosyasını düzenleyin.
                    </p>
                    <CodeBlock code={`tailwind.config = {
  darkMode: 'class', // 'media' yerine 'class' kullanıyoruz
  theme: {
    extend: {
      colors: {
        // Özel renklerinizi buraya ekleyin
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Ana marka renginiz
          900: '#0c4a6e',
        },
        border: "hsl(var(--border))", // CSS variable kullanımı
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Font ailesi
      }
    }
  }
}`} label="tailwind.config.js" />
                </section>

                {/* 4. Layout Defaults */}
                <section id="layout-config">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">04</span>
                        Layout Varsayılanlarını Değiştirme
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Uygulama ilk açıldığında varsayılan olarak hangi düzenin (Dikey/Yatay) veya temanın (Koyu/Açık) geleceğini <code>context/LayoutContext.tsx</code> ve <code>context/ThemeContext.tsx</code> dosyalarından ayarlayabilirsiniz.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Varsayılan Düzen Ayarı</h4>
                            <CodeBlock code={`// src/context/LayoutContext.tsx

const [layoutType, setLayoutType] = useState<LayoutType>('horizontal'); // 'vertical' yerine 'horizontal' yapın
const [widthType, setWidthType] = useState<WidthType>('boxed'); // 'fluid' yerine 'boxed'`} label="LayoutContext.tsx" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 dark:text-white mb-2">Varsayılan Tema Ayarı</h4>
                            <CodeBlock code={`// src/context/ThemeContext.tsx

const [theme, setTheme] = useState<Theme>(() => {
  // Varsayılan olarak hep 'dark' başlatmak için:
  return 'dark'; 
});`} label="ThemeContext.tsx" />
                        </div>
                    </div>
                </section>

                {/* 5. Sidebar Menu */}
                <section id="sidebar-menu">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">05</span>
                        Sidebar Menü Yönetimi
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Sol menü yapısı <code>components/Sidebar.tsx</code> dosyasındaki <code>MENU_SECTIONS</code> sabiti üzerinden yönetilir. Yeni bir menü elemanı eklemek için bu diziyi düzenlemeniz yeterlidir.
                    </p>
                    <CodeBlock code={`// src/components/Sidebar.tsx

const MENU_SECTIONS = [
  {
    title: 'Yönetim',
    items: [
      { 
        icon: LayoutDashboard, 
        label: 'Dashboardlar', 
        children: [ // Alt menü (Submenu) yapısı
           { label: 'Ana Panel', id: 'dashboard' },
           { label: 'E-Ticaret', id: 'ecommerce' }
        ]
      },
      // Tek seviyeli link örneği
      { icon: Users, label: 'Kullanıcılar', id: 'users' } 
    ]
  }
];`} label="Sidebar.tsx" />
                </section>

                {/* 6. Adding New Page */}
                <section id="new-page">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center group">
                        <span className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-xl flex items-center justify-center mr-4 text-lg font-mono group-hover:scale-110 transition-transform">06</span>
                        Adım Adım Yeni Sayfa Ekleme
                    </h2>
                    
                    <div className="space-y-8">
                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</div>
                                <div className="h-full w-0.5 bg-gray-200 dark:bg-neutral-800 my-2"></div>
                            </div>
                            <div className="flex-1 pb-6">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Bileşeni Oluşturun</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2"><code>components/</code> klasöründe yeni bir dosya oluşturun (örn: <code>NewPage.tsx</code>).</p>
                                <div className="bg-gray-100 dark:bg-neutral-900 p-3 rounded-lg text-xs font-mono text-gray-600 dark:text-gray-300">
                                    components/NewPage.tsx
                                </div>
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</div>
                                <div className="h-full w-0.5 bg-gray-200 dark:bg-neutral-800 my-2"></div>
                            </div>
                            <div className="flex-1 pb-6">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">App.tsx'e Kaydedin</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <code>App.tsx</code> dosyasını açın. Önce sayfanızı Lazy Load ile import edin, <code>ViewType</code> tipine ekleyin ve <code>switch</code> case bloğuna dahil edin.
                                </p>
                                <CodeBlock code={`// 1. Import
const NewPage = React.lazy(() => import('./components/NewPage'));

// 2. Type Definition
export type ViewType = 'dashboard' | ... | 'new-page';

// 3. Render Logic
case 'new-page': return <NewPage />;`} label="App.tsx" />
                            </div>
                        </div>

                        <div className="flex">
                            <div className="mr-4 flex flex-col items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</div>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Menüye Ekleyin</h4>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">
                                    <code>Sidebar.tsx</code> dosyasındaki <code>MENU_SECTIONS</code> dizisine yeni sayfanızı ekleyin. İsterseniz <code>CommandPalette.tsx</code> dosyasına da ekleyerek Ctrl+K menüsünde görünmesini sağlayın.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
  );
};

export default DocsPage;
