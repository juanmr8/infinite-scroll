// Setting the execution context to client-side for Next.js optimization.
"use client";

// Importing CSS module for styling components in this page.
import styles from "./page.module.css";

// Importing Image component from Next.js for optimized image handling.
import Image from "next/image";

// Importing GSAP for animations and ScrollTrigger for scroll-based animations.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Importing hooks from React.
import { useEffect, useRef } from "react";

// Main functional component for the Home page.
export default function Home() {
  // useRef hook to reference DOM elements for animation.
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);

  // Variables for controlling the animation state.
  let xPercent = 0; // Represents the horizontal position percentage.
  let direction = 1; // Represents the direction of movement.

  // useEffect hook to set up animations on component mount.
  useEffect(() => {
    // Registering ScrollTrigger plugin with GSAP.
    gsap.registerPlugin(ScrollTrigger);

    // Requesting the first animation frame.
    requestAnimationFrame(animation);

    // GSAP animation for the slider, responding to scroll events.
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement, // Setting the scroll trigger to the entire document.
        start: 0, // Scroll start position.
        end: window.innerHeight, // Scroll end position.
        scrub: 0.25, // Smooth scrubbing effect for the scroll animation.
        onUpdate: (e) => (direction = e.direction * -1), // Updating direction based on scroll.
      },
      x: "-=300px", // Moving the slider horizontally.
    });
  }, []);

  // Animation function to continuously animate text.
  const animation = () => {
    // Resetting xPercent to create an infinite loop effect.
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }

    // Setting the position of the text elements.
    gsap.set(firstText.current, {
      xPercent: xPercent,
    });
    gsap.set(secondText.current, {
      xPercent: xPercent,
    });

    // Incrementing xPercent for continuous movement and requesting the next animation frame.
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };

  // JSX to render the page content.
  return (
    <>
      <main className={styles.main}>
        {/* Next.js Image component for optimized image rendering */}
        <Image fill={true} src='/images/background.png' alt='image' />
        <div className={styles.sliderContainer}>
          {/* Container for the sliding text: Based on the amount of scroll, it 
          will move to a total 300px (at the end of the page) 
          */}
          <div ref={slider} className={styles.slider}>
            {/* First and second text elements for the animation */}
            <p ref={firstText}>Freelance Photographer –</p>
            <p ref={secondText}>Freelance Photographer –</p>
          </div>
        </div>
      </main>
    </>
  );
}
