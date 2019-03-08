// @flow

import React, { PureComponent } from 'react';
import radium from 'radium';
import MouseEventHook from '../Element/MouseEventHook.jsx';

const styles = {
  outerWrapper: {
    '@media screen and (max-width: 767px)': {
      width: '100%',
    },
  },
  wrapper: {
    height: 100,
    width: 'auto',
    padding: '10px 8px',
    margin: '0 0 12px',
    transition: 'all .32s ease-out',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
    '@media screen and (max-width: 767px)': {
      width: '100%',
      height: 'auto',
      padding: '0',
      flexDirection: 'column',
      alignItems: 'center',
      ':hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  media: {
    height: '100%',
    margin: '0 6px',
    boxShadow: '2px 2px 0px 0px rgba(128, 128, 128, 0.5)',
    '@media screen and (max-width: 767px)': {
      maxWidth: 335,
      width: '100%',
      height: 'auto',
      margin: '0 0 8px',
    },
  },
  mediaBg: {
    margin: '0 8px',
    boxShadow: '4px 4px 0px 0px rgba(128, 128, 128, 0.5)',
  },
  scroller: {
    overflowX: 'scroll',
    width: '100%',
    position: 'fixed',
    top: 20,
    left: 0,
    zIndex: 1000,
    backgroundColor: '#395443',
    transition: 'all 0.36s ease-out',
    pointerEvents: 'none',
    opacity: 0,
    '@media screen and (max-width: 767px)': {
      display: 'none',
    },
  },
  focusingScroller: {
    top: 10,
    pointerEvents: 'auto',
    opacity: 1,
  },
  focusingInnerWrapper: {
    padding: 16,
    height: 400,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    float: 'left',
  },
};

type ProjectMediaType = {
  type: string,
  url: string,
};

type Props = {
  media: array<ProjectMediaType>,
};

type State = {
  isFocusing: boolean,
};

class ProjectMedia extends PureComponent<State, Props> {
  static state = {
    isFocusing: false,
  }

  render() {
    const { isFocusing } = this.state;
    const { media } = this.props;

    return (
      <MouseEventHook isWrapText={false} style={styles.outerWrapper}>
        <div
          style={styles.wrapper}
          onClick={() => this.setState({ isFocusing: !isFocusing })}>
          {media.map((mediaItem, index) => mediaItem.type === 'PHOTO' ? (
            <img
              key={`media-${mediaItem.url}-${index}`}
              src={mediaItem.url}
              alt="projectMedia"
              style={styles.media} />
          ) : null)}
        </div>
        <div
          style={[
            styles.scroller,
            isFocusing && styles.focusingScroller,
          ]}
          onClick={() => this.setState({ isFocusing: false })}>
          <div
            style={styles.focusingInnerWrapper}>
            {media.map((mediaItem, index) => mediaItem.type === 'PHOTO' ? (
              <img
                key={`media-${mediaItem.url}-${index}`}
                src={mediaItem.url}
                alt="projectMedia"
                style={[
                  styles.media,
                  styles.mediaBg,
                ]} />
            ) : null)}
          </div>
          <button style={styles.closeBtn}>x</button>
        </div>
      </MouseEventHook>
    );
  }
}

export default radium(ProjectMedia);
