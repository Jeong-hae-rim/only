import { useEffect } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const clearCacheAndReload = async () => {
  if ("serviceWorker" in navigator) {
    try {
      // 모든 서비스 워커 해제
      const registrations = await navigator.serviceWorker.getRegistrations();
      for (const registration of registrations) {
        await registration.unregister();
      }
      console.log("서비스 워커 등록 해제 완료");

      // 모든 캐시 삭제
      const cacheKeys = await caches.keys();
      await Promise.all(cacheKeys.map((key) => caches.delete(key)));
      console.log("캐시 삭제 완료");

      // 로컬스토리지 플래그 제거
      localStorage.removeItem("pwa-updated");

      // 페이지 강제 새로고침
      window.location.reload();
    } catch (error) {
      console.error("캐시 삭제 중 오류 발생:", error);
    }
  }
};

const PWAUpdate = () => {
  const { needRefresh, updateServiceWorker } = useRegisterSW();

  useEffect(() => {
    const autoUpdate = async () => {
      if (localStorage.getItem("pwa-updated") === "true") {
        return; // 기존에 업데이트 완료된 경우 실행 안 함
      }

      if (needRefresh) {
        await updateServiceWorker(true);
        localStorage.setItem("pwa-updated", "true"); // 업데이트 후 플래그 저장
        setTimeout(() => {
          clearCacheAndReload(); // ✅ 캐시 삭제 후 강제 새로고침
        }, 500);
      }
    };

    autoUpdate();
  }, [needRefresh]);

  return null; // UI 없이 자동 업데이트
};

export default PWAUpdate;
