// @flow
import React, { PureComponent } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  background: {
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
  },
  backgroundSm: {
    width: 'calc(100% + 80px)',
    height: 'calc(100vh + 80px)',
    position: 'absolute',
    left: '-40px',
    top: '-40px',
    transition: 'transform 4.2s ease-out, filter .6s linear',
    filter: 'blur(8px)',
    WebkitFilter: 'blur(8px)',
  },
  backgroundLg: {
    width: '100%',
    height: '100%',
    transition: 'opacity 0.24s linear',
    opacity: 0,
  },
  removeBlur: {
    filter: 'blur(0)',
    WebkitFilter: 'blur(0)',
  },
  show: {
    opacity: 1,
  },
};

type Props = {
  smSizeURL?: ?string,
  url: string,
};

class MovingBackground extends PureComponent<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
    };
  }

  componentDidMount() {
    const {
      smSizeURL,
      url,
    } = this.props;

    this.background.addEventListener('mousemove', (e) => this.move(e));

    if (smSizeURL && url) {
      this.loadLargeImage(url);
    }
  }

  componentWillUnMount() {
    this.background.removeEventListener();
  }

  move(e) {
    const translateX =  (e.target.offsetWidth / 2 - e.clientX) * 0.05;
    const translateY =  (e.target.offsetHeight / 2 - e.clientY) * 0.05;

    e.currentTarget.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }

  loadLargeImage(url) {
    const image = new Image();

    image.onload = () => {
      this.setState({ isLoaded: true });
    }

    image.src = url;
  }

  render() {
    const { isLoaded } = this.state;

    const {
      smSizeURL,
      url,
    } = this.props;

    return (
      <div style={styles.wrapper}>
        <div
          ref={ref => { this.background = ref; }}
          style={[
            styles.background,
            styles.backgroundSm,
            isLoaded && styles.removeBlur,
            {
              backgroundImage: `url(${smSizeURL || url})`,
            },
          ]}>
          <div
            style={[
              styles.background,
              styles.backgroundLg,
              isLoaded && styles.show,
              {
                backgroundImage: `url(${url})`,
              },
            ]} />
        </div>
      </div>
    );
  }
}

MovingBackground.defaultProps = {
  smSizeURL: null,
};

export default radium(MovingBackground);
