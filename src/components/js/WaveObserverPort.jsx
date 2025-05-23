// src/components/WaveObserver.jsx
import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const cover = document.querySelector(".wave-cover-port");
    if (!cover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cover.classList.remove("shrink");
        } else {
          cover.classList.add("shrink");
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
