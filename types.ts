
export interface Shoot {
  id: string;
  name: string;
  files: string;
  sharedWith: {
    name: string;
    avatar: string;
  };
  status: 'Gönderildi' | 'Başarısız' | 'Beklemede' | 'Düzenleniyor';
  lastActivity: string;
}

export interface Gallery {
  id: string;
  name: string;
  count: number;
  size: string;
  image: string;
}

export interface Feedback {
  id: string;
  user: string;
  avatar: string;
  action: string;
  target: string;
}

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}
