// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import debug from 'debug';
import { Howl } from 'howler';
import MouseEventHook from './MouseEventHook.jsx';
import seaWaveSound from '../../media/sound/morning_sea_wave.mp3';

const debugVolume = debug('Portfolio:Volume');

const wavingKeyframes = radium.keyframes({
  '0%': {
    transform: 'rotateZ(0deg)',
  },
  '12%': {
    transform: 'rotateZ(-30deg) translateY(-5px)',
  },
  '25%': {
    transform: 'rotateZ(0deg) translateY(-10px)',
  },
  '37%': {
    transform: 'rotateZ(20deg) translateY(-5px)',
  },
  '50%': {
    transform: 'rotateZ(35deg) translate(15px, 0px)',
  },
  '62%': {
    transform: 'rotateZ(20deg) translate(20px, 5px)',
  },
  '75%': {
    transform: 'rotateZ(-10deg) translate(25px, 0px)',
  },
  '85%': {
    transform: 'rotateZ(-30deg) translate(10px, -5px)',
  },
  '90%': {
    transform: 'rotateZ(-25deg) translate(0, 0)'
  },
  '100%': {
    transform: 'rotateZ(-0deg) translate(0, 0)',
  },
}, 'waving');

const styles = {
  volumeBtn: {
    position: 'absolute',
    right: 48,
    bottom: 32,
    color: '#fff',
    transition: 'all 0.36s ease-out',
    fontSize: 20,
    opacity: 0.7,
    width: 35,
    textAlign: 'left',
    '@media screen and (max-width: 767px)': {
      right: 8,
      top: 16,
      bottom: 'unset',
      fontSize: 13,
    },
    ':hover': {
      opacity: 1,
      transform: 'scale(1.5)',
    },
  },
  waving: {
    transition: 'all 0.12s ease-out',
    animation: 'transform 8s linear infinite',
    animationName: wavingKeyframes,
    '@media screen and (max-width: 767px)': {
      animation: null,
    },
    ':hover': {
      animationPlayState: 'paused',
    },
  },
};

const INITIAL_SOUND_VOLUME = 0.4;

class OceanSoundController extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isVolumeOn: true,
    };

    this.isWaving = false;
  }

  componentDidMount() {
    this.startSeaWaving();

    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
  }

  componentWillUnmount() {
    if (this.fadeoutTimeout) {
      clearTimeout(this.fadeoutTimeout);
    }

    window.removeEventListener('mousemove');
  }

  onMouseMove(e) {
    const { isVolumeOn } = this.state;

    if (isVolumeOn && !this.isWaving) {
      this.isWaving = true;

      const wavingVolume = INITIAL_SOUND_VOLUME + 0.06 * (Math.sqrt(Math.abs(e.movementX) + Math.abs(e.movementY)));

      debugVolume('waving:', wavingVolume);

      this.sound.fade(this.sound.volume(), wavingVolume, 500);

      this.fadeoutTimeout = setTimeout(() => {
        this.fadeOut(wavingVolume, 500);

        this.isWaving = false;
      }, 2000);
    }
  }

  fadeOut(from, duration) {
    const { isVolumeOn } = this.state;

    const to = isVolumeOn ? INITIAL_SOUND_VOLUME : 0;

    this.sound.fade(from, to, duration);
  }

  startSeaWaving() {
    this.sound = new Howl({
      src: [seaWaveSound],
      autoplay: true,
      loop: true,
      volume: INITIAL_SOUND_VOLUME,
    });

    this.sound.play();
  }

  toggleSound() {
    const { isVolumeOn } = this.state;

    if (isVolumeOn) {
      this.sound.pause();
    } else {
      this.sound.fade(0, INITIAL_SOUND_VOLUME, 2000);
      this.sound.play();
    }

    this.setState({ isVolumeOn: !isVolumeOn });
  }

  render() {
    const { isVolumeOn } = this.state;

    return (
      <MouseEventHook isWrapText={false}>
        <button
          style={styles.volumeBtn}
          onClick={() => this.toggleSound()}>
          <i
            key="volume-icon"
            style={[
              {
                animationPlayState: isVolumeOn ? 'running' : 'paused',
              },
              styles.waving,
            ]}
            className={isVolumeOn ? "fas fa-volume-up" : "fas fa-volume-off"}></i>
        </button>
      </MouseEventHook>
    );
  }
}

export default radium(OceanSoundController);
