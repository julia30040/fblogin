//@flow

import radium from 'radium';

const revealLeftKeyframes = radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(40px)',
  },
  '50%': {
    opacity: 0,
    transform: 'translateX(40px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
}, 'reveal-left');

const revealUpKeyframes = radium.keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(40px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
}, 'reveal-up');

const revealLeft = {
  animation: 'transform 0.6s ease-out',
  animationName: revealLeftKeyframes,
};

const revealUp = {
  animation: 'transform 0.6s ease-out',
  animationName: revealUpKeyframes,
};

export {
  revealUp,
  revealLeft,
};
