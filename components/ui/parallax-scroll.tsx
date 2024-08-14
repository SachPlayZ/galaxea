"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  images,
  speed = "slow",
  className,
}: {
  images: string[];
  speed?: "fast" | "normal" | "slow";
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef1 = useRef<HTMLUListElement>(null);
  const scrollerRef2 = useRef<HTMLUListElement>(null);
  const scrollerRef3 = useRef<HTMLUListElement>(null);

  useEffect(() => {
    duplicateImages(scrollerRef1.current);
    duplicateImages(scrollerRef2.current);
    duplicateImages(scrollerRef3.current);
    applyStyles();
  }, []);

  const duplicateImages = (scroller: HTMLUListElement | null) => {
    if (scroller) {
      const scrollerContent = Array.from(scroller.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scroller.appendChild(duplicatedItem);
      });
    }
  };

  const applyStyles = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div className={cn("relative h-[40rem] w-full overflow-hidden", className)}>
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black via-transparent to-transparent z-10 pointer-events-none" />
      
      {/* Ribbon with infinite moving text (Top Ribbon 1) */}
      <div className="ribbon-container-left">
        <div className="ribbon">
          <span className="ribbon-text">
            Trending NFT all the time! * Trending NFT all the time! * Trending
            NFT all the time!
          </span>
        </div>
      </div>
      
      {/* Ribbon with infinite moving text (Top Ribbon 2) */}
      <div className="ribbon-container-right">
        <div className="ribbon">
          <span className="ribbon-text">
            Trending NFT all the time! * Trending NFT all the time! * Trending
            NFT all the time!
          </span>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      <div ref={containerRef} className="relative flex gap-10 justify-center">
        <ul
          ref={scrollerRef1}
          className="flex flex-col items-center gap-4 animate-scroll-vertical"
        >
          {images.map((src, idx) => (
            <li
              className="w-[300px] h-[400px] max-w-full relative flex-shrink-0"
              key={`image-${idx}-1`}
            >
              <Image
                src={src}
                className="object-cover rounded-lg"
                alt={`image-${idx}`}
                layout="fill"
              />
            </li>
          ))}
        </ul>
        <ul
          ref={scrollerRef2}
          className="flex flex-col-reverse items-center gap-4 animate-scroll-vertical-reverse"
        >
          {images.map((src, idx) => (
            <li
              className="w-[300px] h-[400px] max-w-full relative flex-shrink-0"
              key={`image-${idx}-2`}
            >
              <Image
                src={src}
                className="object-cover rounded-lg"
                alt={`image-${idx}`}
                layout="fill"
              />
            </li>
          ))}
        </ul>
        <ul
          ref={scrollerRef3}
          className="flex flex-col items-center gap-4 animate-scroll-vertical"
        >
          {images.map((src, idx) => (
            <li
              className="w-[300px] h-[400px] max-w-full relative flex-shrink-0"
              key={`image-${idx}-3`}
            >
              <Image
                src={src}
                className="object-cover rounded-lg"
                alt={`image-${idx}`}
                layout="fill"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};