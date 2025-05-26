// src/components/WaveObserver.jsx
import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const coverport = document.querySelector(".wave-cover-port");
    const chicaport = document.querySelector(".chica-port");
    if (!coverport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          coverport.classList.remove("shrink");
          chicaport?.classList.remove("animate-in");
        } else {
          coverport.classList.add("shrink");
          chicaport?.classList.add("animate-in");
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
