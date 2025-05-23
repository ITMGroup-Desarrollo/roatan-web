// src/components/js/WaveObserver.jsx
import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const trigger = ref.current;
    if (!trigger) return;

    const cover = document.querySelector(".wave-cover");
    const chica = document.querySelector(".chica");
    const ave = document.querySelector(".ave");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cover?.classList.add("shrink");
          chica?.classList.add("animate-in");
          ave?.classList.add("animate-in");
        } else {
          cover?.classList.remove("shrink");
          chica?.classList.remove("animate-in");
          ave?.classList.remove("animate-in");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} style={{ height: "1px" }} />;
}
