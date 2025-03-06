import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

const PWAUpdate = () => {
  const { needRefresh, updateServiceWorker } = useRegisterSW();
  const [showReload, setShowReload] = useState(false);

  useEffect(() => {
    if (needRefresh) {
      setShowReload(true);
    }
  }, [needRefresh]);

  return showReload ? (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "black",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => {
        updateServiceWorker(true); // 새 버전 적용
        window.location.reload(); // 새로고침
      }}
    >
      새로운 업데이트가 있습니다. 클릭하여 새로고침
    </div>
  ) : null;
};

export default PWAUpdate;
