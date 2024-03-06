import { BeforeInstallPromptEvent } from '@/types/beforeInstallPromptEvent';
import { useEffect, useState } from 'react';

interface IUseHandleInstallPwa {
  isAppInstalled: boolean;
  handleInstallApp: () => void;
}

const useHandleInstallPwa = (): IUseHandleInstallPwa => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isAppInstalled, setIsAppInstalled] = useState(false);

  const handleInstallApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: { outcome: string }) => {
        if (choiceResult.outcome === 'accepted') {
          //console.log('User accepted the install prompt');
          setIsAppInstalled(true);
        } else {
          //console.log('User dismissed the install prompt');
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });

    handleInstallApp();
  }, []);

  return { isAppInstalled, handleInstallApp };
};

export default useHandleInstallPwa;
