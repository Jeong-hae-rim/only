import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const PWAUpdate = () => {
  const { needRefresh, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    if (needRefresh) {
      updateServiceWorker(true);
      window.location.reload();
    }
  }, [needRefresh]);

  return null;
};

export default PWAUpdate;
