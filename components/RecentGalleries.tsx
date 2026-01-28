
import React from 'react';

const RecentGalleries: React.FC = () => {
  const galleries = [
    { name: 'Stüdyo Portreleri', count: 105, size: '4.3 GB', img: 'https://picsum.photos/400/200?random=10' },
    { name: 'Dış Çekimler', count: 15, size: '0.3 GB', img: 'https://picsum.photos/400/200?random=11' },
    { name: 'Etkinlik Kapsamı', count: 105, size: '4.3 GB', img: 'https://picsum.photos/400/200?random=12' },
    { name: 'Etkinlik Kapsamı', count: 105, size: '4.3 GB', img: 'https://picsum.photos/400/200?random=13' },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Son Galeriler</h2>
        <button className="text-sm font-semibold text-gray-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">tümünü gör</button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleries.map((gallery, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative h-48 rounded-3xl overflow-hidden bg-gray-200 dark:bg-neutral-900 border border-gray-100 dark:border-neutral-800 mb-3 shadow-sm group-hover:shadow-lg transition-all">
              <img 
                src={gallery.img} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt={gallery.name} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white font-bold leading-tight">{gallery.name}</h3>
                <p className="text-white/80 text-xs mt-1">{gallery.count} fotoğraf</p>
              </div>
            </div>
            <div className="flex items-center justify-between px-1">
               <span className="text-[10px] font-bold text-gray-400 dark:text-neutral-500 uppercase tracking-wider">{gallery.size}</span>
               <div className="flex -space-x-1">
                 {[1,2].map(i => (
                    <div key={i} className="w-5 h-5 rounded-full border-2 border-white dark:border-black bg-gray-300 dark:bg-neutral-700" />
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentGalleries;
