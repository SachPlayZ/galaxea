"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: {
    title : string
    creator : string
    creatorImage : string
    images : string[]
    followers : number
    nft : number
    items : number
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
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
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-zinc-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--zinc-800), var(--zinc-900)",
            }}
            key={item.title}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="flex flex-col gap-4">

              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2">

                <img
                  src={item.creatorImage}
                  alt=""
                  className="h-10 w-10 rounded-full"
                  />
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.title}
                  </span>
                  <span className=" text-sm leading-[1.6] text-muted-foreground font-normal">
                    {item.creator}
                  </span>
                </span>
                  </div>
                  <Button className="bg-purple-500 text-white hover:bg-purple-600 rounded-3xl">Follow</Button>

              </div>
              <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-col">
                <h6 className="text-sm text-white">Followers</h6>
                <p className="text-2xl text-white">{item.followers}</p>
                </div>
                <div className="flex flex-col">
                <h6 className="text-sm text-white">NFTs</h6>
                <p className="text-2xl text-white">{item.nft}</p>
                </div>
                <div className="flex flex-col">
                <h6 className="text-sm text-white">Items</h6>
                <p className="text-2xl text-white">{item.items}</p>
                  </div>
                </div>
              <div className="flex flex-row gap-2">
                {item.images.map((image, idx) => (
                  <Image className="rounded-lg" key={idx} src={image} alt="" width={200} height={200} />
                ))}
              </div>
                </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
