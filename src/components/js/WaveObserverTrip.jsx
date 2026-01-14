// src/components/WaveObserver.jsx
import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const platanitotrip = document.querySelector(".platanito-trip");
    const cockteltrip = document.querySelector(".cocktel-trip");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          platanitotrip?.classList.add("animate-in");
          cockteltrip?.classList.add("animate-in");
        } else {
          // platanitotrip?.classList.remove("animate-in");
          // cockteltrip?.classList.remove("animate-in");
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  // El div es solo un marcador para observar visibilidad
  return <div ref={ref} style={{ height: "1px" }} />;
}
