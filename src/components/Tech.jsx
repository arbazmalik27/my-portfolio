import React from 'react';
import { motion as Motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const textVariant = () => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      duration: 1,
      delay: 0.2,
    },
  },
});

const Tech = () => {
  return (
    <div className="relative w-full py-16 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl shadow-indigo-950">
      {/* Fuchsia Blur Background */}
      <div className="absolute inset-0 -z-10 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]" />

      {/* Section Heading */}
      <Motion.div
        variants={textVariant()} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm text-gray-400 uppercase tracking-widest">Technologies I Use</p>
        <h2 className="sm:text-7xl font-bold text-white py-4 text-4xl">Tech Stack</h2>
      </Motion.div>

      {/* Floating Tech Icons */}
      <div className="relative z-10 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <Motion.div
            key={technology.name}
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'loop',
              delay: index * 0.3,
              ease: 'easeInOut',
            }}
            className="w-28 h-28 p-[2px] rounded-xl bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500"
          >
            <div className="flex flex-col items-center justify-center w-full h-full rounded-xl bg-neutral-900/80 shadow-lg backdrop-blur-sm">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <p className="text-sm text-center text-white font-medium">
                {technology.name}
              </p>
            </div>
          </Motion.div>
        ))}
      </div>
    </div>
  );
};

const WrappedTech = SectionWrapper(Tech, 'tech');
export default WrappedTech;
