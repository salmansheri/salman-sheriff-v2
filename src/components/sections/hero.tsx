'use client';

import { ArrowDown } from "lucide-react";

import {
  motion,
  useAnimate,
  useTransform,
  stagger,
  useScroll,
} from "motion/react";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";
import Button from "@/components/ui/button";

const Hero = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrollingDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollingDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: "lines,words",
      tagName: "span",
    });

    titleAnimate(
      titleScope.current.querySelectorAll(".word"),
      {
        transform: "translateY(0)",
      },
      {
        duration: 0.5,
        delay: stagger(0.2),
      },
    );
  }, [titleAnimate, titleScope]);

  const handleProjectsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const url = new URL(event.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const url = new URL(event.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="min-h-dvh pt-20" id="home">
      <div className="container sticky top-0 grid md:h-screen items-stretch !max-w-full md:grid-cols-12">
        <div className="md:col-span-7">
          <motion.h1
            ref={titleScope}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl md:text-6xl  mt-20 text-balance"
          >
            Transforming ideas into engaging digital experiences with innovative
            code and inspired design.
          </motion.h1>
          <div className="flex items-center  gap-6 mt-16">
            <motion.div
              initial={{
                opacity: 0,
                y: "100%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 2.75,
              }}
            >
              <a href="#projects" onClick={handleProjectsClick}>
                <Button variant="secondary">
                  <span>View My Work</span>
                  <div className="overflow-hidden size-5">
                    <div className="h-5 w-10 flex grop-hover/button:-translate-x-1/2 transition transform duration-500">
                      <ArrowDown className="size-4" />
                      <ArrowDown className="size-4" />
                    </div>
                  </div>
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: "100%",
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 3.2,
              }}
            >
              <a href="#contact" onClick={handleContactClick}>
                <Button variant="text">Let&apos;s Talk</Button>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-5  relative flex items-center justify-center">
          <motion.div
            style={{
              width: portraitWidth,
            }}
            className="mt-20 max-md:!w-full md:size-full md:right-0 md:absolute md:mt-0"
          >
            <img
              alt="my image"
              className="w-[300px] h-[300px]  lg:w-full lg:h-full place-content-center"
              src="/images/my_photo.jpg"
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollingDiv} className="md:h-[200vh]"></div>
    </section>
  );
};

export default Hero;
