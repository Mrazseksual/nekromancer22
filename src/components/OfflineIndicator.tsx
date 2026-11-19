import React from 'react';
import {useOnlineStatus} from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-2.5 left-2.5 z-50 flex items-center gap-2 rounded-lg border border-amber-400/50 bg-[#15110a]/90 px-2.5 py-1 text-[11px] font-medium text-amber-200 shadow-lg backdrop-blur-sm">
      <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
      Офлайн-режим
    </div>
  );
};
