// components/HeaderAnimations.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const HeaderAnimations = () => {
  const component = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -40 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            x: -20,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
        )
        .to(
          ".name-animation-last-index-6, .name-animation-first-index-4",
          {
            x: 30,
            transformOrigin: "bottom",
            duration: 1,
            ease: "elastic.out(1,0.2)",
          },
          "+=0.5",
        );
    }, component);
    return () => ctx.revert();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return null;
    return name.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index-${index} inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div ref={component}>
      <div className="flex-none md:flex justify-between items-center">
        <h1 className="mb-4 md:mb-4 text-[clamp(5.5rem,15vmin,15rem)] font-extrabold font-[rubik-mono-one-regular] leading-none tracking-tighter md:px-2 ml-2">
          <span className="block text-slate-600 dark:text-gray-400">
            {renderLetters("Tayeb", "first")}
          </span>
          <span className="-mt-[.2em] block text-slate-700 dark:text-gray-200">
            {renderLetters("Hossain", "last")}
          </span>
          <span className="job-title font-thin block bg-gradient-to-tr from-blue-950 to-gray-800 dark:text-gray-300 bg-clip-text text-3xl uppercase tracking-[4px] text-transparent opacity-0 md:text-4xl mb-6">
            Web Developer
          </span>
        </h1>

        <div className="w-full h-52 md:w-60 md:h-60 overflow-hidden mb-10">
          <Image
            src="/_static/me.jpg"
            width={220}
            height={220}
            alt="avatar"
            className="w-full h-full object-cover rounded-3xl cursor-pointer hover:grayscale mb-5"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderAnimations;
