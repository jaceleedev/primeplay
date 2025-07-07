"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    kakao: any;
  }
}

const LocationSection = () => {
  const t = useTranslations("SupportPage.LocationSection");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  useEffect(() => {
    if (!window.kakao || !window.kakao.maps) {
      return;
    }

    let map: any | null = null;
    let position: any | null = null;
    let keydownListener: ((e: KeyboardEvent) => void) | null = null;
    let keyupListener: (() => void) | null = null;

    const handleResize = () => {
      if (map && position) {
        map.setCenter(position);
      }
    };

    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      if (container) {
        position = new window.kakao.maps.LatLng(37.5668657, 126.8413718);

        const options = {
          center: position,
          level: 2,
        };

        map = new window.kakao.maps.Map(container, options);

        if (!isMobile) {
          // 데스크탑: 스크롤 줌 비활성화
          map.setZoomable(false);

          keydownListener = (e: KeyboardEvent) => {
            // Ctrl 또는 Cmd 키가 눌렸을 때만 줌 활성화
            if (map && (e.ctrlKey || e.metaKey)) {
              map.setZoomable(true);
            }
          };

          keyupListener = () => {
            if (map) {
              map.setZoomable(false);
            }
          };

          window.addEventListener("keydown", keydownListener);
          window.addEventListener("keyup", keyupListener);
          // 브라우저 창이 포커스를 잃었을 때도 줌 비활성화
          window.addEventListener("blur", keyupListener);
        }

        const marker = new window.kakao.maps.Marker({
          position: position,
        });
        marker.setMap(map);

        window.addEventListener("resize", handleResize);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (keydownListener) {
        window.removeEventListener("keydown", keydownListener);
      }
      if (keyupListener) {
        window.removeEventListener("keyup", keyupListener);
        window.removeEventListener("blur", keyupListener);
      }
    };
  }, [isMobile]);

  return (
    <section className="relative mx-auto h-[60vh] min-h-[400px]">
      <div id="map" className="absolute left-0 top-0 h-full w-full" />
      <div className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-md bg-black/70 px-3 py-1.5 text-sm text-white whitespace-nowrap">
        {isMobile ? t("mapInstructions.mobile") : t("mapInstructions.desktop")}
      </div>
    </section>
  );
};

export default LocationSection;
