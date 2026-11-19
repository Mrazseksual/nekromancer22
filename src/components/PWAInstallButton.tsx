import React, {useState} from 'react';
import {Download, X} from 'lucide-react';
import {usePWAInstall} from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const {isInstallable, isInstalled, isIOS, install} = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled || dismissed) {
    return null;
  }

  if (isInstallable) {
    return (
      <div className="fixed bottom-2.5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-lg border border-[#c9a96e]/60 bg-[#0d1018]/90 px-2.5 py-1 text-xs text-[#f4efe6] shadow-lg backdrop-blur-sm">
        <button
          type="button"
          onClick={install}
          className="flex items-center gap-1.5 font-semibold text-[#f4d68c] hover:text-white cursor-pointer px-1 py-0.5"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Установить на телефон</span>
        </button>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Скрыть подсказку установки"
          className="p-0.5 text-[#94a3b8] hover:text-white cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  if (isIOS) {
    return (
      <>
        <div className="fixed bottom-2.5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 rounded-lg border border-[#c9a96e]/60 bg-[#0d1018]/90 px-2.5 py-1 text-xs text-[#f4efe6] shadow-lg backdrop-blur-sm">
          <button
            type="button"
            onClick={() => setShowIOSGuide(true)}
            className="flex items-center gap-1.5 font-semibold text-[#f4d68c] hover:text-white cursor-pointer px-1 py-0.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Добавить на экран</span>
          </button>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Скрыть подсказку"
            className="p-0.5 text-[#94a3b8] hover:text-white cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {showIOSGuide && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
            onClick={() => setShowIOSGuide(false)}
          >
            <div
              className="w-full max-w-sm rounded-xl border border-[#c9a96e]/70 bg-[#121520] p-5 text-[#f4efe6] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base font-bold text-[#f4d68c]">Установка на iPhone / iPad</h3>
              <p className="mt-2 text-sm text-[#cbd5e1] leading-relaxed">
                1. Нажмите кнопку <strong>Поделиться</strong> в панели Safari.<br />
                2. Выберите <strong>На экран «Домой»</strong>.
              </p>
              <button
                type="button"
                onClick={() => setShowIOSGuide(false)}
                className="mt-4 w-full rounded-lg border border-[#c9a96e]/50 bg-[#1c2132] py-2 text-sm font-semibold text-[#f4efe6] hover:bg-[#262d44] cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
