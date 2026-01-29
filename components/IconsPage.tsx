
import React from 'react';
import { 
    LayoutDashboard, BarChart2, ShoppingCart, Users, Briefcase, Camera, Image, 
    Settings, Sun, Moon, LogOut, MessageSquare, Mail, Folder, Calendar, CheckSquare, 
    FileText, CreditCard, HelpCircle, Activity, Zap, FilePlus, Component, LayoutTemplate, 
    PieChart, Table, Box, FormInput, Home, Search, Bell, Menu, X, ChevronRight, ChevronDown,
    Filter, Plus, Trash2, Edit, Save, Download, UploadCloud, Share2, Printer, Eye, Lock,
    Unlock, Shield, Smartphone, Monitor, Tablet, Wifi, Bluetooth, Battery, MapPin, Globe,
    Flag, Award, Gift, Truck, Package, Tag, Layers, Server, Database, HardDrive
} from 'lucide-react';

const IconsPage: React.FC = () => {
  const iconGroups = [
      {
          title: 'Navigasyon & Menü',
          icons: [
              { Icon: LayoutDashboard, label: 'Dashboard' },
              { Icon: Home, label: 'Home' },
              { Icon: Menu, label: 'Menu' },
              { Icon: X, label: 'Close' },
              { Icon: ChevronRight, label: 'Right' },
              { Icon: ChevronDown, label: 'Down' },
              { Icon: Search, label: 'Search' },
              { Icon: Filter, label: 'Filter' },
          ]
      },
      {
          title: 'Uygulama & Araçlar',
          icons: [
              { Icon: BarChart2, label: 'Analytics' },
              { Icon: ShoppingCart, label: 'Cart' },
              { Icon: Users, label: 'Users' },
              { Icon: Briefcase, label: 'Projects' },
              { Icon: MessageSquare, label: 'Chat' },
              { Icon: Mail, label: 'Email' },
              { Icon: Folder, label: 'Files' },
              { Icon: Calendar, label: 'Calendar' },
              { Icon: CheckSquare, label: 'Tasks' },
              { Icon: Camera, label: 'Camera' },
              { Icon: Image, label: 'Image' },
          ]
      },
      {
          title: 'Aksiyon & İşlemler',
          icons: [
              { Icon: Plus, label: 'Add' },
              { Icon: Trash2, label: 'Delete' },
              { Icon: Edit, label: 'Edit' },
              { Icon: Save, label: 'Save' },
              { Icon: Download, label: 'Download' },
              { Icon: UploadCloud, label: 'Upload' },
              { Icon: Share2, label: 'Share' },
              { Icon: Printer, label: 'Print' },
              { Icon: Eye, label: 'View' },
              { Icon: Settings, label: 'Settings' },
              { Icon: LogOut, label: 'Logout' },
          ]
      },
      {
          title: 'Durum & Cihazlar',
          icons: [
              { Icon: Bell, label: 'Notification' },
              { Icon: Activity, label: 'Activity' },
              { Icon: Zap, label: 'Zap' },
              { Icon: Lock, label: 'Lock' },
              { Icon: Shield, label: 'Security' },
              { Icon: Smartphone, label: 'Mobile' },
              { Icon: Monitor, label: 'Desktop' },
              { Icon: Wifi, label: 'Wifi' },
              { Icon: Battery, label: 'Battery' },
              { Icon: Server, label: 'Server' },
              { Icon: Database, label: 'Database' },
          ]
      }
  ];

  return (
    <div className="space-y-10 animate-fade-in max-w-6xl mx-auto pb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200 dark:border-neutral-800 pb-6 gap-4">
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">İkon Seti</h2>
                <p className="text-gray-500 dark:text-neutral-400 mt-2">
                    Proje genelinde <a href="https://lucide.dev/" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:underline">Lucide React</a> ikon kütüphanesi kullanılmaktadır.
                </p>
            </div>
            <div className="bg-gray-100 dark:bg-neutral-900 px-4 py-2 rounded-xl text-sm font-mono text-gray-600 dark:text-gray-300">
                npm install lucide-react
            </div>
        </div>

        {iconGroups.map((group, idx) => (
            <div key={idx} className="space-y-4">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">{group.title}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                    {group.icons.map((item, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#09090b] border border-gray-100 dark:border-neutral-800 rounded-2xl hover:shadow-md hover:border-gray-200 dark:hover:border-neutral-700 transition-all cursor-pointer group">
                            <item.Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 mb-3 group-hover:scale-110 transition-transform" />
                            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
  );
};

export default IconsPage;
