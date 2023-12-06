"use client";
import styles from "./page.module.css";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  let xPercent = 0;
  let direction = 1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-=300px",
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, {
      xPercent: xPercent,
    });
    gsap.set(secondText.current, {
      xPercent: xPercent,
    });

    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };

  return (
    <>
      <main className={styles.main}>
        <Image fill={true} src='/images/background.png' alt='image' />
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Freelance Photographer –</p>
            <p ref={secondText}>Freelance Photographer –</p>
          </div>
        </div>
      </main>
    </>
  );
}
