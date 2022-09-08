import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion';
import { wrap } from '@motionone/utils';

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const smoothVelocity = useSpring(10, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [50, 800], [0, 2], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(-20, -50, v)}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -0.5;
    }
    else if (velocityFactor.get() > 0) {
      directionFactor.current = 0.5;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}
ParallaxText.propTypes = {
  children: PropTypes.string.isRequired,
  baseVelocity: PropTypes.number.isRequired,
};
export default ParallaxText;
