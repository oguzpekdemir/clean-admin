
import React, { useState } from 'react';
import { Plus, Search, MoreHorizontal, Mail, Shield, UserX, CheckCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import Modal from './Modal';

interface TeamMember {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'Editor' | 'Viewer';
    status: 'Active' | 'Pending';
    avatar: string;
}

const TeamPage: React.FC = () => {
  const { addToast } = useToast();
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isEditRoleOpen, setIsEditRoleOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [members, setMembers] = useState<TeamMember[]>([
      { id: 1, name: 'Oğuz Pekdemir', email: 'oguz@cleanadmin.online', role: 'Admin', status: 'Active', avatar: 'https://picsum.photos/40/40?random=1' },
      { id: 2, name: 'Canan Kaya', email: 'canan@cleanadmin.online', role: 'Editor', status: 'Active', avatar: 'https://picsum.photos/40/40?random=2' },
      { id: 3, name: 'Mehmet Demir', email: 'mehmet@design.com', role: 'Viewer', status: 'Pending', avatar: 'https://picsum.photos/40/40?random=3' },
      { id: 4, name: 'Zeynep Su', email: 'zeynep@tech.com', role: 'Editor', status: 'Active', avatar: 'https://picsum.photos/40/40?random=4' },
  ]);

  const handleInvite = (e: React.FormEvent) => {
      e.preventDefault();
      addToast('Davet e-postası gönderildi.', 'success');
      setIsInviteOpen(false);
  };

  const removeMember = (id: number) => {
      if(window.confirm('Bu kullanıcıyı ekipten çıkarmak istediğinize emin misiniz?')) {
          setMembers(members.filter(m => m.id !== id));
          addToast('Kullanıcı çıkarıldı.', 'info');
      }
  };

  const openEditRole = (member: TeamMember) => {
      setSelectedMember(member);
      setIsEditRoleOpen(true);
  };

  const handleUpdateRole = () => {
      if (!selectedMember) return;
      // Logic to update role would go here, e.g., finding in array and updating.
      // For mock:
      setMembers(members.map(m => m.id === selectedMember.id ? selectedMember : m));
      setIsEditRoleOpen(false);
      addToast('Kullanıcı rolü güncellendi.', 'success');
  };

  const filteredMembers = members.filter(m => 
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Ekip Yönetimi</h1>
                <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1">Takım arkadaşlarınızı yönetin ve izinlerini düzenleyin.</p>
            </div>
            <button 
                onClick={() => setIsInviteOpen(true)}
                className="flex items-center px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-xl text-sm font-bold hover:opacity-90 shadow-lg"
            >
                <Plus className="w-4 h-4 mr-2" /> Üye Davet Et
            </button>
        </div>

        {/* Filter Bar */}
        <div className="bg-white dark:bg-[#09090b] p-4 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm flex items-center">
            <Search className="w-5 h-5 text-gray-400 ml-2" />
            <input 
                type="text" 
                placeholder="İsim veya e-posta ile ara..." 
                className="flex-1 ml-3 bg-transparent border-none outline-none text-sm dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
                <div key={member.id} className="bg-white dark:bg-[#09090b] p-6 rounded-3xl border border-gray-100 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow relative group">
                    <div className="absolute top-4 right-4">
                        <button className="text-gray-400 hover:text-black dark:hover:text-white p-1 rounded-lg hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors">
                            <MoreHorizontal className="w-5 h-5" />
                        </button>
                    </div>
                    
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                            <img src={member.avatar} className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 dark:border-neutral-900" alt={member.name} />
                            <span className={`absolute bottom-1 right-1 w-4 h-4 border-2 border-white dark:border-[#09090b] rounded-full ${member.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 mb-4">{member.email}</p>
                        
                        <div className="flex items-center gap-2 mb-6">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                member.role === 'Admin' ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' :
                                member.role === 'Editor' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                                'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300'
                            }`}>
                                {member.role}
                            </span>
                            {member.status === 'Pending' && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                                    Davet Bekliyor
                                </span>
                            )}
                        </div>

                        <div className="flex items-center space-x-2 w-full">
                            <button 
                                onClick={() => openEditRole(member)}
                                className="flex-1 py-2 bg-gray-50 dark:bg-neutral-900 hover:bg-gray-100 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold transition-colors"
                            >
                                Rol Düzenle
                            </button>
                            <button onClick={() => removeMember(member.id)} className="p-2 bg-rose-50 dark:bg-rose-900/10 hover:bg-rose-100 dark:hover:bg-rose-900/30 text-rose-500 rounded-xl transition-colors" title="Kaldır">
                                <UserX className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Add New Card (Empty State) */}
            <div 
                onClick={() => setIsInviteOpen(true)}
                className="border-2 border-dashed border-gray-200 dark:border-neutral-800 rounded-3xl flex flex-col items-center justify-center p-6 cursor-pointer hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-neutral-900 transition-all group min-h-[280px]"
            >
                <div className="w-16 h-16 bg-gray-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-black dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors">
                    <Plus className="w-8 h-8 text-gray-400 group-hover:text-current" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">Yeni Üye</h3>
                <p className="text-xs text-gray-500 dark:text-neutral-400 mt-1">Ekibe birini ekleyin</p>
            </div>
        </div>

        {/* Invite Modal */}
        <Modal
            isOpen={isInviteOpen}
            onClose={() => setIsInviteOpen(false)}
            title="Ekip Üyesi Davet Et"
            footer={
                <>
                    <button onClick={() => setIsInviteOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                    <button onClick={handleInvite} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Davet Gönder</button>
                </>
            }
        >
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">E-posta Adresi</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input type="email" placeholder="ornek@sirket.com" className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-neutral-900 border-none rounded-xl text-sm dark:text-white" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Rol Ata</label>
                    <div className="grid grid-cols-1 gap-2">
                        {['Viewer', 'Editor', 'Admin'].map((role) => (
                            <label key={role} className="flex items-center p-3 border border-gray-200 dark:border-neutral-800 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900 transition-colors">
                                <input type="radio" name="role" className="w-4 h-4 text-black focus:ring-black" />
                                <div className="ml-3">
                                    <span className="block text-sm font-bold text-gray-900 dark:text-white">{role}</span>
                                    <span className="block text-xs text-gray-500">
                                        {role === 'Viewer' ? 'Sadece görüntüleme yapabilir.' : 
                                         role === 'Editor' ? 'İçerik düzenleyebilir ve oluşturabilir.' : 
                                         'Tam yetkiye sahiptir.'}
                                    </span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            </form>
        </Modal>

        {/* Edit Role Modal */}
        <Modal
            isOpen={isEditRoleOpen}
            onClose={() => setIsEditRoleOpen(false)}
            title="Kullanıcı Rolünü Düzenle"
            footer={
                <>
                    <button onClick={() => setIsEditRoleOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-neutral-800 text-gray-700 dark:text-gray-300">İptal</button>
                    <button onClick={handleUpdateRole} className="px-5 py-2.5 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200">Güncelle</button>
                </>
            }
        >
            {selectedMember && (
                <div className="space-y-4">
                    <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 dark:bg-neutral-900 rounded-xl">
                        <img src={selectedMember.avatar} className="w-10 h-10 rounded-full" alt="" />
                        <div>
                            <p className="font-bold text-gray-900 dark:text-white">{selectedMember.name}</p>
                            <p className="text-xs text-gray-500">{selectedMember.email}</p>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1.5">Yeni Rol</label>
                        <div className="grid grid-cols-1 gap-2">
                            {['Viewer', 'Editor', 'Admin'].map((role) => (
                                <label key={role} className={`flex items-center p-3 border rounded-xl cursor-pointer transition-colors ${selectedMember.role === role ? 'border-black dark:border-white bg-gray-50 dark:bg-neutral-900' : 'border-gray-200 dark:border-neutral-800 hover:bg-gray-50 dark:hover:bg-neutral-900'}`}>
                                    <input 
                                        type="radio" 
                                        name="editRole" 
                                        checked={selectedMember.role === role} 
                                        onChange={() => setSelectedMember({...selectedMember, role: role as any})}
                                        className="w-4 h-4 text-black focus:ring-black" 
                                    />
                                    <div className="ml-3">
                                        <span className="block text-sm font-bold text-gray-900 dark:text-white">{role}</span>
                                    </div>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    </div>
  );
};

export default TeamPage;
