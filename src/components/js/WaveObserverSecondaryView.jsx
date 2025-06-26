import { useEffect, useRef } from "react";

export default function WaveObserver() {
  const ref = useRef(null);

  useEffect(() => {
    const trigger = ref.current;
    if (!trigger) return;

    // Buscar el .wave-cover más cercano a este trigger
    const parent = trigger.closest(".secondview");
    const cover = parent?.querySelector(".wave-cover");

    if (!cover) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          cover.classList.add("shrink");
        } else {
          cover.classList.remove("shrink");
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} style={{ height: "1px" }} />;
}
