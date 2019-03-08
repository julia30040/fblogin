// @flow
import React from 'react';
import radium from 'radium';
import MouseEventHook from './MouseEventHook.jsx';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 8px 0 0',
  },
  relatedLink: {
    fontSize: '1.5em',
    color: 'rgba(255, 255, 255, 0.7)',
    transition: 'color 0.12s ease-out',
    ':hover': {
      color: '#ffffff',
    },
  },
};

type Props = {
  url: string,
  iconClass: string,
};

function LinkIcon ({
  url,
  iconClass,
}:Props) {
  return (
    <div style={styles.wrapper}>
      <MouseEventHook>
        <a style={styles.relatedLink} href={url} target="blank">
          <i className={iconClass}></i>
        </a>
      </MouseEventHook>
    </div>
  );
}

export default radium(LinkIcon);
