"use client";


import {motion, useScroll, useTransform} from "motion/react";
import React, {useRef} from "react";
import {skillsData} from "@/lib/data";

const Skills = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,

  });

  const x = useTransform(scrollYProgress, [0, 1], ["35%", "-50%"])






  return (
    <section ref={ref} className="relative h-[300vh] py-16">
      <div className="container h-screen sticky left-0 top-0 flex flex-col items-center overflow-hidden">
        <h1 className="text-4xl text-center text-balance md:text-5xl lg:text-6xl">
          My Skills
        </h1>

          <motion.div

              className="flex gap-4 "
              style={{
                x
              }}
          >
            {skillsData.map((skill, index) => (
                <div
                    key={skill.label}
                    className=" mt-16 p-5 h-[20rem] w-[15rem] rounded-lg backdrop-blur-lg backdrop-saturate-150 bg-slate-300/10"
                >
                  <div className="h-[90%]  flex items-center justify-center overflow-hidden">
                    <img
                        className="object-cover"
                        alt={skill.label}

                        src={skill.src}
                    />
                  </div>
                  <div>
                    <h4 className="text-center font-extralight">{skill.label}</h4>
                  </div>
                </div>
            ))}
          </motion.div>
        </div>

    </section>
  );
};

export default Skills;
