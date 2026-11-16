import React from 'react';
import { useShop } from '../context/ShopContext';
import { Check } from 'lucide-react';

export default function NotificationToast() {
  const { notification } = useShop();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-[#493323] text-[#F8F5EF] px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 text-xs font-medium border border-[#85866A]/30 animate-bounce-subtle">
      <div className="w-5 h-5 rounded-full bg-[#B77D5C] text-white flex items-center justify-center flex-shrink-0">
        <Check className="w-3 h-3" />
      </div>
      <span>{notification}</span>
    </div>
  );
}
