import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const PWAUpdate = () => {
  const { needRefresh, updateServiceWorker } = useRegisterSW();
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    const autoUpdate = async () => {
      if (localStorage.getItem("pwa-updated") === "true") {
        localStorage.removeItem("pwa-updated");
        setShowReload(false);
        return;
      }

      if (needRefresh) {
        await updateServiceWorker(true); // ✅ 에러 해결: async/await 사용
        localStorage.setItem("pwa-updated", "true"); // 업데이트 후 플래그 저장
        setTimeout(() => {
          window.location.reload();
        }, 500); // 새로고침
      }
    };

    autoUpdate(); // 자동 업데이트 실행
  }, [needRefresh]);

  return null; // UI 없이 자동 업데이트
};

export default PWAUpdate;
