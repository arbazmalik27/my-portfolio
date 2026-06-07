import React from 'react';
import { motion as Motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <Motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        id={idName}
      >
        <Component /> {/* ✅ Fix: render as JSX */}
      </Motion.section>
    );
  };

export default SectionWrapper;
