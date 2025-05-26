// src/components/WaveObserver.jsx
import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const coverdiscover = document.querySelector(".wave-cover-discover");
    if (!coverdiscover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          coverdiscover.classList.remove("shrink");
        } else {
          coverdiscover.classList.add("shrink");
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
