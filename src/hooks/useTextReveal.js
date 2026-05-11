import { useEffect } from "react";
import gsap from "gsap";

export default function useTextReveal(selector) {
  useEffect(() => {
    const titles = document.querySelectorAll(selector);

    titles.forEach((title) => {
      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 100,
          rotateX: -90,
          transformOrigin: "bottom",
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
          },
        }
      );
    });
  }, [selector]);
}