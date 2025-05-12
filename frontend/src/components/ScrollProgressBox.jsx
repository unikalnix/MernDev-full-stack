import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollProgressBox = () => {
  const targetRef = useRef(null);

  // Watch scroll progress relative to targetRef
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'], // start when top hits bottom, end when bottom hits top
  });

  // Map scroll progress to animation values
  const x = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div style={{ height: '500vh', paddingTop: '300vh' }}>
      <div ref={targetRef}>
        <motion.div
          style={{
            width: 100,
            height: 100,
            background: 'blue',
            margin: 'auto',
            x,
            rotate,
            scale,
          }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressBox;
