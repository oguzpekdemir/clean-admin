
import React from 'react';
import { User, MessageCircle, ThumbsUp, Users } from 'lucide-react';

const FeedbackSidebar: React.FC = () => {
  const feedbacks = [
    { user: 'Claudia', action: '5 fotoğrafı beğendi', icon: ThumbsUp, color: 'text-rose-500' },
    { user: 'Alam', action: 'Dış Çekimler seansına yorum yaptı', icon: MessageCircle, color: 'text-blue-500' },
    { user: 'Ekip', action: 'Dış Çekimler seansında oylama yaptı', icon: Users, color: 'text-purple-500' },
    { user: 'Alam', action: 'Dış Çekimler seansına yorum yaptı', icon: MessageCircle, color: 'text-blue-500' },
    { user: 'Claudia', action: '5 fotoğrafı beğendi', icon: ThumbsUp, color: 'text-rose-500' },
    { user: 'Alam', action: 'Dış Çekimler seansına yorum yaptı', icon: MessageCircle, color: 'text-blue-500' },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 lg:sticky lg:top-28">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Müşteri Geri Bildirimleri</h2>
      
      <div className="space-y-6">
        {feedbacks.map((fb, idx) => (
          <div key={idx} className="flex space-x-3 group">
            <img 
              src={`https://picsum.photos/32/32?random=${idx + 20}`} 
              className="w-8 h-8 rounded-full border border-gray-100" 
              alt={fb.user} 
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-bold text-gray-900">{fb.user.toLowerCase()}</span>
                <span className="text-gray-500 ml-1 leading-snug">{fb.action}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 bg-gray-50 text-gray-500 py-3 rounded-2xl text-sm font-semibold hover:bg-gray-100 transition-colors">
        Hepsini Gör
      </button>
    </div>
  );
};

export default FeedbackSidebar;
